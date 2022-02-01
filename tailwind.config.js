const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Montserrat', sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: "#C4983C",
          light: "#E0BD5B",
        },
        neutrals: {
          900: "#05191F",
          700: "#0A262D",
          500: "#0F3037",
          50: "#FFFEFA",
        },
      },
      fontSize: {
        xxs: ["0.625rem", "1.1"],
      },
    },
  },
  plugins: [],
};
