import type { MenuSetting } from '@vue-admin/types'

import { useAppStore } from '@/store/app'

export function useMenuSetting() {
  const appStore = useAppStore()

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed)

  function setMenuSetting(menuSetting: Partial<MenuSetting>): void {
    appStore.setProjectConfig({ menuSetting })
  }

  return {
    setMenuSetting,

    getCollapsed,
  }
}
