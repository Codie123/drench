/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        moon: "#141212",
      },
      backgroundImage: {
        "hero-bg": "url('./images/banner.jpeg')",
        "hero-bg-II": "url('./images/banner-II.jpeg')",
      },
      brightness: {
        100: "100",
      },
      gap: {
        4: "4vmin",
      },
      width: {
        40: "40vmin",
        50: "50vmin",
      },
      height: {
        "56vm": "56vmin",
        "66vm": "66vmin",
        "card-h": "461.5px",
      },
      spacing: {
        "20%": "20%",
        "10%": "10%",
        "3%": "3%",
        "5%": "5%",
        inherit: "inherit",
      },
      gridTemplateRows: {
        "card-lg": "repeat(4,550px)",
      },
    },
  },
  plugins: [],
};
