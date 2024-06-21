/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "main-photo": "url('./assets/hashed/main-img.png')",
        "story-2": "url('./assets/hashed/hashed-story-2.png')",
        "story-3": "url('./assets/hashed/hashed-story-3.png')",
        "story-6": "url('./assets/hashed/hashed-story-6.png')",
        "shani-after": "url('./assets/hashed/shani-after.png')",
        "shani-before": "url('./assets/hashed/shani-before.png')",
        "lady-in-derma-page":
          "url('./assets/hashed/hashed-lady-in-derma-page.png')",
        flower: "url('./assets/hashed/hashed-flower.png')",
        "white-bg":
          "url('./assets/images/clean-background-w7k9sqsj91esv3sm.avif')",
        "hair-removal-page":
          "url('./assets/hashed/hashed-hair-removal-page.png')",
        "hair-removal-page-2":
          "url('./assets/hashed/hashed-hair-removal-2.png')",
        "hydro-facial": "url('./assets/hashed/hashed-hydrofacial-page.png')",
        clinic: "url('./assets/hashed/hashed-clinic.png')",
        roza: "url('./assets/hashed/hashed-roza.png')",
      },
    },
  },
  plugins: [],
};
