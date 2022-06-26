/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur-background.png)",
      },
      fontFamily: {
        sans: "Nunito, sans-serif",
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#0047FF",
          700: "#002687",
        },
        orange: {
          500: "#FFC047",
        },
        pink: {
          500: "#FF1B8B",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#0F0F0F",
          800: "#171717",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
};
