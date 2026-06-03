import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api/* to your live server during local dev
      // so the PHP endpoint is reachable without CORS issues
      '/api': {
        target: 'https://mavericinfotech.in',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
