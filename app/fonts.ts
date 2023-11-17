import { Inter } from 'next/font/google';
import { Black_Han_Sans } from 'next/font/google';

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
