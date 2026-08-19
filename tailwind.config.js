export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        naranja: "#F2653C",
        crema:   "#FCF7EE",
        teal:    "#2CBFA1",
        ambar:   "#F5B944",   // pendiente / falta hacer
        gris: "#9A9A9A",
        grisclaro:"#D9D9D9",
        carbon:"#3C3633"
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        sans:    ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}