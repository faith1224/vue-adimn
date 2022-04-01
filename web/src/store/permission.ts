import type { AppRouteRecordRaw, Menu } from '@/router/types'
import { defineStore } from 'pinia'
import { pinia } from '@/internal'

interface PermissionState {
  // Permission code list
  permCodeList: string[] | number[]
  // 是否添加动态路由
  isDynamicAddedRoute: boolean
  // To trigger a menu update
  lastBuildMenuTime: number
  // 后台菜单列表
  backMenuList: Menu[]
  // 前端菜单列表
  frontMenuList: Menu[]
}
export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: ():PermissionState => ({
    permCodeList: [],
    isDynamicAddedRoute: false,
    lastBuildMenuTime: 0,
    backMenuList: [],
    frontMenuList: [],
  }),
  getters:{
    getPermCodeList(): string[] | number[] {
      return this.permCodeList
    },
    getBackMenuList(): Menu[] {
      return this.backMenuList
    },
    getFrontMenuList(): Menu[] {
      return this.frontMenuList
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute
    },
  },
  actions:{
    // async buildRoutesAction():Promise<AppRouteRecordRaw[]>{

    // }
  }
})

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(pinia)
}
