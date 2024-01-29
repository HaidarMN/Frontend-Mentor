/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "rgb(106, 190, 205)",
        "primary-purple": "rgb(62, 84, 163)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
        "rose-white": "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        "wenge-brown": "hsl(30, 10%, 34%)",
        "dark-charcoal": "hsl(24, 5%, 18%)",
        grey: "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
        green: "hsl(75, 94%, 57%)",
        yellow: "hsl(47, 88%, 63%)",
        black: "hsl(0, 0%, 7%)"
      },
      fontFamily: {
        Outfit: ["Outfit", "serif"],
      },
    },
  },
  plugins: [],
};
