import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["uniquebuilders.onrender.com"],
    proxy: {
      "/proxy-api": {
        target: "https://ub-admin-ejs-egx5.onrender.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/proxy-api/, ""),
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: ["uniquebuilders.onrender.com"],
  },
});