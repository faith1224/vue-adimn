import type { Ref } from 'vue'
import { ref, unref, computed } from 'vue'

const pagination = <T = any>(
  list: T[],
  pageNo: number,
  pageSize: number,
): T[] => {
  const offset = (pageNo - 1) * Number(pageSize)
  const ret =
    offset + Number(pageSize) >= list.length
      ? list.slice(offset, list.length)
      : list.slice(offset, offset + Number(pageSize))
  return ret
}
export const usePagination = <T = any>(list: Ref<T[]>, pageSize: number) => {
  // 当前页数
  const currentPage = ref(1)
  // 每页显示条目个数
  const pageSizeRef = ref(pageSize)
  const getPaginationList = computed(() => {
    return pagination(unref(list), unref(currentPage), unref(pageSizeRef))
  })
  const getTotal = computed(() => {
    return unref(list).length
  })

  function setCurrentPage(page: number) {
    currentPage.value = page
  }

  function setPageSize(pageSize: number) {
    pageSizeRef.value = pageSize
  }

  return { setCurrentPage, getTotal, setPageSize, getPaginationList }
}