/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray900: "#2D3748",
        cyan: "#4FD1C5",
        gray250: "#718096",
        gray200: "#A0AEC0",
        gray150: "#E2E8F0",
        gray100: "#F8F9FA",
        gray50: "#CBD5E0",
        red: "#E53E3E",
        green: "#48BB78",
      },

      width: {
        452: "452px",
      },
      height: {
        "93vh": "93vh",
      },
      lineClamp: {
        7: "7",
        45: "45",
        9: "9",
        10: "10",
      },
      backgroundImage: {
        signUpBG: "url('./src/assets/signupbackground.jpg')",
        signInBG: "url('./src/assets/signInBG.png')",
        adBG: "url('./src/assets/adBG.png')",
        chart2BG: "url('./src/assets/chart2.png')",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "15px",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridColumnEnd: {
        15: "15",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
