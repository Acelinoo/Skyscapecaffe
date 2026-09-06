import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export function LocationSection() {
  return (
    <section
      id="lokasi"
      className="relative w-full py-16 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase gsap-subtitle">
            [LOKASI & JAM OPERASIONAL]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#373A3E] tracking-tight gsap-title">
            Kunjungi Skyscapecafe Bandung
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-xl mx-auto leading-relaxed gsap-text">
            Terletak strategis di kawasan Punclut - Ciumbuleuit Atas, mudah
            diakses dari pusat kota Bandung dengan suasana perbukitan yang sejuk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Information Cards */}
          <div className="lg:col-span-5 space-y-6 gsap-stagger-group">
            {/* Address Card */}
            <div className="bg-white border border-[#D8DCDE] p-6 space-y-3 gsap-card">
              <div className="flex items-center gap-2.5 text-[#373A3E]">
                <MapPin className="w-5 h-5 text-[#373A3E] shrink-0" />
                <h3 className="font-serif text-lg font-semibold uppercase">
                  Alamat Lengkap
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#80858A] leading-relaxed">
                {CAFE_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#373A3E] hover:text-[#80858A] border-b border-[#373A3E] pb-0.5 transition-colors uppercase tracking-wider"
                >
                  <span>Buka Petunjuk Arah di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border border-[#D8DCDE] p-6 space-y-3 gsap-card">
              <div className="flex items-center gap-2.5 text-[#373A3E]">
                <Clock className="w-5 h-5 text-[#373A3E] shrink-0" />
                <h3 className="font-serif text-lg font-semibold uppercase">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#80858A]">
                <div className="flex justify-between border-b border-[#D8DCDE]/50 pb-1.5">
                  <span className="font-medium text-[#373A3E]">Senin - Jumat</span>
                  <span className="font-mono">10.00 - 23.00 WIB</span>
                </div>
                <div className="flex justify-between border-b border-[#D8DCDE]/50 pb-1.5">
                  <span className="font-medium text-[#373A3E]">Sabtu - Minggu</span>
                  <span className="font-mono">08.00 - 00.00 WIB</span>
                </div>
              </div>
              <div className="pt-1">
                <span className="text-[10px] font-mono tracking-wider text-[#80858A] uppercase">
                  *KITCHEN ORDER DITUTUP 45 MENIT SEBELUM TUTUP
                </span>
              </div>
            </div>

            {/* Accessibility & Facilities */}
            <div className="bg-white border border-[#D8DCDE] p-6 gsap-card">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#373A3E] mb-3">
                [FASILITAS CAFE & RESTAURANT]
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#80858A]">
                <div>• Area Parkir Luas</div>
                <div>• Akses Wi-Fi Cepat</div>
                <div>• Musholla Nyaman</div>
                <div>• Stop Kontak Tiap Meja</div>
                <div>• Area Outdoor Sunset</div>
                <div>• Mezanin Indoor Ber-AC</div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 gsap-image-frame">
            <div className="bg-white border border-[#D8DCDE] p-3 shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-[#D8DCDE]">
                <iframe
                  title="Peta Lokasi Skyscapecafe Bandung"
                  src="https://maps.google.com/maps?q=-6.8351561,107.5949389&hl=id&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[30%] contrast-[105%]"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-[#80858A]">
                <span>KOORDINAT: -6.8351561, 107.5949389</span>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#373A3E] hover:underline flex items-center gap-1 font-semibold uppercase"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Navigasi Rute</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
