"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { GOLDEN_HOURS } from "@/data/cafeData";

interface GoldenHourGuideProps {
  onOpenReservation: () => void;
}

export function GoldenHourGuide({ onOpenReservation }: GoldenHourGuideProps) {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Banner */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[16/10] w-full overflow-hidden shadow-xl border border-[#D8DCDE] bg-[#373A3E]">
              <Image
                src="/images/bandung-sunset.jpg"
                alt="Pemandangan Golden Hour Sunset di Skyscapecafe Bandung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#373A3E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F3F4F6]">
                <span className="text-[10px] font-mono tracking-widest text-[#D8DCDE] uppercase block mb-0.5">
                  [TIMING REKOMENDASI // PUNCLUT BANDUNG]
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal">
                  Puncak Keindahan Senja & Panorama Malam
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Time Guide Description */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
                [PANDUAN WAKTU BERKUNJUNG TERBAIK]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#373A3E] tracking-tight">
                Momen Terbaik Menikmati Sunset & City Lights
              </h2>
              <p className="text-xs sm:text-sm text-[#80858A] leading-relaxed">
                Untuk mendapatkan pengalaman visual paling menakjubkan, kami
                menyarankan tamu untuk hadir sebelum senja tiba agar dapat
                menyaksikan pergantian warna langit Bandung secara bertahap.
              </p>
            </div>

            {/* Time Blocks (Clean Minimalist Cards without pillbadges) */}
            <div className="space-y-3.5">
              {GOLDEN_HOURS.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-[#F3F4F6] border border-[#D8DCDE] transition-all hover:border-[#80858A]"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#373A3E] uppercase">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#80858A] bg-white px-2 py-0.5 border border-[#D8DCDE]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#80858A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-colors border border-[#373A3E] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVASI MEJA OUTDOOR SEKARANG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
