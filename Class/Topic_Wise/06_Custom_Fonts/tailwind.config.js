module.exports = {
  content: ["./Topic_Wise/06_Custom_Fonts/public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6353",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
