import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []

const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name)
    getRouteNames(item.children || [])
  })

getRouteNames(basicRoutes)


// app router
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否禁止末尾斜杠，默认为false
  strict: true,
  // 滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

console.log(111111,router)

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}