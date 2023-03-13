/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Expletus Sans", "cursive"],
        serif: ["Sansita Swashed", "cursive"],
        mono: ["Ubuntu", "sans-serif"],
        display: ["Ubuntu Condensed", "sans-serif"],
        body: ["Spline Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
