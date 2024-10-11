/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carmine: "#a30015",
        darkpink: "#bd2d87",
      },
      fontSize: {
        sm: '0.8rem',
        regular: '1rem',
        large: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      backgroundImage: {
        'workout-bg': "url('/src/assets/images/woman-training-weightlifting-gym.jpg')",
       
      },

    },
  },
  plugins: [],
}

