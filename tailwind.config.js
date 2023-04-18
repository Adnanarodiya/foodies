/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#06C167",
          light: "#F3FCF7",
        },
        black: {
          DEFAULT: "#1D1D1F",
          light: "#767675",
        },
        gray: {
          DEFAULT: "#f0f1ec",
          light: "#f0ede2",
        },
      },
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1320px",
      },
    },
  },
  plugins: [],
};
