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

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop =
      window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches;

    let lenis: Lenis | null = null;
    let updateTicker: ((time: number) => void) | null = null;

    if (isDesktop) {
      // Smooth inertial scroll for desktop
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    }

    // GSAP Animation Context
    const ctx = gsap.context(() => {
      // 1. HERO SECTION ENTRANCE (Immediate smooth staggered reveal on mount)
      const heroItems = document.querySelectorAll(".gsap-hero-item");
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }

      const heroVisual = document.querySelector(".gsap-hero-visual");
      if (heroVisual) {
        gsap.fromTo(
          heroVisual,
          { opacity: 0, scale: 0.95, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.15,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }

      // 2. SECTION TITLES (H1, H2, H3 headings)
      const titles = document.querySelectorAll(".gsap-title");
      titles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 3. SECTION SUBTITLES & MONO BADGES
      const subtitles = document.querySelectorAll(".gsap-subtitle");
      subtitles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 4. PARAGRAPHS & NARRATIVE TEXT
      const texts = document.querySelectorAll(".gsap-text");
      texts.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
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

      // 5. CTA BUTTONS & ACTIONS
      const btns = document.querySelectorAll(".gsap-btn");
      btns.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 6. VISUAL PHOTO FRAMES & MAP CONTAINERS
      const imageFrames = document.querySelectorAll(".gsap-image-frame");
      imageFrames.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.96, y: 26 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 7. STAGGER GROUPS (Grids of Cards: Features, VIP, Menu, Reviews, etc.)
      const staggerGroups = document.querySelectorAll(".gsap-stagger-group");
      staggerGroups.forEach((group) => {
        const cards = group.querySelectorAll(".gsap-card, .gsap-reveal");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: group,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });

      // 8. STANDALONE CARDS (Outside stagger groups)
      const allCards = Array.from(
        document.querySelectorAll<HTMLElement>(".gsap-card, .gsap-reveal")
      );
      const standaloneCards = allCards.filter(
        (card) => !card.closest(".gsap-stagger-group")
      );

      standaloneCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    // Refresh ScrollTrigger after fonts and layout settle
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const timer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

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
              duration: 1.2,
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
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.removeEventListener("click", handleAnchorClick);
      if (updateTicker) {
        gsap.ticker.remove(updateTicker);
      }
      ctx.revert();
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
