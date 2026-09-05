"use client";

import React, { useState, useMemo } from "react";
import { ALL_MENU_ITEMS } from "@/data/cafeData";
import { Calendar } from "lucide-react";

interface FullMenuSectionProps {
  onOpenReservation: () => void;
}

type CategoryFilter = "all" | "coffee" | "non-coffee" | "main-course" | "light-bites" | "dessert";

export function FullMenuSection({ onOpenReservation }: FullMenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "SEMUA PILIHAN" },
    { id: "coffee", label: "KOPI SPESIALTI" },
    { id: "non-coffee", label: "NON-KOPI & MOCKTAIL" },
    { id: "main-course", label: "MAKANAN UTAMA" },
    { id: "light-bites", label: "CAMILAN & BRUNCH" },
    { id: "dessert", label: "PASTRY & DESSERT" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return ALL_MENU_ITEMS;
    return ALL_MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="katalog-menu"
      className="relative w-full py-16 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
            [DAFTAR MENU SKYSCAPE]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#373A3E] tracking-tight">
            Katalog Cita Rasa Pilihan
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-xl mx-auto leading-relaxed">
            Dari racikan biji kopi terbaik hingga sajian kuliner hangat yang
            disiapkan khusus untuk menemani pemandangan senja dan malam Bandung.
          </p>
        </div>

        {/* Minimalist Tabs (Strictly non-pillbadge: rectangular borders and crisp lines) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#373A3E] text-[#F3F4F6] border-[#373A3E] shadow-sm"
                    : "bg-[#F3F4F6] text-[#373A3E] border-[#D8DCDE] hover:border-[#80858A] hover:bg-[#D8DCDE]/30"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#F3F4F6] border border-[#D8DCDE] p-4 transition-all duration-200 hover:border-[#80858A] hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#D8DCDE] pb-3 mb-3">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#373A3E] leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#80858A] uppercase block mt-0.5">
                    {item.category === "coffee" && "Kopi Spesialti"}
                    {item.category === "non-coffee" && "Segar & Non-Kopi"}
                    {item.category === "main-course" && "Hidangan Utama"}
                    {item.category === "light-bites" && "Makanan Ringan"}
                    {item.category === "dessert" && "Pencuci Mulut"}
                  </span>
                </div>
                <span className="font-serif text-sm sm:text-base font-bold text-[#373A3E] shrink-0">
                  {item.priceFormatted}
                </span>
              </div>

              <p className="text-xs text-[#80858A] leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="pt-3 mt-3 border-t border-[#D8DCDE]/50 flex items-center justify-between text-[11px] text-[#80858A]">
                <span className="font-mono text-[10px] text-[#9DA2A7] uppercase">
                  DINE-IN • TAKEAWAY
                </span>
                <span className="text-[10px] font-semibold text-[#373A3E]">
                  TERSEDIA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note & Reservation CTA */}
        <div className="mt-14 p-6 bg-[#F3F4F6] border border-[#D8DCDE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-[#373A3E]">
              Ingin Menikmati Hidangan Ini Bersama Kolega atau Pasangan?
            </h4>
            <p className="text-xs text-[#80858A] mt-1">
              Amankan meja pilihan Anda di area indoor yang nyaman atau teras terbuka dengan panorama sunset & city lights.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#373A3E] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            RESERVASI MEJA SEKARANG
          </button>
        </div>
      </div>
    </section>
  );
}
