export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "non-coffee" | "main-course" | "light-bites" | "dessert";
  price: number;
  priceFormatted: string;
  description: string;
  image: string;
  isPopular?: boolean;
  highlightBadge?: string; // Text badge, never pill
}

export interface GoogleReview {
  id: string;
  author: string;
  avatarText: string;
  rating: number;
  relativeTime: string;
  reviewText: string;
  visitedTime: string;
}

export const CAFE_INFO = {
  name: "Skyscapecafe",
  fullName: "SKYSCAPE Cafe & Eatery",
  headline: "Cafe, Eatery & Restaurant Bandung",
  subheadline:
    "Makan dan Ngopi sambil lihat City Lights Bandung, Pegunungan, dan Sunset.",
  description:
    "Terletak di perbukitan sejuk Bandung, Skyscapecafe memadukan kenikmatan sajian kuliner istimewa, racikan kopi artisan, serta panorama matahari terbenam dan kerlip lampu kota yang tiada tanding.",
  whatsappNumber: "6281223456789", // Dapat disesuaikan
  googleMapsUrl:
    "https://www.google.com/maps/place/SKYSCAPE+Cafe+%26+Eatery/@-6.8351561,107.5949389,17z/data=!4m8!3m7!1s0x2e68e1c4eec8c2c9:0x548f01d2f1ab1683!8m2!3d-6.8351561!4d107.5949389!9m1!1b1!16s%2Fg%2F11xfvzqw97?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  googleReviewDirectUrl:
    "https://www.google.com/search?q=SKYSCAPE+Cafe+%26+Eatery#lrd=0x2e68e1c4eec8c2c9:0x548f01d2f1ab1683,3",
  address: "Jl. Punclut - Pagermaneuh No. 18, Ciumbuleuit Atas, Bandung, Jawa Barat 40391",
  coordinates: {
    lat: -6.8351561,
    lng: 107.5949389,
  },
  operatingHours: {
    weekday: "Senin - Jumat: 10.00 - 23.00 WIB",
    weekend: "Sabtu - Minggu: 08.00 - 00.00 WIB",
  },
  stats: {
    googleRating: 4.8,
    reviewCount: 428,
    altitude: "1.240 mdpl",
    viewSpan: "360° Panorama",
  },
  vipRoom: {
    title: "Ruang VIP Meeting & Gathering",
    capacity: "15 - 35 Orang",
    facilities: [
      "Proyektor HD & Layar Presentasi",
      "Koneksi Wi-Fi Berkecepatan Tinggi",
      "Stop Kontak di Setiap Sisi Meja",
      "Tata Suara (Audio Sound System)",
      "Ruangan Glasshouse Ber-AC & Sejuk",
      "Pilihan Paket Coffee Break & Makanan",
    ],
  },
};

