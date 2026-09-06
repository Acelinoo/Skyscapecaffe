"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Sunset, Moon } from "lucide-react";
import { GOLDEN_HOURS } from "@/data/cafeData";
import { BrushWaveTop, BrushWaveBottom } from "./BrushWave";

interface GoldenHourGuideProps {
  onOpenReservation: () => void;
}

export function GoldenHourGuide({ onOpenReservation }: GoldenHourGuideProps) {
  return (
    <section
      id="golden-hour"
      className="relative w-full bg-[#373A3E] text-[#F3F4F6] overflow-hidden"
    >
      {/* Wave Transition 2 (Top): Brush Stroke Painted Edge (seperti Gambar 2) */}
      <BrushWaveTop
        className="w-full h-12 sm:h-16 lg:h-20 -mt-1"
        fillColor="#FFFFFF"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Banner with Authentic Terrace Photo */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 gsap-image-frame">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative ambient backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#24272A] to-transparent transform -rotate-1 pointer-events-none" />

              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden shadow-2xl border border-[#80858A]/40 bg-[#24272A]">
                <Image
                  src="/images/skyscape-outdoor-pampas.jpg"
                  alt="Pemandangan teras santai outdoor Skyscapecafe Bandung di antara ilalang dan panorama langit senja"
                  fill
                  quality={82}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dark Vignette Overlay for Dramatic Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/85 via-transparent to-transparent pointer-events-none" />

                {/* Top Corner Floating Tag */}
                <div className="absolute top-4 left-4 bg-[#24272A]/90 text-[#F3F4F6] px-3.5 py-1.5 backdrop-blur-sm border border-[#80858A]/40 flex items-center gap-2">
                  <Sunset className="w-3.5 h-3.5 text-[#D8DCDE]" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#D8DCDE]">
                    PUNCLUT HIGHLANDS • 1.240 MDPL
                  </span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F3F4F6] pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-[#9DA2A7] uppercase block mb-1">
                    [MOMEN EMAS & GEMERLAP LAMPU KOTA]
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug text-[#F3F4F6]">
                    Puncak Keindahan Senja & Panorama Malam Bandung
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Time Guide Narrative & Schedule */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <div className="flex items-center gap-3 gsap-subtitle">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#9DA2A7] uppercase">
                  [PANDUAN WAKTU BERKUNJUNG TERBAIK]
                </span>
                <div className="h-[1px] w-12 bg-[#80858A]/40" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3F4F6] tracking-tight leading-tight gsap-title">
                Momen Terbaik Menikmati Sunset & City Lights
              </h2>
              <p className="text-xs sm:text-sm text-[#D8DCDE] leading-relaxed gsap-text">
                Untuk mendapatkan pengalaman visual paling menakjubkan, kami
                menyarankan tamu untuk hadir sebelum senja tiba agar dapat
                menyaksikan pergantian warna langit Bandung secara bertahap dari
                ketinggian 1.240 mdpl.
              </p>
            </div>

            {/* Time Blocks (Theme-Matched in Deep Charcoal with Amber Highlights) */}
            <div className="space-y-3.5 gsap-stagger-group">
              {GOLDEN_HOURS.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 bg-[#24272A]/90 border border-[#80858A]/30 transition-all duration-200 hover:border-[#D8DCDE] gsap-card"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      {idx === 0 ? (
                        <Sunset className="w-4 h-4 text-[#E5E7EB]" />
                      ) : (
                        <Moon className="w-4 h-4 text-[#E5E7EB]" />
                      )}
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#F3F4F6] uppercase">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#D8DCDE] bg-[#373A3E] px-2.5 py-1 border border-[#80858A]/40">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#9DA2A7] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#F3F4F6] hover:bg-white text-[#373A3E] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-lg border border-[#F3F4F6] cursor-pointer group gsap-btn"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>RESERVASI MEJA OUTDOOR SEKARANG</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition 2 (Bottom): Brush Stroke Painted Edge (seperti Gambar 2) */}
      <BrushWaveBottom
        className="w-full h-12 sm:h-16 lg:h-20 -mb-1"
        fillColor="#F3F4F6"
      />
    </section>
  );
}
