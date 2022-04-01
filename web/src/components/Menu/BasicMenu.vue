<template>
  <el-menu
    :mode="mode"
    :collapse="getCollapse"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
  >
  </el-menu>
</template>
<script lang="ts">
import { MenuState } from './type'
import { basicProps } from './props'
import { MenuModeEnum, MenuTypeEnum } from '@vue-admin/tokens'
import { useMenuSetting } from '@/hooks/setting/useMenuSetting'

export default defineComponent({
  props: basicProps,
  setup(props) {
    const menuState = reactive<MenuState>({
      defaultActive: '',
      defaultOpeneds: [],
    })

    const { getCollapsed } = useMenuSetting()

    // 获取水平折叠状态
    const getCollapse = computed(() => {
      const isVertical = props.mode === MenuModeEnum.VERTICAL

      let collapse = false
      if (isVertical) {
        collapse = unref(getCollapsed)
      }
      return collapse
    })

    return {
      getCollapse,
      ...toRefs(menuState),
    }
  },
})
</script>
