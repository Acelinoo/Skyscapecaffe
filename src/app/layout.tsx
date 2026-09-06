import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Skyscapecafe | Cafe, Eatery & Restaurant Bandung",
  description:
    "Makan dan Ngopi sambil lihat City Lights Bandung, Pegunungan, dan Sunset. Destinasi kuliner dan kopi terbaik di dataran tinggi Bandung dengan panorama spektakuler.",
  keywords: [
    "Skyscape Cafe",
    "Skyscapecafe Bandung",
    "Cafe City Lights Bandung",
    "Cafe Sunset Bandung",
    "Restaurant Bandung",
    "Eatery Bandung",
    "Tempat Ngopi Bandung",
  ],
  authors: [{ name: "Skyscapecafe" }],
  openGraph: {
    title: "Skyscapecafe - Cafe, Eatery & Restaurant Bandung",
    description:
      "Makan dan Ngopi sambil lihat City Lights Bandung, Pegunungan, dan Sunset.",
    url: "https://skyscapecafe.id",
    siteName: "Skyscapecafe",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#F3F4F6] text-[#373A3E] font-sans selection:bg-[#373A3E] selection:text-[#F3F4F6]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
