import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Local development proxy (only for npm run dev)
      '/send-email': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  // Production settings (for npm run build)
  base: '/', // Important for static deployment on Render
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    // Ensure environment variables are available in production
    'process.env': process.env,
  },
});
