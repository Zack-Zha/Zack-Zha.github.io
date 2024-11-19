/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

