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
    },
  },
  plugins: [],
};
