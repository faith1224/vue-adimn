import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { RoleEnum } from '@vue-admin/tokens'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success'
  content?: string
  dot?: boolean
}
export interface Menu {
  //  菜单名
  name: string
  // 菜单图标,如果没有，则会尝试使用route.meta.icon
  icon?: string
  // 菜单路径
  path: string
  // 路径包含参数，自动赋值
  paramPath?: string
  // 是否禁用
  disabled?: boolean
  // 子菜单
  children?: Menu[]
  // 排序字段，数值越大，排序越靠后
  orderNo?: number

  roles?: RoleEnum[]

  meta?: Partial<RouteMeta>
  // 菜单标签设置
  tag?: MenuTag
  // 是否隐藏菜单
  hideMenu?: boolean
}

export interface MenuModule {
  orderNo?: number
  menu: Menu
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw
