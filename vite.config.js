import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@style-variables': path.resolve(__dirname, 'src/style-variables.less'),
      utils: path.resolve(__dirname, 'src/utils'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      types: path.resolve(__dirname, 'src/types'),
      api: path.resolve(__dirname, 'src/api'),
      services: path.resolve(__dirname, 'src/services')
    }
  }
})
