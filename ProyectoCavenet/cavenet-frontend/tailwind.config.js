/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cavBlue: "#0A3D91",
        cavGray: "#F5F5F5",
        cavDark: "#1A1A1A",
      },
    },
  },
  plugins: [],
}
