import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? `/ImageClassificationProject/?v=${Date.now()}/`
    : '/',
  plugins: [solid()],
  build: {
    target: 'esnext'
  }
})
