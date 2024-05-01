import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";
export const notosanskr = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-notosanskr",
});

export const aritaburi = localFont({
  src: [
    {
      path: "../public/fonts/Arita-buriHL.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Arita-buriL.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Arita-buriM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Arita-buriSB.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Arita-buriB.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aritaburi",
});
