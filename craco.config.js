const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@data": path.resolve(__dirname, "src/data"),
      "@": path.resolve(__dirname, "src"),
    },
  },
};
