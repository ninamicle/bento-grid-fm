/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-medium": ["DMSans-Medium", "sans-serif"],
        "dm-medium-italic": ["DMSans-MediumItalic", "sans-serif"],
        "dm-regular": ["DMSans-Regular", "sans-serif"],
      },
      colors: {
        "purple-100": "hsl(254, 88%, 90%)",
        "purple-500": "hsl(256, 67%, 59%)",

        "yellow-100": "hsl(31, 66%, 93%)",
        "yellow-500": "hsl(39, 100%, 71%)",

        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 7%)",
        link: "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
