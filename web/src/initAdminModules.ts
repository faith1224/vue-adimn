import { initServiceModule } from '@vue-admin/service/_bridge'

// service
import { useMessage } from '@/hooks/web/useMessage'

export const initAdminModules = async () => {
  await Promise.all([initService(), initDirective()])
}

// 为了解耦 `packages/*` 下面各模块，不再相互依赖
// 如果模块相互依赖严重，则需要对外提供解耦方式，由调用方去进行参数传递
// 各个模块需要提供 `_bridge` 文件作为解耦方式
const initDirective = async () => {}

const initService = async () => {
  const { createMessage, cerateModal } = useMessage()
  await initServiceModule({
    urlPrefix: '',
    apiUrl: '',
    uploadUrl: '',
    errorMessageFunction: createMessage,
    errorModalFunction: cerateModal,
  })
}
