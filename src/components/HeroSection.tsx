"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";
import { BrushEdgeVertical, BrushEdgeTop } from "./BrushEdge";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenReservation }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative w-full bg-[#F3F4F6] text-[#373A3E] overflow-hidden border-b border-[#D8DCDE]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch">
          {/* Left Column: Typography, Narrative & Actions on #F3F4F6 Background */}
          <div className="lg:col-span-6 xl:col-span-5 z-20 flex flex-col justify-center px-6 sm:px-10 lg:pl-14 lg:pr-8 py-12 lg:py-16 space-y-6 bg-[#F3F4F6]">
            {/* Top Minimal Label (Strictly non-pill) */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
                BANDUNG HIGHLANDS // 1.240 MDPL
              </span>
              <div className="h-[1px] w-12 bg-[#80858A]/40" />
            </div>

            {/* Display Title - 100% Matching Gambar 1 */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal tracking-tight text-[#373A3E] leading-[1.08]">
                GOOD COFFEE
                <br />
                GOOD MOOD
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-[#80858A] pt-1">
                Brewed to Perfection
              </p>
            </div>

            {/* Headline & Tagline from User Request */}
            <div className="space-y-2 border-l-2 border-[#373A3E] pl-4">
              <h2 className="text-sm sm:text-base font-semibold tracking-wide text-[#373A3E] uppercase">
                {CAFE_INFO.headline}
              </h2>
              <p className="text-xs sm:text-sm text-[#80858A] leading-relaxed font-normal">
                {CAFE_INFO.subheadline}
              </p>
            </div>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-[#80858A] leading-relaxed max-w-lg">
              Melangkah masuk ke dalam suasana hangat di dataran tinggi Bandung,
              di mana setiap cangkir kopi diracik dengan dedikasi penuh dan
              setiap sudut menyajikan panorama alam yang menenangkan.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] group shadow-sm"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-[#373A3E] text-[#373A3E] hover:text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>RESERVASI MEJA</span>
              </button>
            </div>

            {/* Quick Metrics Bar (Minimalist without pill) */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#D8DCDE] max-w-md">
              <div>
                <span className="block font-serif text-xl text-[#373A3E]">
                  4.8 / 5.0
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#80858A] uppercase">
                  Ulasan Google
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl text-[#373A3E]">
                  360° View
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#80858A] uppercase">
                  City Lights
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl text-[#373A3E]">
                  10:00 - 23:00
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#80858A] uppercase">
                  Buka Setiap Hari
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Organic Brush Stroke Tear Border (Matching Gambar 1 & Gambar 2) */}
          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full bg-[#373A3E] overflow-hidden">
            {/* The Real Skyscapecafe Exterior Photo (Gambar 1 yang diunggah) */}
            <Image
              src="/images/skyscape-exterior.jpg"
              alt="Gedung utama Skyscapecafe Bandung berarsitektur kaca di perbukitan Punclut"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            {/* Subtle Vignette Overlay for Depth & Warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/50 via-transparent to-transparent pointer-events-none" />

            {/* ORGANIC TORN BRUSH STROKE EDGE (Gambar 1 & Gambar 2) */}
            {/* Vertical Tear along the Left Edge overlapping the Photo */}
            <BrushEdgeVertical
              className="hidden lg:block w-20 sm:w-28 xl:w-36 -left-[1px]"
              fillColor="#F3F4F6"
            />

            {/* Top Organic Painted Brush Edge */}
            <BrushEdgeTop
              className="w-full -top-[1px] h-8 sm:h-12"
              fillColor="#F3F4F6"
            />

            {/* Ambient Sign in Top Right (Like "good vibes only" in Gambar 1) */}
            <div className="absolute top-6 right-6 z-20 bg-[#24272A]/85 text-[#F3F4F6] px-4 py-2 border border-[#80858A]/30 backdrop-blur-sm text-right">
              <span className="font-script text-lg sm:text-xl text-[#E5E7EB] block leading-tight">
                good vibes only
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-[#9DA2A7] block mt-0.5">
                SKYSCAPE CAFE • BANDUNG
              </span>
            </div>

            {/* Bottom Photo Caption */}
            <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <span className="bg-[#24272A]/85 text-[#F3F4F6] px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#80858A]/30">
                [PUNCLUT • CIUMBULEUIT ATAS]
              </span>
              <span className="bg-[#F3F4F6]/90 text-[#373A3E] px-3 py-1 text-[10px] font-mono tracking-widest uppercase font-semibold">
                ELEVASI 1.240 MDPL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
