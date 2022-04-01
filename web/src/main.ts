import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './design/index.less'
import 'virtual:windi-utilities.css'


import 'virtual:svg-icons-register'
import ids from 'virtual:svg-icons-names'
console.log('svg', ids)
// import Iconify from '@iconify/iconify'
// import '@purge-icons/generated'
import App from './App.vue'
import { createApp } from 'vue'
import { pinia } from '@/internal'
import { initAdminModules } from './initAdminModules'
import { initAppConfigStore } from '@/logics/initAppConfig'
import { createBEMPlugin } from '@vue-admin/utils/bem'
import { setupRouter } from '@/router'
// 引入element-plus的样式
// import 'element-plus/theme-chalk/index.css'

const bootstrap = async () => {
  const app = createApp(App)
  app.use(pinia)
  // !注意调用时机
  await initAdminModules()

  // 初始化系统内部配置
  initAppConfigStore()

  // app.use(router)

  app.use(createBEMPlugin('vben'))

  setupRouter(app)

  app.mount('#app')
}

bootstrap()
