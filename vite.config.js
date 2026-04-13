import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path"; // <-- Add this import

export default defineConfig({
  plugins: [tailwindcss()],

  // Recommended additions for better build & deployment
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // your current index.html
        "todo-card": resolve(__dirname, "todo-card.html"), // your full-screen card page
      },
    },
  },

  // Optional but helpful
  server: {
    open: true, // auto-open browser in dev
  },
});
