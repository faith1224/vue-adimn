import {
  MenuModeEnum,
  MenuTypeEnum,
  TriggerEnum,
  MixSidebarTriggerEnum,
  ThemeEnum,
  CacheTypeEnum,
  SettingButtonPositionEnum,
  PermissionModeEnum,
  SessionTimeoutProcessingEnum,
  ContentLayoutEnum,
  RouterTransitionEnum,
} from '@vue-admin/tokens'

export interface MenuSetting {
  // 背景色
  bgColor: string
  // 是否固定住菜单
  fixed: boolean
  // 菜单折叠
  collapsed: boolean
  // 折叠菜单时候是否显示菜单名
  collapsedShowTitle: boolean
  // 是否可拖拽
  canDrag: boolean
  // 是否显示
  show: boolean
  // Whether to show dom
  hidden: boolean
  // 菜单宽度
  menuWidth: number
  // 菜单模式
  mode: MenuModeEnum
  // 菜单类型
  type: MenuTypeEnum
  // 菜单主题
  theme: ThemeEnum
  // 分割菜单
  split: boolean
  // 顶部菜单布局
  topMenuAlign: 'start' | 'center' | 'end'
  // 折叠触发器的位置
  trigger: TriggerEnum
  // 手风琴模式，只展示一个菜单
  accordion: boolean
  // 在路由切换的时候关闭左侧混合菜单展开菜单
  // 左侧混合菜单模块切换触发方式
  // 是否固定左侧混合菜单
  // mixSideFixed: boolean
}

export interface HeaderSetting {
  // 背景色
  bgColor: string
  // 固定头部
  fixed: boolean
  // 是否显示顶部
  show: boolean
  // 主题
  theme: ThemeEnum
  // 开启锁屏功能
  useLockPage: boolean
  // 全屏显示
  showFullScreen: boolean
  // 显示文件按钮
  showDoc: boolean
  // 显示消息中心按钮
  showNotice: boolean
  // 显示菜单搜索按钮
  showSearch: boolean
}

export interface MultiTabsSetting {
  // 刷新后是否保留已经打开的标签页
  cache: boolean
  // 开启
  show: boolean
  // 开启快速操作
  showQuick: boolean
  // 是否可以拖拽
  canDrag: boolean
  // 是否显示刷新按钮
  showRedo: boolean
  // 是否显示折叠按钮
  showFold: boolean
}

export interface TransitionSetting {
  // 是否打开页面切换动画
  enable: boolean
  // 动画名
  basicTransition: RouterTransitionEnum
  // 是否打开页面切换loading
  openPageLoading: boolean
  //是否打开页面切换顶部进度条
  openNProgress: boolean
}

export interface ProjectConfig {
  // 是否显示配置按钮
  showSettingButton: boolean
  // 是否显示主题切换按钮
  // showDarkModeToggle: boolean
  // 配置按钮显示的位置
  // SettingButtonPositionEnum.AUTO: 自动选择
  // SettingButtonPositionEnum.HEADER: 位于头部
  // SettingButtonPositionEnum.FIXED: 固定在右侧
  settingButtonPosition: SettingButtonPositionEnum
  // 权限模式,默认前端角色权限模式
  // ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）
  // ROLE：前端模式（菜单路由分开）
  permissionMode: PermissionModeEnum
  // 权限相关信息的存储位置,默认存放于localStorage
  permissionCacheType: CacheTypeEnum
  // 会话超时处理
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum
  // 项目主题色
  themeColor: string
  // 网站灰色模式，开放可能的哀悼日期
  grayMode: boolean
  // 色弱模式
  colorWeak: boolean
  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: boolean
  // 主题内容宽度
  contentMode: ContentLayoutEnum
  // 是否显示logo
  showLogo: boolean
  // 是否显示底部信息 copyright
  showFooter: boolean
  // 头部配置
  headerSetting: HeaderSetting
  // 菜单配置
  menuSetting: MenuSetting
  // 多标签
  multiTabsSetting: MultiTabsSetting
  // 动画配置
  transitionSetting: TransitionSetting
  // 是否开启KeepAlive缓存 
  openKeepAlive: boolean
  // 自动锁屏时间
  lockTime: number
  // 显示面包屑
  showBreadCrumb: boolean
  // 显示面包屑图标
  showBreadCrumbIcon: boolean
  // 是否使用全局错误捕获
  useErrorHandle: boolean
  // 是否开启回到顶部
  useOpenBackTop: boolean
  //  是否可以嵌入iframe页面
  canEmbedIFramePage: boolean
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: boolean
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  removeAllHttpPending: boolean
}

export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string
  // 接口url
  VITE_GLOB_API_URL: string
  // 接口url的perfix
  VITE_GLOB_API_URL_PREFIX?: string
  // 项目缩写
  VITE_GLOB_APP_SHORT_NAME: string
  // 上传接口的url
  VITE_GLOB_UPLOAD_URL?: string
}
