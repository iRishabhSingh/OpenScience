/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'half': '45vh',
        'onehalf': "9.9vh",
        "144":"33.99rem",
        "112":"28rem",
        "88":"22rem"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}