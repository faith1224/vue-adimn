import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'

import type { Action } from 'element-plus'
import { Notify } from 'element-plus/lib/components/notification/src/notification'
type MessageType = '' | 'success' | 'warning' | 'info' | 'error'

function cerateModal(title: string, message: string, type?: MessageType) {
  return new Promise((resolve) => {
    ElMessageBox.alert(message, title, {
      confirmButtonText: '知道了',
      type,
      center: true,
      callback: (action: Action) => {
        resolve(action)
      },
    })
  })
}
/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: ElMessage,
    createNotificationy: ElNotification as Notify,
    cerateModal,
  }
}
