import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site URL: update this to your repository name.
  // Example: if your repo is "haris-portfolio", use "/haris-portfolio/".
  base: "/haris-portfolio/",
});