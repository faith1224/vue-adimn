<template>
  <el-input
    :class="prefixCls"
    v-model:value="currentSelect"
    disabled
    placeholder="点击选择图标"
  >
    <template #append>
      <el-popover :width="300" trigger="click" :popper-class="popoverCls">
        <template #reference>
          <span style="cursor: pointer" v-if="isSvgMode && currentSelect">
            <SvgIcon :name="currentSelect" />
          </span>
          <Icon
            style="cursor: pointer"
            :icon="currentSelect || 'ion:apps-outline'"
            v-else
          />
        </template>
        <div :class="`${popoverCls}-header`">
          <el-input
            v-model="input1"
            placeholder="搜索图标"
            clearable
            @change="debounceHandleSearchChange"
          />
        </div>
        <el-scrollbar height="220px">
          <ul :class="`${popoverCls}-wrap`" v-if="getPaginationList.length">
            <li
              v-for="icon in getPaginationList"
              :key="icon"
              :class="[
                `${popoverCls}-wrap__item`,
                currentSelect === icon && `${popoverCls}-border`,
              ]"
              @click="handleClick(icon)"
            >
              <SvgIcon v-if="isSvgMode" :name="icon" />
              <Icon :icon="icon" v-else />
            </li>
          </ul>
          <el-empty :image-size="70" description="暂无图标" v-else></el-empty>
        </el-scrollbar>
        <div :class="`${popoverCls}-footer`">
          <el-pagination
            small
            background
            :page-size="pageSize"
            :pager-count="5"
            layout="prev, pager, next"
            :total="getTotal"
            @current-change="setCurrentPage"
          >
          </el-pagination>
        </div>
      </el-popover>
    </template>
  </el-input>
</template>
<script lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import Icon from './Icon.vue'
import SvgIcon from './SvgIcon.vue'
import iconsData from '../data/icons.data'
// import { useMessage } from '@/hooks/web/useMessage'
import { usePagination, useDebounceFn } from '@vue-admin/hooks'
import svgIcons from 'virtual:svg-icons-names'

function getIcons() {
  const data = iconsData as any
  const prefix: string = data?.prefix ?? ''
  let result: string[] = []
  if (prefix) {
    result = (data?.icons ?? []).map((item) => `${prefix}:${item}`)
  } else if (Array.isArray(iconsData)) {
    result = iconsData as string[]
  }
  return result
}

function getSvgIcons() {
  return svgIcons.map((icon) => icon.replace('icon-', ''))
}

export default defineComponent({
  name: 'IconPicker',
  components: {
    Icon,
    SvgIcon,
  },
  props: {
    value: { type: String },
    width: { type: String, default: '100%' },
    pageSize: { type: Number, default: 140 },
    copy: { type: Boolean },
    mode: {
      type: String,
      default: 'iconify',
      validator: (v: string) => ['svg', 'iconify'].includes(v),
    },
  },
  setup(props) {
    const input1 = ref('')
    const { prefixCls } = useDesign('icon-picker')
    const popoverCls = computed((): string => {
      return prefixCls + '-popover'
    })
    const isSvgMode = props.mode === 'svg'
    const icons = isSvgMode ? getSvgIcons() : getIcons()

    const currentSelect = ref('')
    const currentList = ref(icons)

    const { getPaginationList, getTotal, setCurrentPage } = usePagination(
      currentList,
      props.pageSize,
    )

    watchEffect(() => {
      currentSelect.value = props.value as string
    })

    function handleClick(icon: string) {
      currentSelect.value = icon
      // if (props.copy) {
      //   clipboardRef.value = icon
      //   if (unref(isSuccessRef)) {
      //     createMessage.success(t('component.icon.copy'))
      //   }
      // }
    }

    function handleSearchChange(value: string | number) {
      console.log(value)
      // const value = e.target.value
      if (!value) {
        setCurrentPage(1)
        currentList.value = icons
        return
      }
      currentList.value = icons.filter((item) => item.includes(value))
    }

    const debounceHandleSearchChange = useDebounceFn(handleSearchChange, 100)
    return {
      prefixCls,
      popoverCls,
      input1,
      currentSelect,
      isSvgMode,
      getPaginationList,
      getTotal,
      setCurrentPage,
      handleClick,
      debounceHandleSearchChange,
    }
  },
})
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-icon-picker';
.@{prefix-cls} {
  &-popover {
    padding: 0 !important;
    &-header {
      padding: 5px 16px 4px;
      border-bottom: 1px solid #f0f0f0;
    }
    &-footer {
      display: flex;
      justify-content: center;
      padding: 4px 0 5px;
      border-top: 1px solid #f0f0f0;
    }
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      padding: 0 8px 8px 8px;
      box-sizing: border-box;
      &__item {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 6px 6px 0 0;
        border: 1px solid #e5e7eb;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          border-color: var(--el-color-primary);
        }
      }
    }
    &-border {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
