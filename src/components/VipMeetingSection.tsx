"use client";

import React from "react";
import Image from "next/image";
import { Monitor, Users, Wifi, Volume2, Snowflake, Utensils, Calendar } from "lucide-react";

interface VipMeetingSectionProps {
  onOpenReservation: () => void;
}

export function VipMeetingSection({ onOpenReservation }: VipMeetingSectionProps) {
  const vipFacilities = [
    {
      icon: Monitor,
      title: "PROYEKTOR HD & LAYAR LEBAR",
      desc: "Layar presentasi jernih dan proyektor siap pakai untuk meeting bisnis, materi workshop, atau video gathering.",
    },
    {
      icon: Users,
      title: "KAPASITAS 15 - 35 TAMU",
      desc: "Tata letak meja dan kursi kayu ergonomis yang dapat disesuaikan untuk rapat formal maupun pertemuan santai.",
    },
    {
      icon: Volume2,
      title: "TATA SUARA & MIKROFON",
      desc: "Perangkat audio sound system terintegrasi untuk pemateri meeting, presentasi, dan pemutaran audio.",
    },
    {
      icon: Snowflake,
      title: "GLASSHOUSE BER-AC SEJUK",
      desc: "Kenyamanan temperatur optimal di dalam ruangan kaca berpemandangan asri tanpa gangguan kebisingan.",
    },
    {
      icon: Wifi,
      title: "WI-FI & STOP KONTAK TIAP MEJA",
      desc: "Konektivitas internet berkecepatan tinggi serta colokan daya di setiap baris meja untuk laptop dan perangkat.",
    },
    {
      icon: Utensils,
      title: "PAKET F&B & COFFEE BREAK",
      desc: "Pilihan sajian makanan berat, kudapan hangat, dan racikan kopi artisan langsung dari barista Skyscapecafe.",
    },
  ];

  return (
    <section
      id="ruang-vip"
      className="relative w-full py-16 lg:py-24 bg-[#373A3E] text-[#F3F4F6] border-t border-[#80858A]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authentic Photo of VIP Glasshouse Room */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] max-h-[560px] w-full overflow-hidden shadow-2xl border border-[#80858A]/40 bg-[#24272A]">
              <Image
                src="/images/skyscape-vip-glasshouse.jpg"
                alt="Ruangan VIP Glasshouse Skyscapecafe untuk meeting dan gathering lengkap dengan proyektor"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 bg-[#F3F4F6] text-[#373A3E] px-3.5 py-1.5 text-[10px] font-mono tracking-widest uppercase font-semibold">
                [RUANG VIP GLASSHOUSE // PRIVASI PENUH]
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#24272A]/90 p-3.5 border border-[#80858A]/30 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs font-mono text-[#D8DCDE]">
                  <span>FASILITAS: PROYEKTOR + SCREEN</span>
                  <span>15 - 35 SEATS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Detailed Facility List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#9DA2A7] uppercase block">
                [FASILITAS EKSKLUSIF // MEETING & GATHERING]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal tracking-tight text-[#F3F4F6] leading-tight">
                Ruang VIP Khusus
                <br />
                Meeting & Gathering
              </h2>
              <p className="text-xs sm:text-sm text-[#D8DCDE] leading-relaxed pt-1">
                Kombinasi ideal antara privasi, fasilitas presentasi modern, dan
                pemandangan asri pegunungan Bandung. Dirancang khusus untuk
                pertemuan bisnis, rapat instansi, reuni, workshop, maupun acara
                gathering keluarga yang membutuhkan kenyamanan eksklusif.
              </p>
            </div>

            {/* Facilities Grid - 2 Columns on Mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5 pt-2">
              {vipFacilities.map((fac) => {
                const Icon = fac.icon;
                return (
                  <div
                    key={fac.title}
                    className="gsap-reveal p-2.5 sm:p-3.5 bg-[#24272A] border border-[#80858A]/30 transition-colors hover:border-[#D8DCDE]"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#D8DCDE] mb-1">
                      <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0" />
                      <h4 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase truncate">
                        {fac.title}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#9DA2A7] leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {fac.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#F3F4F6] hover:bg-white text-[#373A3E] text-xs font-semibold tracking-widest uppercase transition-colors border border-[#F3F4F6] cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVASI RUANGAN VIP (WHATSAPP)</span>
              </button>

              <span className="text-[11px] font-mono text-[#9DA2A7]">
                *Tersedia paket setengah hari & satu hari penuh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
