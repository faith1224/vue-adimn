/**
 * 用于解析.env.development代理配置
 */
import type { ProxyOptions } from 'vite'

/**
 * 请根据代理列表进行配置
 * @param proxyList
 */
export const configProxy = (proxyList: [string, string][] = []) => {
  const proxy: Record<string, ProxyOptions> = {}
  for (const [prefix, target] of proxyList) {
    const isHttps = /^https:\/\//.test(target)
    // https://github.com/http-party/node-http-proxy#options
    proxy[prefix] = {
      target: target,
      // 将主机报头的来源更改为目标URL
      changeOrigin: true,
      // 代理websockets
      ws: true,
      // 重写path
      // rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // 判断是否是https
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return proxy
}
