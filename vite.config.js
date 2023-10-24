import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@style-variables': path.resolve(__dirname, 'src/style-variables.less')
    }
  }
})
