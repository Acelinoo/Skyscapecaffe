"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenReservation }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative w-full pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-[#F3F4F6] border-b border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography, Narrative & Actions */}
          <div className="lg:col-span-6 space-y-6 z-10">
            {/* Top Minimal Label (Strictly non-pill) */}
            <div className="gsap-hero-item flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
                BANDUNG HIGHLANDS // 1.240 MDPL
              </span>
              <div className="h-[1px] w-12 bg-[#80858A]/40" />
            </div>

            {/* Main Big Display Title */}
            <div className="gsap-hero-item space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-normal tracking-tight text-[#373A3E] leading-[1.1]">
                GOOD COFFEE
                <br />
                GOOD MOOD
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-[#80858A] pt-1">
                Racikan Sempurna di Ketinggian Bandung
              </p>
            </div>

            {/* Headline & Tagline from User Request */}
            <div className="gsap-hero-item space-y-2 border-l-2 border-[#373A3E] pl-4">
              <h2 className="text-base sm:text-lg font-semibold tracking-wide text-[#373A3E] uppercase">
                {CAFE_INFO.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#80858A] leading-relaxed font-normal">
                {CAFE_INFO.subheadline}
              </p>
            </div>

            {/* Body Description */}
            <p className="gsap-hero-item text-sm text-[#80858A] leading-relaxed max-w-xl">
              Rasakan pengalaman bersantap dan menikmati racikan kopi artisan
              sembari memandangi matahari terbenam dan panorama gemerlap lampu
              kota Bandung yang spektakuler dari ketinggian Punclut.
            </p>

            {/* CTA Buttons */}
            <div className="gsap-hero-item pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="#katalog-menu"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] group shadow-sm"
              >
                <span>JELAJAHI MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-[#373A3E] text-[#373A3E] hover:text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>RESERVASI SEKARANG</span>
              </button>
            </div>

            {/* Quick Metrics Bar (Minimalist without pill) */}
            <div className="gsap-hero-item pt-4 border-t border-[#D8DCDE] max-w-lg lg:max-w-xl">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <span className="block font-serif text-lg sm:text-2xl text-[#373A3E] whitespace-nowrap">
                    4.8 / 5.0
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#80858A] uppercase whitespace-nowrap block mt-0.5">
                    Ulasan Google
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-lg sm:text-2xl text-[#373A3E] whitespace-nowrap">
                    360° View
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#80858A] uppercase whitespace-nowrap block mt-0.5">
                    City Lights
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-lg sm:text-2xl text-[#373A3E] whitespace-nowrap">
                    10:00 - 23:00
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#80858A] uppercase whitespace-nowrap block mt-0.5">
                    Buka Setiap Hari
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Container with Ambient Border & Tags */}
          <div className="lg:col-span-6 relative">
            <div className="gsap-hero-visual relative mx-auto max-w-lg lg:max-w-none">
              {/* Background ambient aesthetic shadow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#373A3E]/15 to-transparent transform rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[580px] w-full overflow-hidden shadow-2xl border border-[#D8DCDE] bg-[#373A3E]">
                <Image
                  src="/images/skyscape-exterior.jpg"
                  alt="Gedung utama Skyscapecafe Bandung berarsitektur kaca A-frame di kawasan Punclut"
                  fill
                  priority
                  quality={82}
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />

                {/* Dark Vignette Overlay for Depth & Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Sign / Atmosphere Note */}
                <div className="absolute top-4 right-4 bg-[#24272A]/85 text-[#F3F4F6] px-3.5 py-1.5 backdrop-blur-sm border border-[#80858A]/40 text-right">
                  <span className="font-serif text-xs text-[#E5E7EB] block font-semibold leading-tight">
                    SKYSCAPE CAFE & EATERY
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#9DA2A7]">
                    PUNCLUT • BANDUNG
                  </span>
                </div>

                {/* Bottom Image Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#24272A]/85 text-[#F3F4F6] px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#80858A]/40">
                    [GEDUNG UTAMA // A-FRAME GLASS]
                  </span>
                  <span className="bg-[#F3F4F6]/95 text-[#373A3E] px-3 py-1 text-[10px] font-mono tracking-widest uppercase font-semibold">
                    1.240 MDPL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
