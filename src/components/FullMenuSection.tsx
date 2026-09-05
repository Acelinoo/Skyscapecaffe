"use client";

import React, { useState, useMemo } from "react";
import { ALL_MENU_ITEMS, CAFE_INFO } from "@/data/cafeData";
import { Calendar, Search, ThumbsUp } from "lucide-react";

interface FullMenuSectionProps {
  onOpenReservation: () => void;
}

type CategoryFilter =
  | "all"
  | "coffee"
  | "milk-based"
  | "refreshment"
  | "tea"
  | "light-bites"
  | "main-course"
  | "special-days";

export function FullMenuSection({ onOpenReservation }: FullMenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "SEMUA MENU" },
    { id: "coffee", label: "COFFEE" },
    { id: "milk-based", label: "MILK BASED" },
    { id: "refreshment", label: "REFRESHMENT" },
    { id: "tea", label: "TEA" },
    { id: "light-bites", label: "LIGHTBITES" },
    { id: "main-course", label: "MAIN COURSE (RAMEN / RICE / WESTERN / ASIAN)" },
    { id: "special-days", label: "SPECIAL DAYS (FRI - SUN)" },
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subOptions &&
          item.subOptions.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="katalog-menu"
      className="relative w-full py-16 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [TRIAL OPENING // DAFTAR MENU LENGKAP]
            </span>
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight">
            Menu & Harga Resmi Skyscapecafe
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-2xl mx-auto leading-relaxed">
            Daftar lengkap hidangan kuliner, kopi spesialti, minuman segar, dan
            menu spesial akhir pekan yang disajikan langsung di perbukitan
            Bandung.
          </p>
        </div>

        {/* Search Bar & Quick Filter (Clean non-pill) */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#80858A] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari hidangan (misal: Carbonara, Latte, Tahu, Soto)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs text-[#373A3E] placeholder-[#80858A] focus:outline-none focus:border-[#373A3E] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-xs text-[#80858A] hover:text-[#373A3E] cursor-pointer"
              >
                Hapus
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Tabs (Strictly non-pillbadge: rectangular borders and crisp lines) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#F3F4F6] border border-[#D8DCDE] p-4.5 transition-all duration-200 hover:border-[#80858A] hover:shadow-sm group"
            >
              {/* Header: Name + Price */}
              <div className="flex items-start justify-between gap-3 border-b border-[#D8DCDE] pb-2.5 mb-2.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-base font-semibold text-[#373A3E] leading-snug">
                      {item.name}
                    </h3>
                    {item.highlightBadge && (
                      <span className="inline-flex items-center gap-1 bg-[#373A3E] text-[#F3F4F6] text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 border border-[#80858A]/30">
                        <ThumbsUp className="w-2.5 h-2.5 text-[#F3F4F6]" />
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  {item.subOptions && (
                    <span className="text-[11px] font-mono text-[#80858A] italic block">
                      ({item.subOptions})
                    </span>
                  )}
                </div>

                <span className="font-serif text-base font-bold text-[#373A3E] shrink-0">
                  {item.priceFormatted}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#80858A] leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Footer Meta */}
              <div className="pt-2.5 mt-2.5 border-t border-[#D8DCDE]/60 flex items-center justify-between text-[10px] font-mono text-[#80858A] uppercase">
                <span>
                  {item.category === "coffee" && "Kopi Spesialti"}
                  {item.category === "milk-based" && "Susu & Cokelat"}
                  {item.category === "refreshment" && "Minuman Segar"}
                  {item.category === "tea" && "Teh & Artisan"}
                  {item.category === "light-bites" && "Makanan Ringan"}
                  {item.category === "main-course" && "Hidangan Utama"}
                  {item.category === "special-days" && "Spesial Jumat - Minggu"}
                </span>
                <span className="text-[#373A3E] font-semibold">Tersedia</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-[#80858A] space-y-2">
            <p className="text-sm">Tidak ada menu yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-xs font-semibold text-[#373A3E] underline cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {/* Menu Note from Official Printed Menu */}
        <div className="mt-8 text-center border-t border-[#D8DCDE] pt-4">
          <p className="text-[11px] font-mono text-[#80858A]">
            * {CAFE_INFO.taxAndServiceNote} • Ikuti & Tandai kami di Instagram{" "}
            <a
              href="https://www.instagram.com/skyscape.cafebandung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#373A3E] font-semibold hover:underline"
            >
              {CAFE_INFO.instagram}
            </a>
          </p>
        </div>

        {/* Reservation CTA Box */}
        <div className="mt-10 p-6 bg-[#F3F4F6] border border-[#D8DCDE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-[#373A3E]">
              Ingin Menikmati Hidangan Ini Bersama Kolega atau Pasangan?
            </h4>
            <p className="text-xs text-[#80858A] mt-1">
              Amankan meja pilihan Anda di area teras outdoor sunset, balkon lembah hijau, atau ruang VIP meeting.
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
