import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on 0.0.0.0 so the app is reachable from outside
    // Allow any host header (local network, tunnels, cloud preview URLs)
    allowedHosts: true,
  },
});
