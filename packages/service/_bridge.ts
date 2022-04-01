
export interface ContextOptions {
  errorMessageFunction: AnyFunction<any>
  errorModalFunction: AnyFunction<any>
  // getTokenFunction: () => unknown
  // errorLogFunction: (error: any) => void
  // unauthorizedFunction: (msg?: string) => void
  // timeoutFunction: () => void
  // handleErrorFunction: (message?: string, mode?: any) => void
  urlPrefix?: string
  apiUrl?: string
  uploadUrl?: string
}

export let context: ContextOptions = {
  errorMessageFunction: () => {},
  errorModalFunction: () => {},
  // getTokenFunction: () => undefined,
  // unauthorizedFunction: () => {},
  
  // errorLogFunction: () => {},
  // handleErrorFunction: () => {},
  // timeoutFunction: () => {},
  urlPrefix: '',
  apiUrl: '',
}

export const initServiceModule = async (_context: ContextOptions) => {
  context = _context
}
