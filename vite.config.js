import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Root-relative assets work on Vercel and during local development.
  base: '/',
})
