// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        snake: resolve(__dirname, 'projects/personal/snake/index.html'),
        mww: resolve(__dirname, 'projects/personal/mwwmp305/index.html'),
      },
    },
  },
});