export const POPULAR_PICKS: MenuItem[] = [
  {
    id: "pop-1",
    name: "Classic Latte",
    category: "coffee",
    price: 35000,
    priceFormatted: "Rp 35.000",
    description: "Espresso ganda berpadu susu kukus lembut dengan aroma kacang manis seimbang.",
    image: "/images/classic-latte.jpg",
    isPopular: true,
    highlightBadge: "FAVORIT",
  },
  {
    id: "pop-2",
    name: "Caramel Macchiato",
    category: "coffee",
    price: 38000,
    priceFormatted: "Rp 38.000",
    description: "Lapisan susu vanila dingin, espresso pekat, dan lelehan saus karamel artisanal.",
    image: "/images/caramel-macchiato.jpg",
    isPopular: true,
    highlightBadge: "BEST SELLER",
  },
  {
    id: "pop-3",
    name: "Blueberry Cheesecake",
    category: "dessert",
    price: 42000,
    priceFormatted: "Rp 42.000",
    description: "Kue keju panggang lembut khas New York disiram selai buah blueberry segar asli.",
    image: "/images/blueberry-cheesecake.jpg",
    isPopular: true,
    highlightBadge: "CHEF PICK",
  },
  {
    id: "pop-4",
    name: "Avocado Toast",
    category: "light-bites",
    price: 45000,
    priceFormatted: "Rp 45.000",
    description: "Roti sourdough renyah bertabur alpukat tumbuk, telur rebus setengah matang, dan rempah.",
    image: "/images/avocado-toast.jpg",
    isPopular: true,
    highlightBadge: "HEALTHY BRUNCH",
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...POPULAR_PICKS,
  {
    id: "cof-1",
    name: "Skyscape Sunset Cold Brew",
    category: "coffee",
    price: 38000,
    priceFormatted: "Rp 38.000",
    description: "Seduhan dingin 16 jam dengan infusi kulit jeruk segar dan nektar bunga kopi.",
    image: "/images/classic-latte.jpg",
  },
  {
    id: "cof-2",
    name: "V60 Flores Bajawa Specialty",
    category: "coffee",
    price: 36000,
    priceFormatted: "Rp 36.000",
    description: "Manual brew single origin dengan profil rasa cokelat manis dan rempah bunga.",
    image: "/images/story-coffee.jpg",
  },
  {
    id: "cof-3",
    name: "Piccolo Mountain Roast",
    category: "coffee",
    price: 32000,
    priceFormatted: "Rp 32.000",
    description: "Keseimbangan presisi ristretto pekat dan susu bertekstur beludru.",
    image: "/images/classic-latte.jpg",
  },
  {
    id: "non-1",
    name: "Artisan Sunset Berry Mocktail",
    category: "non-coffee",
    price: 36000,
    priceFormatted: "Rp 36.000",
    description: "Paduan sari stroberi Ciwidey, soda bunga elder, dan percikan air lemon segar.",
    image: "/images/caramel-macchiato.jpg",
  },
  {
    id: "non-2",
    name: "Kyoto Ceremonial Matcha",
    category: "non-coffee",
    price: 38000,
    priceFormatted: "Rp 38.000",
    description: "Bubuk teh hijau Jepang kualitas upacara yang disajikan hangat dengan susu murni.",
    image: "/images/classic-latte.jpg",
  },
  {
    id: "main-1",
    name: "Wagyu Ribeye Cafe de Bandung",
    category: "main-course",
    price: 135000,
    priceFormatted: "Rp 135.000",
    description: "Daging wagyu panggang bumbu herbal pegunungan disajikan bersama kentang tumbuk lembut.",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: "main-2",
    name: "Nasi Goreng Iga Bakar Skyscape",
    category: "main-course",
    price: 68000,
    priceFormatted: "Rp 68.000",
    description: "Nasi goreng rempah tradisional dengan potongan iga sapi bakar karamel empuk dan sambal matah.",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: "main-3",
    name: "Creamy Truffle Fettuccine",
    category: "main-course",
    price: 62000,
    priceFormatted: "Rp 62.000",
    description: "Pasta fettuccine dengan saus krim jamur liar dan sentuhan minyak truffle aromatik.",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: "bite-1",
    name: "Truffle Parmesan Fries",
    category: "light-bites",
    price: 36000,
    priceFormatted: "Rp 36.000",
    description: "Kentang goreng renyah berbalut keju parmesan parut dan aroma truffle mewah.",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: "bite-2",
    name: "Crispy Calamari Rings",
    category: "light-bites",
    price: 42000,
    priceFormatted: "Rp 42.000",
    description: "Cumi goreng tepung keemasan dengan saus tartar rumahan yang segar.",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: "des-1",
    name: "Artisan Butter Croissant",
    category: "dessert",
    price: 28000,
    priceFormatted: "Rp 28.000",
    description: "Roti croissant mentega Prancis dengan lapisan berlapis yang renyah di luar dan lembut di dalam.",
    image: "/images/story-coffee.jpg",
  },
  {
    id: "des-2",
    name: "Warm Valrhona Chocolate Lava",
    category: "dessert",
    price: 45000,
    priceFormatted: "Rp 45.000",
    description: "Kue cokelat panggang dengan lelehan cokelat hitam Valrhona pekat dan es krim vanila.",
    image: "/images/blueberry-cheesecake.jpg",
  },
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Raden Arya Pratama",
    avatarText: "RA",
    rating: 5,
    relativeTime: "1 minggu yang lalu",
    visitedTime: "Kunjungan Sore & Malam",
    reviewText:
      "Pemandangan sunset dan city lights Bandung dari lantai atas Skyscape benar-benar tiada tandingan. Kopinya sangat nikmat, suasananya tenang, dan pelayanannya sangat ramah serta profesional.",
  },
  {
    id: "rev-2",
    author: "dr. Amanda Clarissa",
    avatarText: "AC",
    rating: 5,
    relativeTime: "2 minggu yang lalu",
    visitedTime: "Reservasi Makan Malam",
    reviewText:
      "Tempat terbaik di Bandung untuk menikmati makan malam sambil memandang gemerlap lampu kota. Blueberry Cheesecake dan Wagyu Ribeye-nya luar biasa lezat. Wajib reservasi meja outdoor sebelum matahari terbenam!",
  },
  {
    id: "rev-3",
    author: "Bambang Sudiro",
    avatarText: "BS",
    rating: 5,
    relativeTime: "3 minggu yang lalu",
    visitedTime: "Kunjungan Akhir Pekan",
    reviewText:
      "Udara pegunungan yang sejuk berpadu dengan secangkir Classic Latte hangat adalah kombinasi sempurna. Tata letak cafe estetik dan sangat nyaman untuk berkumpul bersama keluarga.",
  },
  {
    id: "rev-4",
    author: "Nadya Kusuma Putri",
    avatarText: "NK",
    rating: 5,
    relativeTime: "1 bulan yang lalu",
    visitedTime: "Golden Hour Sunset",
    reviewText:
      "Proses reservasi melalui WhatsApp sangat cepat dan responsif. Meja dengan pemandangan langsung ke bukit dan kota sudah disiapkan dengan rapi. Sangat merekomendasikan Skyscape!",
  },
];

export const GOLDEN_HOURS = [
  {
    period: "Pukul 16.45 - 18.00 WIB",
    title: "The Golden Sunset",
    description:
      "Matahari perlahan tenggelam di balik punggung pegunungan Bandung, memancarkan semburat jingga keemasan yang menawan.",
  },
  {
    period: "Pukul 18.00 - 19.15 WIB",
    title: "Twilight Horizon",
    description:
      "Gradasi langit senja berubah menjadi biru temaram, saat ribuan lampu kota Bandung mulai menyala satu per satu.",
  },
  {
    period: "Pukul 19.15 - 23.00 WIB",
    title: "Starlight & City Lights",
    description:
      "Hamparan lautan kerlap-kerlip lampu kota Bandung tampak memukau di bawah langit malam yang jernih dan berhawa sejuk.",
  },
];
