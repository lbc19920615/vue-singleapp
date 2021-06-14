<style lang="scss" scoped>
.page3 {
  box-sizing: border-box; padding: 15px; height: 100%
}
</style>

<template>
  <com-page class="page3">
    <el-tabs
      tab-position="left"
      style="height: 100%; overflow: auto"
    >
      <el-tab-pane label="options">
        <options-demo></options-demo>
      </el-tab-pane>
      <el-tab-pane label="input">
        <input-demo></input-demo>
      </el-tab-pane>
      <el-tab-pane label="dialog">
        <dialog-demo></dialog-demo>
      </el-tab-pane>
      <el-tab-pane label="upload">
        <upload-demo></upload-demo>
      </el-tab-pane>
    </el-tabs>
  </com-page>
</template>

<script>
import OptionsDemo from '@/views/page3/components/OptionsDemo'
import InputDemo from '@/views/page3/components/InputDemo'
import DialogDemo from '@/views/page3/components/DialogDemo'
import UploadDemo from '@/views/page3/components/UploadDemo'
export default {
  name: 'Page3',
  components: {UploadDemo, DialogDemo, InputDemo, OptionsDemo}
}
</script>
