<template>
  <div :class="prefixCls">
    <a href="#/">
      <img src="~@/assets/img/hx-logo.png" />
      <AppLogoCollapseTransition>
        <span :class="getTitleCls" v-if="showTitle">Vue Admin Plus</span>
      </AppLogoCollapseTransition>
    </a>
  </div>
</template>
<script lang="ts">
import AppLogoCollapseTransition from './AppLogoCollapseTransition.vue'
import { useDesign } from '@/hooks/web/useDesign'
export default defineComponent({
  name: 'AppLogo',
  components: {
    AppLogoCollapseTransition,
  },
  props: {
    showTitle: { type: Boolean, default: true },
  },
  setup() {
    const { prefixCls } = useDesign('app-logo')
    const getTitleCls = computed(() => `${prefixCls}__title`)

    return {
      prefixCls,
      getTitleCls,
      // hxLogoSvg,
    }
  },
})
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-app-logo';

.@{prefix-cls} {
  height: 60px;
  text-align: center;
  & img {
    display: inline-block;
    width: 32px;
    height: 32px;
  }
  &__title {
    display: inline-block;
    margin-left: 5px;
    overflow: hidden;
    font-size: 20px;
    line-height: 55px;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 206px;
  }
}
</style>
