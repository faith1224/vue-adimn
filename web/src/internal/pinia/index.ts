import { createPinia } from 'pinia'
import { createPersistPlugin } from './persist'

import { createStorageName } from '@/internal/config'

const pinia = createPinia()
// 拓展插件
pinia.use(createPersistPlugin({ namespace: createStorageName() }))

export { pinia }
