import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tickettracker/', 
  plugins: [react()],
  build: {
    target: 'es2015',
  },
})