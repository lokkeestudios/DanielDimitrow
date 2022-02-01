import path from "path";

export default {
  base: "",
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    publicDir: path.join(__dirname, "public"),
    rollupOptions: {
      input: {
        main: "index.html",
        imprint: "impressum/index.html",
        privacypolicy: "datenschutz/index.html",
        404: "404.html",
      },
    },
  },
};
