import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ViteStyleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteStyleImport(),

  ],
});

