<template>
  <el-scrollbar>
    <button @click="isCollapse = !isCollapse">展开/收缩</button>
    <AppLogo :show-title="!isCollapse"></AppLogo>
    <el-menu default-active="2" :collapse="isCollapse" class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <!-- <el-icon><location /></el-icon> -->
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <!-- <el-icon><icon-menu /></el-icon> -->
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <!-- <el-icon><document /></el-icon> -->
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <!-- <el-icon><setting /></el-icon> -->
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { Icon } from '@/components/Icon'
import { AppLogo } from '@/components/Application'
export default defineComponent({
  components: {
    Icon,
    AppLogo
  },
  name: 'LayoutSideBar',
  setup() {
    const { prefixCls } = useDesign('layout-sideBar')
     const isCollapse = ref(true)
    return {
      prefixCls,
      isCollapse
    }
  },
})
</script>
