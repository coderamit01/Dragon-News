/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        d_400: '400',
        d_500: '500',
        d_600: '600',
        d_700: '700',
      },
      fontFamily: {
        'Poppins': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}