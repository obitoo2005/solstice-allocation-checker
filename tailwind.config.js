/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15214a",
        "ink-soft": "#2e3f73",
        amber: "#f08a34",
        cream: "#fff7ef",
        mist: "#f2f1f8",
        success: "#1f9d68",
        danger: "#d14b56",
      },
      boxShadow: {
        halo: "0 24px 80px rgba(47, 22, 3, 0.14)",
        glass: "0 20px 60px rgba(17, 24, 39, 0.14)",
      },
      backgroundImage: {
        "hero-sheen":
          "radial-gradient(circle at top left, rgba(255,255,255,0.88), rgba(255,255,255,0) 42%), linear-gradient(135deg, rgba(255,180,109,0.9), rgba(255,241,229,0.58) 42%, rgba(243,244,246,0.72) 100%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
