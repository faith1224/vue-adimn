<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { namespace } from '@vue-admin/setting'
import { createAppProviderContext } from './useAppContext'
const props = {
  /**
   * class style prefix
   */
  prefixCls: { type: String, default: namespace },
}
export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    // 是否为移动端
    const isMobile = ref(false)
    // const isSetState = ref(false)

    const { prefixCls } = toRefs(props)
    // Inject variables into the global
    createAppProviderContext({ prefixCls, isMobile })
    
    return () => slots.default?.()
  },
})
</script>
