import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types'

// 同步导入modules下面的所有模块
const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

console.log(890, modules)

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: 'login',
  },
}

export const basicRoutes = [
  LoginRoute
]
