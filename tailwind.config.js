/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#E10600",
        "background-dark": "#0B0B0E",
        "background-light": "#f8f5f5",
        "surface-dark": "#15151A",
        "text-gray": "#CCCCCC",
        "ui-gray": "#2A2A33",
      },
      fontFamily: {
        "display": ["Rajdhani", "sans-serif"],
        "body": ["Rubik", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "lg": "0.25rem",
      },
      backgroundImage: {
        'tech-grid': "linear-gradient(rgba(225, 6, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 6, 0, 0.05) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
