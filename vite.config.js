import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'


import { wrapperEnv } from './build/utils'
import path from 'path'
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd())
    const viteEnv = wrapperEnv(env)
        // 这样就可以拿到定义好的环境变量了，也可以使用process.env.xxx这种方式进行访问
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        plugins: [vue(), Components({
            resolvers: [NaiveUiResolver()]
        })],
        base: VITE_PUBLIC_PATH || '/',
        css: {
            preprocessorOptions: {
                //define global scss variable
                scss: {
                    additionalData: `@import '@/styles/variables.scss';`,
                },
            },
        },

    }
})