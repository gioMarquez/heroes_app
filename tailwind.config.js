/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glue: {
          100: "#402E7A",
          200: "#4C3BCF",
          300: "#4B70F5",
          400: "#4B70F5",
          500: "#3DC2EC",
        },
        selected: {
          navItem: "#030637"
        }
      }
    },
  },
  plugins: [],
}

