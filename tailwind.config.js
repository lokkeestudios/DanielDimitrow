module.exports = {
  content: ["./src/**/*.{html, js, ts}"],
  darkMode: "media",
  theme: {
    extend: {
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
      fontFamily: {
        body: "'Montserrat', sans-serif",
      },
      fontSize: {
        xxs: ["0.625rem", "1.1"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
