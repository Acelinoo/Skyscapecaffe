"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Clock, Users, MapPin, MessageCircle, Phone, Tag } from "lucide-react";
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
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("2 Orang");
  const [area, setArea] = useState(defaultArea);
  const [eventType, setEventType] = useState("Makan & Ngopi Santai");
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
• No. WhatsApp / HP: ${phone.trim() || "-"}
• Tanggal Kunjungan: ${date || "Hari ini"}
• Jam Kedatangan: ${time} WIB
• Jumlah Tamu: ${guests}
• Pilihan Area Duduk: ${area}
• Keperluan / Tipe Acara: ${eventType}
• Catatan Khusus / Permintaan: ${specialNotes.trim() || "Tidak ada"}

Mohon informasi ketersediaan meja/ruangan dan konfirmasi reservasi. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#373A3E]/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#F3F4F6] border border-[#D8DCDE] text-[#373A3E] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Left Column: Authentic Indoor Dining Photo (Gambar 1 yang diunggah) */}
          <div className="md:col-span-5 relative hidden md:block bg-[#373A3E] min-h-[580px]">
            <Image
              src="/images/skyscape-indoor-dining.jpg"
              alt="Suasana ruang makan kaca segitiga A-frame Skyscapecafe Punclut Bandung"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />

            {/* Dark Aesthetic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/95 via-[#24272A]/35 to-[#24272A]/60" />

            {/* Top Brand Tag */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="bg-[#F3F4F6]/90 text-[#373A3E] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase font-semibold">
                [PUNCLUT • 1.240 MDPL]
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D8DCDE]">
                SKYSCAPE CAFE
              </span>
            </div>

            {/* Bottom Caption & Ambiance Details */}
            <div className="absolute bottom-6 left-6 right-6 text-[#F3F4F6] space-y-2 z-10">
              <div className="h-[1px] w-12 bg-[#80858A]/60 mb-2" />
              <h4 className="font-serif text-xl lg:text-2xl font-normal leading-snug text-[#F3F4F6]">
                Ruang Bersantap Kaca Segitiga
              </h4>
              <p className="text-xs text-[#D8DCDE] leading-relaxed">
                Nikmati kenyamanan meja kayu dan cahaya alami hangat berlatar langit
                biru dan perbukitan sejuk Bandung.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="bg-[#24272A]/90 text-[#F3F4F6] px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase border border-[#80858A]/40">
                  RESERVASI CEPAT VIA WHATSAPP
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="md:col-span-7 flex flex-col justify-between bg-[#F3F4F6]">
            {/* Top Decorative Header */}
            <div className="bg-[#373A3E] text-[#F3F4F6] px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#9DA2A7] uppercase block mb-0.5">
                  [FORMULIR RESERVASI RESMI]
                </span>
                <h3 id="reservation-title" className="font-serif text-lg sm:text-xl font-normal tracking-wide">
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

            {/* Mobile-Only Header Image (Gambar 1) */}
            <div className="relative h-28 w-full md:hidden bg-[#373A3E]">
              <Image
                src="/images/skyscape-indoor-dining.jpg"
                alt="Suasana ruang makan Skyscapecafe"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/90 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-3 bg-[#F3F4F6]/95 text-[#373A3E] px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase font-semibold">
                RUANG MAKAN INDOOR & GLASSHOUSE
              </span>
            </div>

            {/* Form Body */}
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 space-y-3 md:space-y-3.5 overflow-y-auto max-h-[75vh] md:max-h-[500px]"
            >
              {/* Row 1: Nama & Nomor Telepon Pemesan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1">
                    Nama Lengkap / Instansi *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Raden Arya"
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm placeholder-[#9DA2A7] focus:outline-none focus:border-[#373A3E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#80858A]" /> No. WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm placeholder-[#9DA2A7] focus:outline-none focus:border-[#373A3E] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Tanggal & Jam Kedatangan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#80858A]" /> Tanggal *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#80858A]" /> Jam Kedatangan *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
                  >
                    <option value="10:00">10:00 WIB (Pagi)</option>
                    <option value="11:30">11:30 WIB (Makan Siang)</option>
                    <option value="13:30">13:30 WIB (Siang)</option>
                    <option value="15:30">15:30 WIB (Sore Awal)</option>
                    <option value="16:45">16:45 WIB (Mulai Sunset)</option>
                    <option value="17:30">17:30 WIB (Puncak Golden Sunset)</option>
                    <option value="18:30">18:30 WIB (City Lights Awal)</option>
                    <option value="19:30">19:30 WIB (Malam / Dinner)</option>
                    <option value="20:30">20:30 WIB</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Jumlah Tamu & Pilihan Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#80858A]" /> Jumlah Tamu *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
                  >
                    <option value="1 - 2 Orang">1 - 2 Orang (Pasangan / Teman)</option>
                    <option value="3 - 4 Orang">3 - 4 Orang (Keluarga Kecil)</option>
                    <option value="5 - 9 Orang">5 - 9 Orang (Rombongan Santai)</option>
                    <option value="10 - 20 Orang (VIP Gathering)">
                      10 - 20 Orang (VIP Gathering)
                    </option>
                    <option value="20 - 35 Orang (Full VIP Glasshouse)">
                      20 - 35 Orang (Full VIP Glasshouse)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#80858A]" /> Pilihan Area Duduk *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
                  >
                    <option value="Outdoor Terrace - Sunset & City Lights View">
                      Outdoor View Sunset & City Lights
                    </option>
                    <option value="Outdoor Balcony - View Lembah Pegunungan">
                      Outdoor Balcony View Lembah Hijau
                    </option>
                    <option value="Indoor Mezzanine - Cozy & Warm Atmosphere">
                      Indoor Mezzanine Cozy
                    </option>
                    <option value="Ruang VIP Glasshouse (Meeting / Gathering)">
                      Ruang VIP Glasshouse (Meeting / Gathering)
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Tipe Acara / Kunjungan */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#80858A]" /> Tipe Acara / Keperluan
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm focus:outline-none focus:border-[#373A3E] transition-colors"
                >
                  <option value="Makan & Ngopi Santai">Makan & Ngopi Santai</option>
                  <option value="Kencan / Momen Spesial Pasangan">Kencan / Momen Spesial Pasangan</option>
                  <option value="Ulang Tahun / Syukuran">Ulang Tahun / Syukuran</option>
                  <option value="Meeting Kerja / Bisnis">Meeting Kerja / Bisnis</option>
                  <option value="Gathering Komunitas / Reuni">Gathering Komunitas / Reuni</option>
                  <option value="Arisan / Kumpul Keluarga">Arisan / Kumpul Keluarga</option>
                </select>
              </div>

              {/* Row 5: Catatan Khusus */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#373A3E] mb-1">
                  Catatan Khusus / Permintaan Meja
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Contoh: Request meja dekat jendela kaca untuk foto sunset..."
                  className="w-full px-3 py-2 bg-white border border-[#D8DCDE] text-[#373A3E] text-xs sm:text-sm placeholder-[#9DA2A7] focus:outline-none focus:border-[#373A3E] transition-colors resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md disabled:opacity-60"
                >
                  <MessageCircle className="w-4 h-4 text-[#F3F4F6]" />
                  {isSubmitting ? "Menghubungkan ke WhatsApp..." : "Kirim Reservasi via WhatsApp"}
                </button>
                <p className="text-[10px] text-[#80858A] text-center mt-1.5 leading-relaxed">
                  *Reservasi otomatis diteruskan ke WhatsApp staf Skyscapecafe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
