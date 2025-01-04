import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': '#f2f2f2',
        'bg-blue': '#38a169',
      },
      keyframes: {
        spinWithPause: {
          '0%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: { // Ajout de l'animation flottante
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        spinWithPause: 'spinWithPause 3s linear infinite',
        float: 'float 5s ease-in-out infinite', // Animation flottante
      },
      fontFamily: {
        kadwa: ['Kadwa', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"], // Active les thèmes light et dark
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require("daisyui")],
} satisfies Config;
