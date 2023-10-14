/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // roboto: 'Roboto Mono, monospace',
      sans: 'Roboto Mono, monospace'
    },
    extend: {
      fontSize: {
        huge: ['10rem', { lineHeight: '1' }],
      },
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}