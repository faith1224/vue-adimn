<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    <!-- <LoginForm></LoginForm> -->
    <div class="container relative h-full py-2 mx-auto sm:px-10">
      <div class="flex h-full">
        <div
          class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"
        ></div>
        <div
          class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"
        >
          <div
            :class="`${prefixCls}-form`"
            class="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
          >
            <h2
              class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left enter-x"
            >
              登陆
            </h2>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import LoginForm from './LoginForm.vue'
export default defineComponent({
  components: {
    LoginForm,
  },
  setup() {
    const { prefixCls } = useDesign('login')
    return {
      prefixCls,
    }
  },
})
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-login';
@logo-prefix-cls: ~'@{namespace}-app-logo';
@countdown-prefix-cls: ~'@{namespace}-countdown-input';
@dark-bg: #293146;
// 暗色模式
html[data-theme='dark'] {
  // .@{prefix-cls} {
  //   background-color: @dark-bg;
  // }
}
.@{prefix-cls} {
  min-height: 100%;
  overflow: hidden;
  @media (max-width: @screen-xl) {
    background-color: #293146;

    .@{prefix-cls}-form {
      background-color: #fff;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url(@/assets/svg/login-bg.svg);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: '';
    @media (max-width: @screen-xl) {
      display: none;
    }
  }
  input:not([type='checkbox']) {
    min-width: 360px;

    @media (max-width: @screen-xl) {
      min-width: 320px;
    }

    @media (max-width: @screen-lg) {
      min-width: 260px;
    }

    @media (max-width: @screen-md) {
      min-width: 240px;
    }

    @media (max-width: @screen-sm) {
      min-width: 160px;
    }
  }
}
</style>
