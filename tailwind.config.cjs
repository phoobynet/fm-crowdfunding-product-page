/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'size-13': 'var(--fs-13)',
        'size-14': 'var(--fs-14)',
        'size-16': 'var(--fs-16)',
      },
    },
    screens: {
      mobile: '23.438rem',
      desktop: '90rem',
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif'],
    },
    colors: {
      'red-500': 'var(--clr-red-500)',
      'green-700': 'var(--clr-green-700)',
      'green-500': 'var(--clr-green-500)',
      'green-100': 'var(--clr-green-100)',
      'gray-800': 'var(--clr-gray-800)',
      'gray-400': 'var(--clr-gray-400)',
      'gray-300': 'var(--clr-gray-300)',
      'gray-200': 'var(--clr-gray-200)',
      'gray-100': 'var(--clr-gray-100)',
      'gray-90': 'var(--clr-gray-90)',
      'gray-75': 'var(--clr-gray-75)',
      'gray-50': 'var(--clr-gray-50)',
      'gray-25': 'var(--clr-gray-25)',
      'gray-10': 'var(--clr-gray-10)',
      white: 'var(--clr-white)',
      black: 'var(--clr-black)',
    },
  },
  plugins: [],
}
