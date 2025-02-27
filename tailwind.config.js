/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "serif"],
        raleway: ["Raleway", "serif"],
      },
      screens: {
        'xs': '400px',
        'sm': '600px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1792px'
      },
    },
  },
  plugins: [],
}

