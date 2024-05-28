import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'particles': "/public/assets/particles-bg.png",
        'challenge': "url('/public/assets/challenger.png')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        space: ["var(--font-space_grotesk)"],
      },
      animation: {
        bounce: 'bounce 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0, 0, 255, 0.8)',
        'glow-sides': '10px 0 10px -5px rgba(0, 0, 255, 0.6), -10px 0 10px -5px rgba(0, 0, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
