import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            //自动导入，定义以后文件中类似import {defineStore} from "pinia";的语句可省略
            imports:["vue","vue-router","pinia"],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver({importStyle: "sass"})]
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入定制化样式文件进行样式覆盖
                additionalData: `
          @use "./src/styles/element/index.scss" as *;
          @use "./src/styles/element/var.scss" as *;         
        `,
            }
        }
    }
})
