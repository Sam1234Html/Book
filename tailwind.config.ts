import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7f4",
          100: "#e1e8e1",
          200: "#c7d5c7",
          500: "#9CAF88", // Primary Therapeutic Green
          600: "#7d9169",
          900: "#556B2F", // Deep Sage for Text
        },
      },
    },
  },
  plugins: [],
};
export default config;
