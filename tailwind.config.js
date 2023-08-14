/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#00AEFF",
        dark: {
          10: "#181818",
          20: "#474747",
          30: "#EBE9EA",
          40: "#F9F9F9",
        },
        support: {
          10: "#2962FF",
          20: "#0BB07B",
          30: "#FFCE52",
          40: "#F03D3D",
          50: "#E0E0E0",
        },
      },
    },
  },
  plugins: [],
};
