import { projectSetting, primaryColor } from '@vue-admin/setting'

import { useAppStore } from '@/store/app'
import { deepMerge } from '@vue-admin/utils'

// 初始化项目配置
export function initAppConfigStore(){
  const appStore = useAppStore()
  const projectConfig = appStore.getProjectConfig
  console.log('projectSetting',projectSetting)
  const projCfg = deepMerge(projectSetting, projectConfig || {})

  // console.log('projCfg',projCfg)
  appStore.setProjectConfig(projCfg)
}