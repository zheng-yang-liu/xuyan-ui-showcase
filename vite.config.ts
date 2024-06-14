import { fileURLToPath, URL } from 'node:url'

import {ConfigEnv, defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({command, mode}: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
    ],
    server:{
      host:"10.3.197.142",
      port:8999,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css:{
      preprocessorOptions:{
        scss: {
          additionalData: `@import "@/assets/main.scss";`
        }
      }
    }
  })
}

