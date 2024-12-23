/** @type {import('tailwindcss').Config} */

import catppuccin from '@catppuccin/tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    catppuccin({
      defaultFlavour: 'mocha',
    }),
  ],
  theme: {
    fontFamily: {
      mono: '"Fira Code Variable", monospace',
    },
    extend: {
      animation: {
        'spin-once': 'spin 0.5s ease-in-out',
      },
    },
  },
};
