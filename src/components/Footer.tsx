import React from "react";
import Link from "next/link";
import { SkyscapeLogo } from "./SkyscapeLogo";
import { MessageCircle, ExternalLink, ArrowUp } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

import { BrushWaveTop } from "./BrushWave";

interface FooterProps {
  onOpenReservation: () => void;
}

export function Footer({ onOpenReservation }: FooterProps) {
  return (
    <footer className="w-full bg-[#373A3E] text-[#F3F4F6] overflow-hidden">
      {/* Top Brush Stroke Wave Transition from #F3F4F6 */}
      <BrushWaveTop
        className="w-full h-10 sm:h-14 lg:h-16 -mt-1"
        fillColor="#F3F4F6"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#80858A]/30">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="inline-block focus:outline-none">
              <SkyscapeLogo className="h-10" variant="light" showText={true} />
            </Link>
            <p className="text-xs text-[#9DA2A7] leading-relaxed max-w-sm">
              Destinasi cafe, eatery, dan restaurant di dataran tinggi Bandung.
              Makan dan ngopi sambil menikmati panorama sunset, siluet
              pegunungan, dan gemerlap city lights Bandung.
            </p>
            <div className="pt-1">
              <span className="text-[11px] font-mono tracking-widest text-[#D8DCDE] uppercase block">
                ELEVASI 1.240 MDPL // PUNCLUT BANDUNG
              </span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#F3F4F6]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-[#9DA2A7]">
              <li>
                <Link href="#beranda" className="hover:text-[#F3F4F6] transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="#tentang-kami" className="hover:text-[#F3F4F6] transition-colors">
                  Kisah Kami (Our Story)
                </Link>
              </li>
              <li>
                <Link href="#keunggulan" className="hover:text-[#F3F4F6] transition-colors">
                  Keunggulan Racikan
                </Link>
              </li>
              <li>
                <Link href="#ruang-vip" className="hover:text-[#F3F4F6] transition-colors">
                  Ruang VIP & Meeting
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="hover:text-[#F3F4F6] transition-colors">
                  Galeri Suasana
                </Link>
              </li>
              <li>
                <Link href="#pilihan-favorit" className="hover:text-[#F3F4F6] transition-colors">
                  Pilihan Favorit (Popular Picks)
                </Link>
              </li>
              <li>
                <Link href="#katalog-menu" className="hover:text-[#F3F4F6] transition-colors">
                  Katalog Menu Lengkap
                </Link>
              </li>
              <li>
                <Link href="#ulasan" className="hover:text-[#F3F4F6] transition-colors">
                  Ulasan Google Maps
                </Link>
              </li>
              <li>
                <Link href="#lokasi" className="hover:text-[#F3F4F6] transition-colors">
                  Lokasi & Rute
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Jam Operasional */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#F3F4F6]">
              Jam Buka
            </h4>
            <div className="space-y-2 text-xs text-[#9DA2A7]">
              <div>
                <span className="block text-[#D8DCDE] font-semibold">Senin - Jumat</span>
                <span className="font-mono">10.00 - 23.00 WIB</span>
              </div>
              <div>
                <span className="block text-[#D8DCDE] font-semibold">Sabtu - Minggu</span>
                <span className="font-mono">08.00 - 00.00 WIB</span>
              </div>
              <div className="pt-2 text-[10px] font-mono text-[#80858A]">
                BUKA SETIAP HARI
              </div>
            </div>
          </div>

          {/* Col 4: Layanan & Reservasi */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#F3F4F6]">
              Reservasi & Kontak
            </h4>
            <p className="text-xs text-[#9DA2A7] leading-relaxed">
              Dianjurkan melakukan reservasi terlebih dahulu untuk area teras outdoor saat Golden Hour dan akhir pekan.
            </p>
            <div className="pt-1 flex flex-col gap-2.5">
              <button
                onClick={onOpenReservation}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F3F4F6] hover:bg-white text-[#373A3E] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Reservasi via WhatsApp</span>
              </button>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-[#80858A] hover:border-[#F3F4F6] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80858A]">
          <p>© {new Date().getFullYear()} Skyscapecafe Bandung. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#9DA2A7]">
              KUALITAS KOPI & PANORAMA KOTA BANDUNG
            </span>
            <Link
              href="#beranda"
              className="p-1.5 text-[#9DA2A7] hover:text-[#F3F4F6] hover:bg-[#80858A]/20 transition-colors"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
