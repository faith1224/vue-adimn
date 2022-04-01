export * from './httpEnum'
export * from './menuEnum'

export enum ContentLayoutEnum {
  // auto width
  FULL = 'full',
  // fixed width
  FIXED = 'fixed',
}

// 菜单主题枚举
export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

// 设置按钮显示位置
export enum SettingButtonPositionEnum {
  AUTO = 'auto',
  HEADER = 'header',
  FIXED = 'fixed',
}

export enum SessionTimeoutProcessingEnum {
  ROUTE_JUMP,
  PAGE_COVERAGE,
}

/**
 * 权限模式
 */
export enum PermissionModeEnum {
  // role
  ROLE = 'ROLE',
  // black
  BACK = 'BACK',
  // route mapping
  ROUTE_MAPPING = 'ROUTE_MAPPING',
}

//  Route switching animation
export enum RouterTransitionEnum {
  ZOOM_FADE = 'zoom-fade',
  ZOOM_OUT = 'zoom-out',
  FADE_SIDE = 'fade-slide',
  FADE = 'fade',
  FADE_BOTTOM = 'fade-bottom',
  FADE_SCALE = 'fade-scale',
}

// 角色枚举
export enum RoleEnum {
  SUPER = 'super',
  TEST = 'test',
}

export enum ErrorTypeEnum {
  VUE = 'vue',
  SCRIPT = 'script',
  RESOURCE = 'resource',
  AJAX = 'ajax',
  PROMISE = 'promise',
}