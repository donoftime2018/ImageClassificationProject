import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: `/ImageClassificationProject/`,
  plugins: [solid(), tailwindcss()],
  build: {
    target: 'esnext'
  }
})
