export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

export const resultSuccess = <T = Recordable>(
  result: T,
  { message = 'ok' } = {},
) => ({
  code: 0,
  result,
  message,
  type: 'success',
})