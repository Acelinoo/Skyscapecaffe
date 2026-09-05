"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X, Compass, Mountain } from "lucide-react";

export function OurStorySection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="tentang-kami"
      className="relative w-full py-16 lg:py-24 bg-[#F3F4F6] text-[#373A3E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Clean Section Label (Strictly non-pill) */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
                KISAH KAMI // OUR STORY
              </span>
              <div className="h-[1px] w-12 bg-[#80858A]/40" />
            </div>

            {/* Display Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight leading-tight">
              LEBIH DARI
              <br />
              SEKADAR KOPI
            </h2>

            {/* Body Description */}
            <div className="space-y-4 text-sm sm:text-base text-[#80858A] leading-relaxed">
              <p>
                Kami meyakini bahwa secangkir kopi adalah jembatan yang
                mempertemukan cerita, inspirasi, dan momen berharga. Berdiri di
                dataran tinggi perbukitan Bandung pada elevasi 1.240 mdpl,
                Skyscapecafe lahir dari kecintaan mendalam terhadap aroma kopi
                nusantara dan keindahan panorama alam terbuka.
              </p>
              <p>
                Di sini, setiap sajian diracik dengan ketelitian tinggi oleh para
                barista kami. Dari hangatnya seduhan espresso di kala sore hingga
                pendar lampu kota (*city lights*) yang perlahan berpendar di
                bawah naungan langit malam Bandung, kami menyambut Anda untuk
                menikmati waktu yang melambat.
              </p>
            </div>

            {/* Feature Highlights Minimalist Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#D8DCDE]">
              <div className="flex items-start gap-3">
                <Mountain className="w-5 h-5 text-[#373A3E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#373A3E]">
                    Elevasi 1.240 MDPL
                  </h4>
                  <p className="text-[12px] text-[#80858A]">
                    Hawa sejuk alami khas pegunungan Bandung.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#373A3E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#373A3E]">
                    Pemandangan 360°
                  </h4>
                  <p className="text-[12px] text-[#80858A]">
                    Lanskap kota & lembah tanpa batas pandang.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#katalog-menu"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-colors group shadow-sm border border-[#373A3E]"
              >
                <span>LIHAT KATALOG MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Botanical Accent Vector (Clean Minimal Monochrome Lines) */}
            <div className="pt-4 opacity-40">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 35 C 30 20, 60 25, 115 5" stroke="#373A3E" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M35 24 C 30 15, 38 8, 45 15 C 45 22, 38 23, 35 24 Z" stroke="#373A3E" strokeWidth="1.2"/>
                <path d="M65 21 C 60 10, 70 5, 78 12 C 77 18, 70 20, 65 21 Z" stroke="#373A3E" strokeWidth="1.2"/>
                <path d="M92 14 C 90 4, 100 2, 106 8 C 105 13, 98 14, 92 14 Z" stroke="#373A3E" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>

          {/* Right Column: Culinary Photo with Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-[#D8DCDE] bg-[#373A3E]">
                <Image
                  src="/images/skyscape-bar-counter.jpg"
                  alt="Bar kopi dan konter pastry barista Skyscapecafe Bandung"
                  fill
                  quality={82}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#373A3E]/50 via-transparent to-transparent pointer-events-none" />

                {/* Circular Play Button with Rotating Circular Badge Overlay (From Gambar 1) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="relative group p-4 focus:outline-none cursor-pointer"
                    aria-label="Putar cuplikan suasana Skyscapecafe"
                  >
                    {/* Outer Rotating Text Badge */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#F3F4F6]/40 flex items-center justify-center animate-spin-slow bg-[#373A3E]/30 backdrop-blur-xs">
                      <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="text-[7.5px] font-mono tracking-[0.22em] uppercase fill-[#F3F4F6]">
                          <textPath href="#circlePath">
                            • ENRICH OUR STORY • VIRTUAL AMBIENCE
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Center Play Icon Button */}
                    <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#F3F4F6] text-[#373A3E] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 fill-[#373A3E] ml-0.5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambience Video / Virtual Tour Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#373A3E]/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#373A3E] border border-[#80858A] shadow-2xl p-4 text-[#F3F4F6]">
            <div className="flex items-center justify-between pb-3 border-b border-[#80858A]/30">
              <span className="text-xs font-mono tracking-widest text-[#9DA2A7] uppercase">
                [VIRTUAL AMBIENCE // SUASANA SKYSCAPE CAFE]
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 text-[#9DA2A7] hover:text-[#F3F4F6] transition-colors cursor-pointer"
                aria-label="Tutup pemutar video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full mt-3 bg-black overflow-hidden border border-[#80858A]/20">
              <Image
                src="/images/skyscape-outdoor-balcony.jpg"
                alt="Area balkon terbuka dengan pemandangan perbukitan hijau Skyscapecafe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-mono tracking-widest text-[#D8DCDE] uppercase mb-1">
                  PUNCLUT • CIUMBULEUIT ATAS BANDUNG
                </span>
                <h3 className="font-serif text-2xl text-[#F3F4F6]">
                  Area Balkon Terbuka & Panorama Lembah Hijau
                </h3>
                <p className="text-xs text-[#9DA2A7] max-w-lg mt-1">
                  Kombinasi deretan kursi balkon menghadap rimbunnya hutan pinus dan udara segar pegunungan Bandung.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
