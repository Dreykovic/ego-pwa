/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors:{

          ternary: "#74c0e148",

          "ternary-content": "#0c486c",
    },
    extend: {
      colors: {},

      fontFamily: {},
      content: {},
      gridTemplateRows: {
       

        // Complex site-specific row configuration
        'layout': '200px minmax(300px, 900px)',
        'sm-layout': '100px minmax(500px, 500px)',
        'md-layout': '100px minmax(500px, 500px)',
        'min-layout': '100px minmax(500px, 500px)',
        'content-layout': 'minmax(20px, 64px) repeat(9, 1fr)',
      }
    },
    // screens: {
    //   xs: "480px",
    //   sm: "768px",
    //   md: "1060px",
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ego: {
          primary: "#fac118",

          "primary-content": "#140801",

          secondary: "#74c1e1",

          "secondary-content": "#050e12",

          accent: "#fd8d75",

          "accent-content": "#001616",

          neutral: "#ffffff",

          "neutral-content": "#161616",

          "base-100": "#146493",

          "base-200": "#10567f",

          "base-300": "#0c486c",

          "base-content": "#d1dfea",

          info: "#0ea5e9",

          "info-content": "#000a13",

          success: "#44a840",

          "success-content": "#ffffff",

          warning: "#ff5522",

          "warning-content": "#160200",

          error: "#ff0000",

          "error-content": "#ffffff",
        },
      },
    ],
  },
};
