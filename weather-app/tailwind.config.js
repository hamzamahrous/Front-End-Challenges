/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      colors: {
        'custom-neutral-900': 'hsl(243, 96%, 9%)',
        'custom-neutral-800': 'hsl(243, 27%, 20%)',
        'custom-neutral-700': 'hsl(243, 23%, 24%)',
        'custom-neutral-600': 'hsl(243, 23%, 30%)',
        'custom-neutral-300': 'hsl(240, 6%, 70%)',
        'custom-neutral-200': 'hsl(250, 6%, 84%)',
        'custom-neutral-0': 'hsl(0, 0%, 100%)',

        'custom-orange-500': 'hsl(28, 100%, 52%)',
        'custom-blue-700': 'hsl(248, 70%, 36%)',
        'custom-blue-500': 'hsl(233, 67%, 56%)',
      },

      fontFamily: {
        Grotesque: ['Bricolage Grotesque', 'sans-serif'],
        Sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
