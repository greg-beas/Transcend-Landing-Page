/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#FFF',
        secondary: '#F5D130',
        buttonBg: '#F5D130',
        buttonText: '#222',
        buttonBgHover: '#C4A726',
      }
    },
  },
  plugins: [],
}

