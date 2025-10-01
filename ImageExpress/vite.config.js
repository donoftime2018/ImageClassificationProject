import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: `/ImageClassificationProject/?v=${Date.now()}/`,
  plugins: [solid()],
})
