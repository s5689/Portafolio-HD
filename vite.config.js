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
        ascii: resolve(__dirname, 'projects/personal/ascii_paint/index.html'),
        portafolio: resolve(__dirname, 'projects/personal/portafolio/index.html'),

        bingo: resolve(__dirname, 'projects/laboral/bingo/index.html'),
        calculadora: resolve(__dirname, 'projects/laboral/calculadora/index.html'),
        dados: resolve(__dirname, 'projects/laboral/dados/index.html'),
      },
    },
  },
});
