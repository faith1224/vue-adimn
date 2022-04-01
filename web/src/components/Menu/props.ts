import type { Menu } from '@/router/types'

declare type MenuMode = 'horizontal' | 'vertical'
export const basicProps = {
  items: {
    type: Array as PropType<Menu[]>,
    default: () => [],
  },
  // 菜单组件的mode属性
  mode: {
    type: String as PropType<MenuMode>,
    default: 'vertical',
  },
}
