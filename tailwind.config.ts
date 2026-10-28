import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      colors: {
        ink: "#12140D",
        paper: "#FFFFFF",
        mist: "#F2F4EC",
        line: "#DCDFD2",
        signal: "#1E7A49",
        signalSoft: "#E4EFE3",
        flag: "#B8763A",
        flagSoft: "#F3E8DA"
      },
      maxWidth: { prose: "38rem" }
    }
  },
  plugins: []
};
export default config;
