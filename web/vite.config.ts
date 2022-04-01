import pkg from './package.json'
import { loadEnv, defineConfig } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './config'
import { configProxy, configVitePlugins } from './config/vite'
import vue from '@vitejs/plugin-vue'
import { generateModifyVars } from './config/modifyVars'

// 异步配置
export default defineConfig(async ({ command, mode }) => {
  // const { dependencies, devDependencies, name, version } = pkg
  const root = process.cwd()
  const env = loadEnv(mode, root)

  // loadEnv读取的布尔类型是一个字符串。此函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env)

  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_USE_MOCK,
    VITE_PROXY,
    VITE_DROP_CONSOLE,
  } = viteEnv
  // plugins: [vue()]
  return {
    // 项目根目录（index.html 文件所在的位置）
    root,
    //
    resolve: {
      // 别名
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
        '@service': `@vue-admin/service`,
      },
    },
    server: {
      host: true,
      proxy: configProxy(VITE_PROXY),
    },
    css: {
      /**
       * less中配置全局变量
       * https://segmentfault.com/a/1190000039736317
       */
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      include: [
        '@vue/shared',
        '@iconify/iconify',
        // '@ant-design/icons-vue',
        // 'ant-design-vue/es/locale/zh_CN',
        // 'ant-design-vue/es/locale/en_US',
        // 'dayjs/locale/en',
        // 'dayjs/locale/zh-cn',
        // 'lodash-es',
      ],
      // exclude: ['vue-demi'],
    },
    plugins: configVitePlugins(viteEnv, command === 'build'),
  }
})
