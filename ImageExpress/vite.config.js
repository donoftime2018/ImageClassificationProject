import { defineConfig, loadEnv } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
return defineConfig({
  base: `/ImageClassificationProject/`,
  plugins: [solid(), tailwindcss()],
  build: {
    target: 'esnext'
  },
  define: {

  }
  
})

}
