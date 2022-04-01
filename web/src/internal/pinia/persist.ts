import type { PiniaPluginContext } from 'pinia'
import { set, get } from '@vue-admin/utils'

declare module 'pinia' {
  export interface DefineStoreOptions<Id, S, G, A> {
    /**
     * Persist store in storage.
     */
    persist?: PersistOptions
  }
}

export interface PersistStrategy {
  key?: string
  storage?: Storage
  paths?: string[]
  // overwrite?: boolean
}

export interface PersistOptions {
  strategies?: PersistStrategy[]
}

export interface CreateOptions {
  defaultStorage?: Storage
  namespace?: string
}

type Store = PiniaPluginContext['store']
type PartialState = Partial<Store['$state']>

const STORAGE_NAMESPACE = '__STORE__'

export const createPersistPlugin = ({
  defaultStorage = localStorage,
  namespace = STORAGE_NAMESPACE,
}: CreateOptions = {}) => {
  // 获取默认的Storage，如果没有，则默认为全局的Storage
  const getDefaultStorage = (strategy: PersistStrategy) =>
    strategy.storage || defaultStorage

  const getRootStore = (strategy: PersistStrategy) => {
    if (!namespace) {
      return
    }

    const storage = getDefaultStorage(strategy)
    return storage.getItem(namespace) || '{}'
  }

  const updateStorage = (strategy: PersistStrategy, store: Store) => {
    const storage = getDefaultStorage(strategy)
    const storeKey = strategy.key || store.$id
    const rootStore = getRootStore(strategy)

    let state: PartialState = {}
    if (strategy.paths) {
      const partialState = strategy.paths.reduce((finalObj, key) => {
        set(finalObj, key, get(store.$state, key))
        return finalObj
      }, {} as PartialState)
      state = partialState
    } else {
      state = store.$state
    }

    if (!rootStore) {
      storage.setItem(storeKey, JSON.stringify(state))
    } else {
      const _rootStore = rootStore ? JSON.parse(rootStore as string) : {}
      _rootStore[storeKey] = state
      storage.setItem(namespace, JSON.stringify(_rootStore))
    }
  }

  const plugin = ({ options, store }: PiniaPluginContext): void => {
    const { persist } = options

    if (!persist) {
      return
    }

    const defaultState: PersistStrategy[] = [
      {
        key: store.$id,
        storage: localStorage,
      },
    ]

    const strategies = persist?.strategies?.length
      ? persist?.strategies
      : defaultState

    strategies.forEach((strategy) => {
      const storage = getDefaultStorage(strategy)
      const storeKey = strategy.key || store.$id

      let storageResult: string | null = null
      const rootStore = getRootStore(strategy)
      console.log('[pinia]', rootStore)

      storageResult = !rootStore
        ? storage.getItem(storeKey)
        : JSON.parse(rootStore)[storeKey]

      if (storageResult) {
        const result =
          typeof storageResult === 'string'
            ? JSON.parse(storageResult)
            : storageResult
        console.log('[pinia]', store.$state)
        store.$state = {
          beforeMiniInfo: 12312312312,
          darkMode: 12312321312,
        }
        console.log('[pinia]', store.$state, result)
        store.$patch(result)
        console.log('[pinia]', store.$state)
        updateStorage(strategy, store)
      }
    })

    store.$subscribe(() => {
      console.log(1111111)
      strategies.forEach((strategy) => {
        updateStorage(strategy, store)
      })
    })
  }

  return plugin
}
