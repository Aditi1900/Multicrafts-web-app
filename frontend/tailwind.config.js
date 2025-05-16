/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
          yellow: "#F9DA7D",
          lightyellow: "#fcedc4",
          lightestyellow: "#fef9eb",
       },
       fontFamily: {
        indie: ['Indie Flower', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        amatic: ['Amatic SC', 'sans-serif'],
      },
      grayscale: {
        100: '100%',
      },
      // screens: {
      //   '3xl': '1600px',
      // },
      // animation: {
      //   'fade-scale': 'fadeScale 0.6s cubic-bezier(0.71, 0.05, 0.09, 0.91)',
      // },
      // keyframes: {
      //   fadeScale: {
      //     '0%': {
      //       opacity: '0',
      //       transform: 'rotateY(-50deg) scale(0.5)',
      //     },
      //     '100%': {
      //       opacity: '1',
      //       transform: 'rotateY(0deg) scale(1)',
      //     },
      //   },
      // },
  },
  plugins: [],
}
}