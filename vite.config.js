import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path"; 

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), 
        "todo-card": resolve(__dirname, "todo-card.html"), 
      },
    },
  },

  
  server: {
    open: true, // auto-open browser in dev
  },
});
