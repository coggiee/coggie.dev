import type { Metadata } from 'next';
import Nav from './_components/common/Nav';
import '@/app/_styles/globals.css';
import {
  blackHanSans,
  inter,
  lato,
  notosanskr,
  marhey,
  pacifico,
  indieFlower,
  permanentMarker,
  dhurjati,
  teko,
} from '../assets/fonts';
import Footer from './_components/common/Footer';
import { Providers } from './_provider/providers';
import AuthProvider from './_provider/AuthProvider';
import FramerProvider from './_provider/FramerProvider';

export const dynamic = 'dynamic';

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://coggie.dev')
      : new URL('http://localhost:3000'),
  title: {
    template: '%s | Coggie',
    default: 'coggie.dev',
  },
  description: '프론트엔드 개발 블로그 coggie.dev입니다.',
  icons: {
    icon: '/mimoji.png',
    apple: '/mimoji.png',
  },
  other: {
    'naver-site-verification': 'db583c8efc6a2ebd36e6b839daf24a146b414c49',
  },
  openGraph: {
    title: 'coggie.dev',
    description: '프론트엔드 개발 블로그 coggie.dev입니다.',
    url: 'https://coggie.dev',
    siteName: 'coggie.dev',
    images: [
      {
        url: 'https://i.ibb.co/XX8jkbW/mimoji.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'coggie.dev',
    description: '프론트엔드 개발 블로그 coggie.dev입니다.',
    creator: '@coggie',
    images: ['https://i.ibb.co/XX8jkbW/mimoji.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${blackHanSans.variable} ${notosanskr.variable} ${lato.variable} ${marhey.variable} ${pacifico.variable} ${indieFlower.variable} ${permanentMarker.variable}  ${dhurjati.variable} ${teko.variable} dark:bg-[#212121] transition-all ease-in-out overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[dodgerblue]/60`}
      >
        <AuthProvider>
          <Providers>
            <FramerProvider>
              <div className='flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark'>
                <Nav />
                <main className='flex-grow flex flex-col items-center w-full px-5 md:px-12 md:flex-row md:items-baseline font-notosanskr'>
                  {children}
                </main>
                <Footer />
              </div>
            </FramerProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
