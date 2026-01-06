import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "#components": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/components"
      ),
      "#const": resolve(dirname(fileURLToPath(import.meta.url)), "src/const"),
      "#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
      "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
      "#windows": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/windows"
      ),
    },
  },
});
