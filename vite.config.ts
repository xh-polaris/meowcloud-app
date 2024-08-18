import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    /*AutoImport({
      imports: ['uni', 'vue', 'vue-router', 'pinia'],
      dts: true,
    }),*/
  ],
})
