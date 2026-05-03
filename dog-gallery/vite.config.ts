import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/SPA-dog_gallery/",
  plugins: [react()],
});