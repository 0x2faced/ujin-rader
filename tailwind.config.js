module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        press: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
