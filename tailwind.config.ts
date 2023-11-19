import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        blackHanSans: ['var(--font-blackHanSans)'],
        notosanskr: ['var(--font-notosanskr)'],
        lato: ['var(--font-lato)'],
        pretendard: ['var(--font-pretendard)'],
        tossface: ['var(--font-tossface)'],
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    'prettier-plugin-tailwindcss',
    require('tailwind-scrollbar'),
  ],
};
export default config;
