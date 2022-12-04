import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/guardui.js',
      fileName: 'index',
      formats: ['es']
    }
  }
})