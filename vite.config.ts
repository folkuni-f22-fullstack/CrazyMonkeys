import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
          external: ['react-icons/Lu'],
        },
      },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3114',
        changeOrigin: true,
      }
    }
  }
})
