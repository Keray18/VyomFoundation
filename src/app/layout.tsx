import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vyom Foundation",
    default: "Vyom Foundation — Sheltering Every Cause Together",
  },
  description:
    "Vyom Foundation is a youth-led organization in Mathura, Uttar Pradesh, dedicated to empowering students through Project Samarth, community volunteering, and foundational education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSerif.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF7] text-[#242B33] antialiased selection:bg-[#E6B85C]/30 selection:text-[#142A46]">
        {children}
      </body>
    </html>
  );
}
