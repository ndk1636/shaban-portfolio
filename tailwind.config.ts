import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-jakarta)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: { ink:"#0B1120", brand:"#4F46E5", brandDark:"#3730A3", aqua:"#14B8A6", paper:"#F6F7FB" },
      boxShadow: {
        soft:"0 24px 70px -20px rgba(15,23,42,.18)",
        card:"0 10px 30px -12px rgba(15,23,42,.12)",
        glow:"0 0 0 1px rgba(79,70,229,.12), 0 20px 60px -25px rgba(79,70,229,.35)"
      }
    }
  },
  plugins: []
};
export default config;