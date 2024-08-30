import { fileURLToPath, URL } from "url";                                         
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
import { resolve } from "path";
export default defineConfig({
  plugins: [react()],
  base: '/catalina-vega-mendez.github.io/',
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },       
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },                  
//      '@': path.resolve(__dirname, './src')
    ]
  },
  build: {
    outDir: 'dist',
  }
})