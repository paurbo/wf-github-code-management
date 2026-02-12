import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost',
    cors: '*', // Allow Webflow to load local scripts
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        format: 'umd', // Universal Module Definition (works everywhere)
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$', // If you use jQuery
        },
      },
      external: ['jquery'], // Don't bundle jQuery (Webflow already has it)
    },
  },
});