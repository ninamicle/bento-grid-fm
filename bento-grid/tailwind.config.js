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
    },
  },
  plugins: [],
};
