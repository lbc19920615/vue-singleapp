<style lang="scss">
$tag: "cus-detail-dialog";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <el-dialog
    title="标题"
    :visible.sync="innerVisible"
    width="720px"
    v-bind="$attrs"
  >
    <cus-dialog-render v-if="render" :render="render"></cus-dialog-render>
    <slot v-else></slot>
  </el-dialog>
</template>

<script>
import {cusModalVisibleMixin} from '@/components/CusDialog/mixins/cusModalMixin'
import CusDialogRender from '@/components/CusDialog/CusDialogRender'

export default {
  name: 'CusDetailDialog',
  components: {CusDialogRender},
  mixins: [
    cusModalVisibleMixin
  ],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    render: Function
  },
  data() {
    return {}
  }
}
</script>
