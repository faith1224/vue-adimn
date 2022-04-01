<template>
  <el-form :model="formData" size="large" class="p-4 enter-x">
    <el-form-item>
      <el-input v-model="formData.account" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="formData.password"
        placeholder="密码"
        type="password"
        show-password
        clearable
      ></el-input>
    </el-form-item>
    <el-row class="enter-x">
      <el-col :span="12">
        <el-form-item>
          <el-checkbox v-model="checked1" size="large">记住我</el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :style="{ 'text-align': 'right' }">
          <el-button type="text">忘记密码?</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item class="enter-x">
      <el-button class="w-full" size="large" type="primary">登 录</el-button>
    </el-form-item>
    <el-row class="enter-x" :gutter="8">
      <el-col :md="8" :xs="24">
        <el-form-item>
          <el-button class="w-full" size="default" plain>手机登陆</el-button>
        </el-form-item>
      </el-col>
      <el-col :md="8" :xs="24">
        <el-form-item :style="{ 'text-align': 'right' }">
          <el-button class="w-full" size="default" plain>二维码登陆</el-button>
        </el-form-item>
      </el-col>
      <el-col :md="8" :xs="24">
        <el-form-item :style="{ 'text-align': 'right' }">
          <el-button class="w-full" size="default" plain>注册</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-divider class="!text-gray-500"> 其他登录方式 </el-divider>
  </el-form>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    const formData = reactive({
      account: 'admin',
      password: '123456',
    })

    return {
      formData,
    }
  },
})
</script>
