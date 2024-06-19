import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' : {
        target: 'https://cleat-connect-turf-booking-backend-q4aj5yb2x.vercel.app',
        secure: false
      }
    }
  },
  plugins: [react()],
})

