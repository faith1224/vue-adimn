import type { AppRouteRecordRaw } from '@/router/types'

import { PAGE_NOT_FOUND_NAME, EXCEPTION_COMPONENT } from '../constant'

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  // 将匹配所有内容并将其放在 `$route.params.path` 下
  path: '/:path(.*)*',
  name:'PAGE_NOT_FOUND_NAME',
  meta: {
    title: 'ErrorPage',
    // 隐藏该路由在面包屑上面的显示
    hideBreadcrumb: true,
    // 当前路由不在菜单显示
    hideMenu: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
}
