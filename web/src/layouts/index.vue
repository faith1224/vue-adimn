<template>
  <el-container>
    <el-aside>
      <Sider></Sider>
    </el-aside>
    <el-container>
      <el-header> </el-header>
      <el-main> </el-main>
      <el-footer> </el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import Sider from './sider/LayoutSider.vue'
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Sider,
  },
  setup() {},
})
</script>
