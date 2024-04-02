import { Amaranth, Inter, Noto_Sans_KR } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const notosanskr = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosanskr",
});

export const amaranth = Amaranth({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amaranth",
});
