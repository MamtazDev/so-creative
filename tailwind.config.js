/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        hanken: "'Hanken Grotesk', sans-serif",
      },
      backgroundColor: {
        levelBg: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #1C1917 80%)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
