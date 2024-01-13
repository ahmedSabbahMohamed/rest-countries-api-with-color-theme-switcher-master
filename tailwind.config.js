/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "d-dBlue": "hsl(209, 23%, 22%)",
        "d-vdBlue": "hsl(207, 26%, 17%)",
        "l-vdBlue": "hsl(200, 15%, 8%)",
        "l-dGray": "hsl(0, 0%, 52%)",
        "l-vlGray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        myFont: '"Nunito Sans", sans-serif',
      },
    },
  },
  plugins: [],
};

