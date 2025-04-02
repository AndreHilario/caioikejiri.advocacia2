import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    // base: "/caioikejiri.advocacia",
    strictPort: true,
    port: 3000,
  };
});