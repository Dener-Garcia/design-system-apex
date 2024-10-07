import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // comment base line for deploy out github pages
base: '/design-system-apex',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'src/pages/components.html'),
      },
    },
  },
})