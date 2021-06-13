<style lang="scss" scoped>
.page2 {
  box-sizing: border-box; padding: 15px; height: 100%
}
</style>

<template>
  <com-page
    class="page2"
  >
    <el-tabs
      tab-position="left"
      style="height: 100%; overflow: auto"
    >
      <el-tab-pane label="form1">
        <Page2Form1></Page2Form1>
      </el-tab-pane>
    </el-tabs>

    <router-view></router-view>
  </com-page>
</template>

<script>
import Page2Form1 from '@/views/page2/components/Page2Form1'
export default {
  name: 'Page2',
  components: {Page2Form1}
}
</script>
