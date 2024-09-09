import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: '/MESX/',
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      nested: resolve(__dirname, 'src/html/jobsList.html'),
    }
  }
});