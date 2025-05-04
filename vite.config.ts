import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // default
  },
  // Required for GitHub Pages or Vercel to handle client-side routing
  base: "/", // Or use '/your-repo-name/' for GitHub Pages
});
