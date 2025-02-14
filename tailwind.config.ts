import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'squid-pink': '#FF0266',
      },
      textShadow: {
        'glow': '0 0 2px rgba(255, 2, 102, 0.8), 0 0 4px rgba(255, 2, 102, 0.6)',
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 2px rgba(255, 2, 102, 0.8), 0 0 4px rgba(255, 2, 102, 0.6)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config;
