<template>
  <div class="page1 free-table">
    <div class="example-table-box">
      <p>基础表格</p>
      <free-table
        border
        stripe
        :data="tableData"
        :column="basicColumn"
      ></free-table>
    </div>
  </div>
</template>

<script>
import FreeTable from '@/components/FreeTable'
import { TableDataMixin } from './table'

export default {
  name: 'Page1',
  components: {
    FreeTable
  },
  mixins: [TableDataMixin],
  data() {
    return {
      columnsProps: {
        width: 'auto'
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      },
      editForm: {},
      dialogVisible: false
    }
  }
}
</script>
