/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "blue-d": "hsl(209, 23%, 22%)",
      "blue-vd": "hsl(207, 26%, 17%)",
      "blue-vvd": "hsl(200, 15%, 8%)",
      "gray-d": "hsl(0, 0%, 52%)",
      "gray-vl": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      primary: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
