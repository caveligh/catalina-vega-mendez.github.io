import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/catalina-vega-mendez.github.io/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [/^@/]  // Esto puede ayudar con las importaciones que usan '@'
    }
  }
})