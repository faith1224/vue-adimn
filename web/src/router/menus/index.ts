
import type { Menu, MenuModule } from '@/router/types'

import { useAppStoreWithOut } from '@/store/app'

import { PermissionModeEnum } from '@vue-admin/tokens'

const modules = import.meta.globEager('./modules/**/*.ts')

const menuModules: MenuModule[] = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  menuModules.push(...modList)
})

// 获取权限模式
const getPermissionMode = () => {
  const appStore = useAppStoreWithOut()
  return appStore.getProjectConfig.permissionMode
}
// 是否通过后台来动态生成路由表(后台方式控制)
const isBackMode = () => {
  return getPermissionMode() === PermissionModeEnum.BACK
}
// 是否通过用户角色来过滤菜单(前端方式控制)，菜单由路由配置自动生成
const isRouteMappingMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROUTE_MAPPING
}
// 是否通过用户角色来过滤菜单(前端方式控制)，菜单和路由分开配置
const isRoleMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROLE
}

console.log('权限模式',getPermissionMode())