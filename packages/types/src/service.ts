export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export type RequestResult = Record<string, any>

export interface RequestOptions {
  // post请求的时候添加参数到url
  joinParamsToUrl?: boolean
  // 格式化提交参数时间
  formatDate?: boolean
  // 是否处理请求结果
  isTransformResponse?: boolean
  // 是否返回本机响应头
  // 例如:当你需要获取响应头时使用这个属性
  isReturnNativeResponse?: boolean
  // 是否向url添加prefix
  joinPrefix?: boolean
  // 接口地址，如果为空，使用默认的apiUrl
  apiUrl?: string | (() => string)
  // url添加的prefix
  urlPrefix?: string | (() => string)
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode
  // Whether to add a timestamp
  joinTime?: boolean
  ignoreCancelToken?: boolean
  // Whether to send token in header
  withToken?: boolean
  replaceDataResponse?: {
    code?: string
    result?: string
    message?: string
  }
}

export interface RequestUploadFileOptions {
  data?: Record<string, any>
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}
