import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components/index.ts"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages/index.ts"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "src/layouts/index.ts"),
      },
      {
        find: "@context",
        replacement: path.resolve(__dirname, "src/context/index.ts"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks/index.ts"),
      },
      {
        find: "@db",
        replacement: path.resolve(__dirname, "src/db/index.tsx"),
      },
    ],
  },
});
