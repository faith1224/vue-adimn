import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import legacy from '@vitejs/plugin-legacy'
import purgeIcons from 'vite-plugin-purge-icons'
import windiCSS from 'vite-plugin-windicss'
// import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import { configSvgIconsPlugin } from './svgSprite'
import { configMockPlugin } from './mock'

import { configProxy } from './proxy'

export const configVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    // vueSetupExtend(),
  ]

  // vite-plugin-windicss
  vitePlugins.push(windiCSS())
  
  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons())

  vitePlugins.push(
    Components({
      // 要搜索组件的目录的相对路径
      dirs: '',
      resolvers: [ElementPlusResolver()],
      // 可以选择components.d.ts生成的位置'
      dts: 'typings/components.d.ts'
    }),
  )

  // 引入element-plus的样式
  vitePlugins.push(
    styleImport({
      resolves: [ElementPlusResolve()],
      // libs: [
      //   // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
      //   {
      //     libraryName: 'element-plus',
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       console.warn(name)
      //       return ``
      //     },
      //   },
      // ],
    }),
  )

  // 自动导入vue3的hooks
  vitePlugins.push(
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 可以选择auto-import.d.ts生成的位置'
      dts: 'typings/auto-import.d.ts'
    }),
  )

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  return vitePlugins
}

export { configProxy }
