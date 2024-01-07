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
        basewhite: "var(--basewhite)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "primary-600": "var(--primary-600)",
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
