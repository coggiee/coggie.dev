import type { Config } from 'tailwindcss';
const { spacing } = require('tailwindcss/defaultTheme');

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
        marhey: ['var(--font-marhey)'],
        pacifico: ['var(--font-pacifico)'],
        indieFlower: ['var(--font-indieFlower)'],
        permanentMarker: ['var(--font-permanentMarker)'],
        // pretendard: ['var(--font-pretendard)'],
        // tossface: ['var(--font-tossface)'],
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            //...
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
          },
        },
      }),
      colors: {
        'item-light': '#f8f8f898',
        'hover-light': '#99999923',
        'hover-dark': '#434343',
        'item-border-light': '#dcdcdc',
        'item-dark': '#282828',
        'item-border-dark': '#353535',
        'brand-color': 'dodgerblue',
        'sub-light': '#ffffff8d',
        'sub-dark': '#3e3e3e'
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
