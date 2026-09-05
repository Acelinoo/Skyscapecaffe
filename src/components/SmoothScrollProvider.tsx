"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if device is desktop with fine pointer (mouse / trackpad) and adequate width
    const isDesktop =
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      window.matchMedia("(pointer: fine)").matches;

    let lenis: Lenis | null = null;
    let updateTicker: ((time: number) => void) | null = null;
    let mobileObserver: IntersectionObserver | null = null;

    if (isDesktop) {
      // Register GSAP ScrollTrigger for Desktop
      gsap.registerPlugin(ScrollTrigger);

      // Initialize Lenis with serene, buttery-smooth slow inertia scrolling for Desktop
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.0,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Connect Lenis scroll events to GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Synchronize GSAP ticker with Lenis requestAnimationFrame
      updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      // GSAP Entrance Reveal Animations for Desktop
      const revealElements = document.querySelectorAll(".gsap-reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    } else {
      // Mobile / Touch Devices: Native zero-cost IntersectionObserver (0ms TBT)
      const revealElements =
        document.querySelectorAll<HTMLElement>(".gsap-reveal");

      mobileObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.transition =
                "opacity 0.6s ease-out, transform 0.6s ease-out";
              target.style.opacity = "1";
              target.style.transform = "translateY(0)";
              mobileObserver?.unobserve(target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      );

      revealElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        mobileObserver?.observe(el);
      });
    }

    // Smooth scroll for in-page hash links (e.g. #beranda, #katalog-menu)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: -60,
              duration: 1.4,
            });
          } else {
            (targetElement as HTMLElement).scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (mobileObserver) {
        mobileObserver.disconnect();
      }
      if (updateTicker) {
        gsap.ticker.remove(updateTicker);
      }
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
