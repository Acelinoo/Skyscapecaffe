"use client";

import React from "react";
import Image from "next/image";

export function AtmosphereGallery() {
  const galleryItems = [
    {
      image: "/images/skyscape-exterior.jpg",
      title: "Gedung Utama A-Frame Kaca",
      category: "ARSITEKTUR UTAMA",
      description: "Desain fasad kaca bertingkat yang ikonik di kawasan sejuk Punclut, Bandung.",
      span: "lg:col-span-2 lg:row-span-2",
      aspect: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full",
    },
    {
      image: "/images/skyscape-outdoor-pampas.jpg",
      category: "TERAS TERBUKA",
      title: "Teras Santai Ilalang",
      description: "Meja santai outdoor berlatar langit biru dan semilir angin pegunungan.",
      span: "lg:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      image: "/images/skyscape-outdoor-balcony.jpg",
      category: "BALKON PANORAMA",
      title: "Bar Balkon Lembah Hijau",
      description: "Deretan kursi menghadap langsung ke hamparan perbukitan dan hutan pinus.",
      span: "lg:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      image: "/images/skyscape-bar-counter.jpg",
      category: "BARISTA & COFFEE BAR",
      title: "Konter Kopi Spesialti",
      description: "Area racik espresso, manual brew, dan display pastry artisanal hangat.",
      span: "lg:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      image: "/images/skyscape-vip-glasshouse.jpg",
      category: "VIP & MEETING",
      title: "Ruang VIP Glasshouse",
      description: "Ruangan privat berkapasitas 15-35 orang lengkap dengan proyektor.",
      span: "lg:col-span-1",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section
      id="galeri"
      className="relative w-full py-16 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
            [FOTOGRAFI OTENTIK SKYSCAPECAFE]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#373A3E] tracking-tight">
            Sudut Suasana & Arsitektur Cafe
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-xl mx-auto leading-relaxed">
            Potret nyata setiap sudut Skyscapecafe Bandung — dari kemegahan
            gedung A-frame, area balkon terbuka, hingga ruangan VIP untuk
            pertemuan Anda.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden bg-[#373A3E] border border-[#D8DCDE] shadow-sm transition-all duration-300 hover:border-[#80858A] hover:shadow-lg ${item.span}`}
            >
              <div className={`relative w-full ${item.aspect} min-h-[260px]`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/90 via-[#24272A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Tag (Strictly non-pill) */}
                <div className="absolute top-3 left-3 bg-[#F3F4F6]/90 text-[#373A3E] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase font-semibold">
                  {item.category}
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F3F4F6] space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-normal tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8DCDE] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
