/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#10D5C2",
        sliderBg: "#ECF0FB",
        toogle: "#CDD7EE",
        discountbackground: "#FEEDE8",
        discounttext: "#FF8C66",
        textDark: "#293356",
        textLight: "#848EAD",
        cta: "#293356",
      },
    },
  },
  plugins: [],
};
