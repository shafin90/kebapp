/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#86efac",
        accent: "#15803d",
        background: "#f8fafc",
        text: "#0f172a"
      }
    },
  },
  plugins: [],
} 