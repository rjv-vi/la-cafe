import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// На GitHub Pages сайт доступен по адресу /<repo>/, поэтому base=/la-cafe/
// в продакшене и '/' в dev для удобной локальной разработки.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/la-cafe/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
}))
