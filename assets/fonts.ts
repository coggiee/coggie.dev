import { Inter, Lato, Noto_Sans_KR, Marhey, Pacifico, Indie_Flower, Permanent_Marker } from 'next/font/google';
import { Black_Han_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
export const blackHanSans = Black_Han_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-blackHanSans',
});

export const notosanskr = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosanskr',
});

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const marhey = Marhey({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marhey',
});

export const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export const indieFlower = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indieFlower',
});

export const permanentMarker = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-permanentMarker',
});

// export const pretendard = localFont({
//   src: '../public/fonts/PretendardVariable.ttf',
//   display: 'swap',
//   variable: '--font-pretendard',
//   preload: true,
// });

// export const tossface = localFont({
//   src: '../public/fonts/TossFaceFontMac.ttf',
//   display: 'block',
//   variable: '--font-tossface',
//   preload: true,
// });
