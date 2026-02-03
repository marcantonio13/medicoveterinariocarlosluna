import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/pagina-medicoveterinario-carlosluna/", // 👈 nombre exacto del repo
  plugins: [react()],
})