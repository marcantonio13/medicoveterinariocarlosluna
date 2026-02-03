import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/medicoveterinariocarlosluna/", // 👈 nombre exacto del repo
  plugins: [react()],
})