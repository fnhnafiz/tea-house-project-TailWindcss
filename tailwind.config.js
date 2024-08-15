/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      colors: {
        "box-shadows": "0px 7px 50px 0px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "clients-cup-logo": "url('../images/cup.png')",
      },
    },
    plugins: [],
  },
};
