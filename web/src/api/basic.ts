export enum BaseApi {
  LOGIN = '/login?username=admin&password=admin123&rememberMe=true',
  BASIC = '/gateway/api',
  SERVICE_NAME = 'content',
}

export const loginRequestOptions = {
  replaceDataResponse: {
    message: 'msg',
  },
}
