/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'customBlue' : '#02A29E'
      },
      fontFamily: {
        "text-sm-medium": "var(--text-sm-medium-font-family)",
      },
      boxShadow: {
        "shadow-xs": "var(--shadow-xs)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
