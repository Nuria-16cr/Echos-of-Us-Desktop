import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Netlify doesn't need subfolder paths
  plugins: [react()],
});
