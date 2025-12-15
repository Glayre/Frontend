/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cavBlue: "#004aad",
        cavDark: "#1a1a1a",
        cavGray: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
