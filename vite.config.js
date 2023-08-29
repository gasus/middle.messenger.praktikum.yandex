import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@style-variables": path.resolve(__dirname, "src/style-variables.less"),
      utils: path.resolve(__dirname, "src/utils"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      oldPages: path.resolve(__dirname, "src/oldPages"),
      oldComponents: path.resolve(__dirname, "src/oldComponents"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
