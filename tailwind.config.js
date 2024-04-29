/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-green": "var(--secondary-green)",
        "gray-shade-0": "var(--gray-shade-0)",
        "gray-shade-5": "var(--gray-shade-5)",
        "gray-shade-10": "var(--gray-shade-10)",
        "gray-shade-15": "var(--gray-shade-15)",
        "gray-shade-20": "var(--gray-shade-20)",
        "gray-shade-25": "var(--gray-shade-25)",
        "gray-shade-30": "var(--gray-shade-30)",
        "gray-shade-35": "var(--gray-shade-35)",
        "gray-shade-40": "var(--gray-shade-40)",
        "gray-shade-45": "var(--gray-shade-45)",
        "gray-shade-50": "var(--gray-shade-50)",
        "gray-shade-55": "var(--gray-shade-55)",
        "green-shade-0": "var(--green-shade-0)",
        "black-shade-0": "var(--black-shade-0)",
        "admin-red-0": "var(--admin-red-0)",
        "admin-red-5": "var(--admin-red-5)",
        customBlue: "#02A29E",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
