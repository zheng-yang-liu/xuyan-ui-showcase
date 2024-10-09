import { fileURLToPath, URL } from 'node:url'

import {ConfigEnv, defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({command, mode}: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
    ],
    build:{
      rollupOptions: {
        output: {
          // manualChunks(id:string){//手动分包
          //   if(id.includes('node_modules')){
          //     return 'vendor';
          //   }
          // },
          assetFileNames: (assetInfo:any) => {
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) { // 匹配资源文件后缀
              return `assets/media/[name]-[hash].[ext]`;  // 创建media文件夹存放匹配的资源文件,name为该文件的原名，hash为哈希值，ext为文件后缀名，以[name].[hash][ext]命名规则
            }
            if(/\.(css)$/.test(assetInfo.name)){
              return `assets/css/[name]-[hash].[ext]`
            }
            if (/\.(png|jpe?g|gif|svg|ico)$/.test(assetInfo.name)) { // 匹配图片文件后缀
              return `assets/img/[name]-[hash].[ext]`; // 创建img文件夹存放匹配的图片文件
            }
            return `assets/other/[name]-[hash].[ext]`; // 不匹配的资源文件存放至assets/other文件夹
          },
          entryFileNames: 'assets/js/[name]-[hash].js', // 指定 JS 文件的输出路径及命名规则
          chunkFileNames: 'assets/js/[name]-[hash].js', // 指定分片文件的输出路径及命名规则
        }
      }
    },
    server:{
      host:"10.3.197.176",
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
          additionalData: `@import "@/assets/style/main.scss";`
        }
      }
    },
  })
}

