import type {
  ProjectConfig,
  HeaderSetting,
  MenuSetting,
  TransitionSetting,
  MultiTabsSetting,
  BeforeMiniState,
} from '@vue-admin/types'

import { deepMerge } from '@vue-admin/utils'
import { darkMode } from '@vue-admin/setting'
import { defineStore } from 'pinia'
import { pinia } from '@/internal'

import { ThemeEnum } from '@vue-admin/tokens'

interface AppState {
  // 黑暗模式
  darkMode?: ThemeEnum
  // Page loading status
  pageLoading: boolean
  // project config
  projectConfig: ProjectConfig | null
  // 当窗口缩小时，记住一些状态，并在窗口恢复时恢复这些状态
  beforeMiniInfo: BeforeMiniState
}
let timeId: TimeoutHandle
export const useAppStore = defineStore({
  id:'app',
  persist: {
    strategies: [
      {
        paths: ['darkMode', 'projectConfig'],
      },
    ],
  },
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    projectConfig: {} as any,
    beforeMiniInfo: {},
  }),
  getters:{
    getPageLoading(): boolean {
      return this.pageLoading
    },
    getDarkMode(): 'light' | 'dark' | string {
      return this.darkMode || darkMode
    },
    getBeforeMiniInfo(): BeforeMiniState {
      return this.beforeMiniInfo
    },
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig)
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting
    },
  },
  actions:{
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading
    },
    // 设置主题
    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode
    },

    setBeforeMiniInfo(state: BeforeMiniState): void {
      this.beforeMiniInfo = state
    },

    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      console.log(789987)
      this.projectConfig = deepMerge(this.projectConfig || {}, config)
    },
  }
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(pinia)
}
