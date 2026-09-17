import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default (root-absolute) base — correct for real hosting (Vercel,
// Netlify, etc.). The one-click "double-click index.html locally" build
// is produced separately with `vite build --base ./`, so this file no
// longer needs to compromise on that.
export default defineConfig({
  plugins: [react()],
});
