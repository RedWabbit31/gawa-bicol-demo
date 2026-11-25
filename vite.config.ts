import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gawa Bicol',
        short_name: 'Gawa Bicol',
        theme_color: '#047857',
        background_color: '#ecfdf5',
        display: 'standalone',
        start_url: '/',
      },
    }),
  ],
})
