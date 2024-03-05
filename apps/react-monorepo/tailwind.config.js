const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

const screens = {
  mobile: '320px',
  tablet: '640px',
  laptop: '1150px',
  desktop: '1280px',
  '13-inches': '1248px',
  '2xl': '1536px',
};

const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  ...createGlobPatternsForDependencies(__dirname),
];

const theme = {
  /* Reference custom tailwind-css https://tailwindcss.com/docs/theme */
  extend: {
    aspectRatio: {
      '4/3': '4 / 3',
      '2/3': '2 / 3', // aspect-[2/3]
    },
    borderWidth: {
      0.5: '0.5px',
      1: '1px',
    },
    minHeight: {
      '1/2': '50vh',
      '3/4': '75vh',
      '4/5': '80vh',
    },
    minWidth: {
      ...screens,
      '1/2': '50vw',
      '2/5': '40vw',
      '3/5': '60vw',
      '3/4': '75vw',
      '4/5': '80vw',
      80: '320px',
    },
    padding: {
      '2%': '2%',
      '4%': '4%',
    },
    borderRadius: {
      2: '2px',
      4: '4px',
      6: '6px',
    },
    screens: {
      ...screens,
    },
  },
  colors: {
    ...colors,
    primary: {
      0: '#f2f6f6',
      1: '#f5faf9',
      3: '#7ccec1',
      4: '#4FB1AB',
      5: '#e4f5f1',
      6: '#0f6d77',
      10: '#d3f0ea',
      50: '#289194',
      60: '#0F6D77',
      70: '#034d5a', // text-primary-70; border-primary-70; ...
    },
    neutral: {
      0: '#ffffff',
      1: '#fffaf8',
      3: '#f6f9fc',
      5: '#eef1f4',
      10: '#dde3e8',
      20: '#c0c8d0',
      30: '#a5aeb7',
      40: '#8b949e',
      50: '#727c85',
      60: '#5a636d',
      70: '#444c54',
      80: '#2d3034',
    },
    error: {
      20: '#ff4d4f',
      40: '#d64949',
      60: '#891a16',
    },
    warning: {
      0: '#FFFBF5',
      5: '#FFE2AA',
      10: '#F8DCAB',
      40: '#cb8608',
      60: '#825700',
      70: '#805400',
      80: '#553800',
    },
    success: {
      0: '#008201',
    },
    disabled: {
      0: '#f5f5f5',
    },
    graph: {
      1: '#48BFB8',
    },
  },
  fontFamily: {
    sans: ['Nunito Sans'],
    serif: ['GT Super'], // font-serif
  },
};

const darkMode = 'class';

const plugins = [require('@tailwindcss/line-clamp')];

const corePlugins = {
  preflight: false,
};

module.exports = {
  content,
  theme,
  plugins,
  corePlugins,
  darkMode,
};
