"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, MapPin, MessageCircle, Monitor } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
}

export function ReservationModal({
  isOpen,
  onClose,
  defaultArea = "Outdoor Terrace - Sunset & City Lights View",
}: ReservationModalProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("2 Orang");
  const [area, setArea] = useState(defaultArea);
  const [needProjector, setNeedProjector] = useState("Tidak Perlu");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Halo Tim Reservasi Skyscapecafe,
Saya ingin melakukan reservasi meja/ruangan dengan rincian sebagai berikut:

• Nama Pemesan: ${name.trim() || "-"}
• Tanggal: ${date || "Hari ini"}
• Jam Kunjungan: ${time} WIB
• Jumlah Tamu: ${guests}
• Pilihan Area: ${area}
• Kebutuhan Proyektor: ${needProjector}
• Catatan Khusus / Keperluan: ${specialNotes.trim() || "Tidak ada"}

Mohon informasi ketersediaan ruangan/meja dan konfirmasi reservasi. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#373A3E]/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#F3F4F6] border border-[#D8DCDE] text-[#373A3E] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
      >
        {/* Top Decorative Header */}
        <div className="bg-[#373A3E] text-[#F3F4F6] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#9DA2A7] uppercase block mb-1">
              [RESERVASI MEJA & RUANG VIP]
            </span>
            <h3 id="reservation-title" className="font-serif text-xl sm:text-2xl font-normal tracking-wide">
              Reservasi Skyscapecafe
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9DA2A7] hover:text-[#F3F4F6] hover:bg-[#80858A]/30 transition-colors focus:outline-none cursor-pointer"
            aria-label="Tutup formulir reservasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5">
              Nama Lengkap / Instansi
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Raden Arya / PT Teknologi Bandung"
              className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm placeholder-[#9DA2A7] focus:outline-none focus:border-[#373A3E] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#80858A]" /> Tanggal
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#80858A]" /> Jam Kedatangan
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
              >
                <option value="10:00">10:00 WIB (Meeting Pagi)</option>
                <option value="11:30">11:30 WIB (Makan Siang)</option>
                <option value="13:30">13:30 WIB (Meeting Siang)</option>
                <option value="15:30">15:30 WIB (Afternoon Gathering)</option>
                <option value="16:45">16:45 WIB (Mulai Golden Sunset)</option>
                <option value="17:30">17:30 WIB (Puncak Sunset)</option>
                <option value="18:30">18:30 WIB (City Lights Awal)</option>
                <option value="19:30">19:30 WIB (Dinner & Night Gathering)</option>
                <option value="20:30">20:30 WIB</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#80858A]" /> Jumlah Tamu
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
              >
                <option value="1 - 2 Orang">1 - 2 Orang (Pasangan / Teman)</option>
                <option value="3 - 4 Orang">3 - 4 Orang (Keluarga Kecil)</option>
                <option value="5 - 9 Orang">5 - 9 Orang (Grup Santai)</option>
                <option value="10 - 20 Orang (VIP Meeting / Gathering)">
                  10 - 20 Orang (VIP Meeting / Gathering)
                </option>
                <option value="20 - 35 Orang (Full VIP Glasshouse Room)">
                  20 - 35 Orang (Full VIP Glasshouse Room)
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#80858A]" /> Pilihan Area
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
              >
                <option value="Ruang VIP Meeting & Gathering (Termasuk Proyektor)">
                  Ruang VIP Meeting & Gathering (Ada Proyektor)
                </option>
                <option value="Outdoor Terrace - Sunset & City Lights View">
                  Outdoor View Sunset & City Lights
                </option>
                <option value="Outdoor Balcony - View Lembah Pegunungan">
                  Outdoor Balcony View Lembah Hijau
                </option>
                <option value="Indoor Mezzanine - Cozy & Warm Atmosphere">
                  Indoor Mezzanine Cozy
                </option>
              </select>
            </div>
          </div>

          {/* Projector Requirement Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5 flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-[#80858A]" /> Kebutuhan Fasilitas Proyektor
            </label>
            <select
              value={needProjector}
              onChange={(e) => setNeedProjector(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
            >
              <option value="Ya, Butuh Proyektor & Layar Presentasi">
                Ya, Butuh Proyektor & Layar Presentasi (Untuk Meeting / Gathering)
              </option>
              <option value="Tidak Perlu Proyektor">
                Tidak Perlu Proyektor (Hanya Tempat & F&B)
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#373A3E] mb-1.5">
              Catatan Khusus / Keperluan Acara
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Contoh: Meeting evaluasi kantor kuartal 3, butuh sambungan HDMI dan sound system..."
              className="w-full px-3.5 py-2.5 bg-white border border-[#D8DCDE] text-[#373A3E] text-sm placeholder-[#9DA2A7] focus:outline-none focus:border-[#373A3E] transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md disabled:opacity-60"
            >
              <MessageCircle className="w-4 h-4 text-[#F3F4F6]" />
              {isSubmitting ? "Menghubungkan ke WhatsApp..." : "Kirim Reservasi via WhatsApp"}
            </button>
            <p className="text-[11px] text-[#80858A] text-center mt-2.5 leading-relaxed">
              *Reservasi langsung diteruskan ke WhatsApp staf Skyscapecafe untuk konfirmasi ketersediaan ruangan/meja.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
