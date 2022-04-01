import { GlobEnvConfig } from '@vue-admin/types'
import { warn, getAppConfigFileName } from '@vue-admin/utils'
import { version } from '../../package.json'

export const createStorageKeyPrefix = () => {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppConfig()
  return `${VITE_GLOB_APP_SHORT_NAME}_${import.meta.env.MODE}`.toUpperCase()
}

// Generate cache key according to version
export const createStorageName = () => {
  return `${createStorageKeyPrefix()}${`_${version}`}_`.toUpperCase()
}

export function getAppConfig() {
  const ENV_NAME = getAppConfigFileName(import.meta.env)
  console.log('mode', import.meta.env.MODE)
  const ENV = (
    import.meta.env.DEV
      ? // 获取全局配置(该配置将在打包时独立提取)
        (import.meta.env as any)
      : window[ENV_NAME]
  ) as GlobEnvConfig

  const { VITE_GLOB_APP_SHORT_NAME } = ENV

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME 变量只能为字符/下划线，请在环境变量中修改并重新运行`,
    )
  }

  return ENV
}
