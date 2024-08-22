import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { writeFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "css-output",
      writeBundle(options, bundle) {
        const cssFileName = Object.keys(bundle).find((fileName) =>
          fileName.endsWith(".css")
        );
        if (cssFileName) {
          const cssContent = bundle[cssFileName].source;
          writeFileSync(path.join(options.dir, "index.css"), cssContent);
          delete bundle[cssFileName];
        }
      },
    },
  ],
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "swiperify",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
});
