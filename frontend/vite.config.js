import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/workouts": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
      "/api/user/signup": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
      "/api/user/login": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
