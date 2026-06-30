/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — "Ember & Husk": a wood-fired, market-stall warmth.
        espresso: "#241A13", // near-black, roasted bean
        husk: "#FBF3E7", // warm unbleached cream — backgrounds
        clay: "#3A2A1E", // dark text on cream
        ember: "#D9663B", // primary accent — charcoal-grilled orange
        ember_dark: "#B84F2B",
        saffron: "#E8A93A", // secondary accent — spice gold
        olive: "#6F7A4E", // herb green, used sparingly
        smoke: "#9C8F80", // muted secondary text
        line: "#E7DBC8", // hairline borders on cream
      },
      borderRadius: {
        xl2: "28px",
      },
    },
  },
  plugins: [],
};
