import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@design": resolve("./src/app/components/design"),
      "@functional": resolve("./src/app/components/functional"),
      "@pages": resolve("./src/app/pages"),
      "@style": resolve("./src/style"),
      "@core": resolve("./src/core"),
    },
  },
});
