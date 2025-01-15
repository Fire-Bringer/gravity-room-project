import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-averia-serif-libre)"],
        body: ["var(--font-kiwi-maru"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        // Specific border radius for the burger menu
        'mobile-menu': '0px 0px 0px 20px',
      },
    },
  },
  plugins: [],
} satisfies Config;
