import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send-email': 'http://localhost:5000',
      // You can add more API routes here if needed
    },
  },
});
