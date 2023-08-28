import { defineConfig } from "vite";
import path from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  resolve: {
    alias: {
      "@style-variables": path.resolve(__dirname, "src/style-variables.less"),
      utils: path.resolve(__dirname, "src/utils"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
  plugins: [handlebars()],
});
