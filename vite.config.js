import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ye config file Vite ko React plugin ke saath setup karti hai
export default defineConfig({
  plugins: [react()],
})
