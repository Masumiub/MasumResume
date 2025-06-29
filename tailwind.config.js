import daisyui from "daisyui";
import themes from "daisyui/src/colors/themes.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        black: {
          ...themes["[data-theme=dark]"],
          primary: "#7f5af0",
          "base-100": "#000000",
          "base-content": "#ffffff",
        },
      },
    ],
    darkTheme: "black",
  },
};
