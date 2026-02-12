import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Matches the port in our Loader Script
    cors: true, // CRITICAL: Allows Webflow to load scripts from your machine
  },
  build: {
    rollupOptions: {
      input: 'src/main.js', // Your entry point
      output: {
        entryFileNames: 'main.js', // Forces a consistent filename (no hashes)
        format: 'iife', // "Immediately Invoked Function Expression" - safe for browsers
        name: 'WebflowSite', // Global variable name if needed
      }
    }
  }
});