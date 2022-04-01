<script lang="ts">
import { loginApi } from '@/api/dashboard'
import { useMessage } from '@/hooks/web/useMessage'
import DefaultView from '@/layouts/index.vue'
// import AppLogo from '@/components/Application/src/AppLogo.vue'
export default defineComponent({
  components: {
    DefaultView,
    // AppLogo
  },
  setup() {
    const count = ref(0)
    onMounted(() => {
      loginApi().then((res) => {
        console.warn('===登陆接口===', res)
      })
    })
    const { createMessage, createNotificationy, cerateModal } = useMessage()
    createNotificationy.success({
      title: 'Success',
      message: 'This is a success message',
    })
    createMessage({
      message: 'Warning, this is a warning message.',
      type: 'error',
    })

    const handleCreatModel = () => {
      cerateModal('这是一个错误的提示', '警告⚠️', 'error').then((res) => {
        console.info(res)
      })
    }
    // console.info(2222, import.meta.env)

    const tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const handleFormatter = () => {
      // console.log(row, column, cellValue, index)
      // handleCreatModel('dwqdwq')
      // cellValue = '12312312312231'
    }

    return {
      count,
      tableData,
      handleCreatModel,
      handleFormatter,
    }
  },
})
</script>

<template>
  <DefaultView></DefaultView>
  <!-- <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table> -->

  <!-- <h1>12312312312321</h1>
  <AppLogo></AppLogo>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-button @click="handleCreatModel">测试</el-button> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
