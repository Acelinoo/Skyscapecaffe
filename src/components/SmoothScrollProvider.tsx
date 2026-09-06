"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preference for accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Show all elements immediately if reduced motion is requested
      document
        .querySelectorAll(
          ".gsap-title, .gsap-subtitle, .gsap-text, .gsap-card, .gsap-btn, .gsap-image-frame, .gsap-hero-item, .gsap-hero-visual, .gsap-reveal"
        )
        .forEach((el) => {
          const element = el as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "none";
        });
      return;
    }

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop =
      window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches;

    let lenis: Lenis | null = null;
    let updateTicker: ((time: number) => void) | null = null;

    if (isDesktop) {
      // Serene inertia scroll for desktop fine-pointer devices
      lenis = new Lenis({
        duration: 1.3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.0,
        infinite: false,
      });

      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    }

    // Initialize GSAP Animation Context for safe garbage collection & zero memory leak
    const ctx = gsap.context(() => {
      // 1. HERO SECTION ENTRANCE (Immediate staggered orchestrator on mount)
      const heroItems = document.querySelectorAll(".gsap-hero-item");
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "transform,opacity",
          }
        );
      }

      const heroVisual = document.querySelector(".gsap-hero-visual");
      if (heroVisual) {
        gsap.fromTo(
          heroVisual,
          { opacity: 0, scale: 1.03, y: 16 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
            delay: 0.15,
            clearProps: "transform,opacity",
          }
        );
      }

      // 2. SECTION TITLES (H1, H2, H3 headings)
      const titles = document.querySelectorAll(".gsap-title");
      titles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });

      // 3. SECTION SUBTITLES & MONO BADGES
      const subtitles = document.querySelectorAll(".gsap-subtitle");
      subtitles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });

      // 4. PARAGRAPHS & NARRATIVE TEXT
      const texts = document.querySelectorAll(".gsap-text");
      texts.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });

      // 5. CTA BUTTONS & ACTIONS
      const btns = document.querySelectorAll(".gsap-btn");
      btns.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });

      // 6. VISUAL PHOTO FRAMES & MAP CONTAINERS
      const imageFrames = document.querySelectorAll(".gsap-image-frame");
      imageFrames.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.98, y: 22 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });

      // 7. STAGGER GROUPS (Grids of Cards: Features, VIP, Menu, Reviews, etc.)
      const staggerGroups = document.querySelectorAll(".gsap-stagger-group");
      staggerGroups.forEach((group) => {
        const cards = group.querySelectorAll(
          ".gsap-card, .gsap-reveal, > div"
        );
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: group,
                start: "top 88%",
                once: true,
                fastScrollEnd: true,
              },
            }
          );
        }
      });

      // 8. STANDALONE GSAP REVEAL CARDS (Fallback / individual cards outside groups)
      const standaloneReveals = document.querySelectorAll(
        ".gsap-card:not(.gsap-stagger-group .gsap-card), .gsap-reveal:not(.gsap-stagger-group .gsap-reveal)"
      );
      standaloneReveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      });
    });

    // Handle hash links smooth scrolling
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
              offset: -70,
              duration: 1.3,
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

    // Refresh ScrollTrigger after elements paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleAnchorClick);
      if (updateTicker) {
        gsap.ticker.remove(updateTicker);
      }
      ctx.revert(); // Revert all animations and clean up triggers
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
