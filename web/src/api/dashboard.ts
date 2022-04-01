import { defaultRequest } from '@service'
import { PostloginModel } from './model/dashboard'
import { loginRequestOptions } from './basic'

enum Api {
  GetMenuList = '/getMenuList',
}

export interface MenuListItem {
  id: string
  orderNo: string
  createTime: string
  status: number
  icon: string
  component: string
  permission: string
}
// 登陆
export const loginApi = () =>
  defaultRequest.post<PostloginModel>(
    {
      url: '/login?username=admin&password=admin123&rememberMe=true',
    },
    loginRequestOptions,
  )

export const getMenuList = () =>
  defaultRequest.get<MenuListItem[]>({
    url: '/basic-api/getMenuList',
  })
