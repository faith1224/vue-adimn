/**
 * 获取配置文件的变量名
 * @param env
 */
export const getAppConfigFileName = (env: Record<string, any>) => {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '')
}
