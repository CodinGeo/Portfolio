import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  envPrefix: ['WEB3FORMS_'],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['local.devsite.test']
  }
})
