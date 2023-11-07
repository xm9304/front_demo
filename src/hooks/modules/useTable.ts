import type { TableInstance } from '@arco-design/web-vue'
import { Modal, Message } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'

interface Options<T> {
  formatResult?: (data: T[]) => any
  onSuccess?: () => void
  immediate?: boolean
  rowKey?: keyof T
}

type PaginationParams = { page: number; size: number }
type Api<T> = (params: PaginationParams) => Promise<ApiRes<ApiListData<T[]>>>

export default function <T>(api: Api<T>, options?: Options<T>) {
  const { formatResult, onSuccess, immediate, rowKey } = options || {}
  const { pagination, setTotal } = usePagination(() => getTableData())
  const loading = ref(false)
  const tableData = ref<T[]>([])

  const getTableData = async () => {
    try {
      loading.value = true
      const res = await api({ page: pagination.current, size: pagination.pageSize })
      tableData.value = formatResult ? formatResult(res.data.list) : res.data.list
      setTotal(res.data.total)
      onSuccess && onSuccess()
    } catch (error) {
    } finally {
      loading.value = false
    }
  }

  // 是否立即出发
  const isImmediate = immediate ?? true
  isImmediate && getTableData()

  // 多选
  const selectKeys = ref<(string | number)[]>([])
  const select: TableInstance['onSelect'] = (rowKeys) => {
    selectKeys.value = rowKeys
  }

  // 全选
  const selectAll: TableInstance['onSelectAll'] = (checked) => {
    const key = rowKey ?? ('id' as keyof T)
    selectKeys.value = checked ? tableData.value.map((i) => i[key] as string | number) : []
  }

  // 删除
  const handleDelete = async <T>(
    deleteApi: () => Promise<ApiRes<T>>,
    options?: { title?: string; content?: string; successTip?: string; showModal?: boolean }
  ): Promise<boolean | undefined> => {
    const flag = options?.showModal ?? true // 是否显示对话框
    if (!flag) {
      try {
        const res = await deleteApi()
        if (res.success) {
          Message.success(options?.successTip || '删除成功！')
          selectKeys.value = []
          getTableData()
        }
        return res.success
      } catch (error) {
        return false
      }
    }
    Modal.warning({
      title: options?.title || '提示',
      content: options?.content || '是否确认删除？',
      hideCancel: false,
      maskClosable: false,
      onBeforeOk: async () => {
        try {
          const res = await deleteApi()
          if (res.success) {
            Message.success(options?.successTip || '删除成功！')
            selectKeys.value = []
            getTableData()
          }
          return res.success
        } catch (error) {
          return false
        }
      }
    })
  }

  return { loading, tableData, getTableData, pagination, selectKeys, select, selectAll, handleDelete }
}
