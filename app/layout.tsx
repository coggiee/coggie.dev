import type { Metadata } from 'next';
import { Nav } from './components/ui/Nav';
import './globals.css';
import {
  blackHanSans,
  inter,
  lato,
  notosanskr,
  pretendard,
  tossface,
} from './fonts';
import { Footer } from './components/ui/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Zentechie',
    default: 'Zentechie.dev',
  },
  description: '프론트엔드 개발 관련 포스팅이 올라오는 Zentechie 블로그입니다.',
  other: {
    name: ['google-site-verification', 'naver-site-verification'],
    content: [
      'JaVz1bemB3VUWEFyLRmR9RLOBNr4hybV8S5GWvJZkr4',
      '59f5471d35d15f99c1a7841c357220db014e240c',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${blackHanSans.variable} ${notosanskr.variable} ${lato.variable} ${pretendard.variable} ${tossface.variable}`}
      >
        <div className='flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark'>
          <Nav />
          <main className='flex-grow flex flex-col items-center w-full px-12 md:flex-row md:items-baseline font-notosanskr'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
