import { defineConfig } from 'vite'
import path from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    resolve: {
        alias: {
            '@style-variables': path.resolve(__dirname, 'src/style-variables.less')
        }
    },
    plugins: [handlebars()],
}) 
