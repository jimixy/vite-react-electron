import { defineConfig } from "vite";
import dotenv from "dotenv";
import { join } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

dotenv.config({ path: join(__dirname, ".env") });
const root = join(__dirname, "src/render");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  resolve: {
    alias: {
      "/@": root,
    },
  },
  plugins: [reactRefresh()],
  base: "./",
  build: {
    outDir: join("../../dist/render"),
    emptyOutDir: true,
  },
  server: {
    port: +process.env.PORT,
  },
  optimizeDeps: {
    exclude: ["electron-is-dev", "electron-store"],
  },
});
