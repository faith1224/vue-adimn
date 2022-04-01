<template>
  <AppProvider>
    <router-view />
  </AppProvider>

  <!-- <el-config-provider :locale="locale">
    <AppProvider>
      <router-view />
      <HelloWorld />
      
      <IconPicker></IconPicker>
      <IconPicker mode="svg"></IconPicker>
    </AppProvider>
    <Icon icon="activity-source" prefix="icon-park-outline"></Icon>
    <button @click="showTitle = !showTitle">测试点击</button>
  </el-config-provider> -->
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { AppProvider, AppLogo } from '@/components/Application'
import { Icon, IconPicker, SvgIcon } from '@/components/Icon'
import { getAppConfig } from '@/internal/config'
import { usePermissionStore } from '@/store/permission'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
  components: {
    HelloWorld,
    AppProvider,
    AppLogo,
    Icon,
    IconPicker,
    SvgIcon,
  },
  setup() {
    const store = usePermissionStore()
    getAppConfig()
    const showTitle = ref(true)
    // const handleTest = ()=>{

    // }
    return {
      locale: zhCn,
      store,
      showTitle,
    }
  },
})
</script>
