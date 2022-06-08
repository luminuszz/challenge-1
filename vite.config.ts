// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app/"),
      "@components": resolve(__dirname, "src/components/"),
      "@assets": resolve(__dirname, "src/assets/"),
    },
  },
});
