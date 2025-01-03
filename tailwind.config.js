/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ["var(--font-suit)"],
        suitBold: ["var(--font-suit-bold)"],
      },
      fontSize: {
        "size-title": ["var(--font-size-title)"],
        "size-subtitle": ["var(--font-size-subtitle)"],
        "size-body": ["var(--font-size-body)"],
      },
      colors: {
        "color-main": "var(--text-color)",
        "color-secondary": "var(--text-color-secondary)",
      },
    },
  },
  plugins: [],
};
