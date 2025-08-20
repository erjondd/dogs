import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  compilerOptions: {
    target: "ESNext",
    lib: ["...", "...", "esnext"],
    types: ["...", "...", "vite/client"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // You can add more configurations here as needed
  // For example, to configure the development server:
  // server: {
  //   port: 3000,
  //   open: true,
  // },
  // To configure build options:
  // build: {
  //   outDir: 'dist',
  // },
  // To set up path aliases:
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //   },
  // },
});
