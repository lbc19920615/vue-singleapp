<style lang="scss">
$tag: "upload-demo";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="upload-demo">
    <el-row type="flex">
      <el-col :span="12">
        <mutli-file-upload></mutli-file-upload>
      </el-col>
      <el-col :span="12">
        <my-highlight
          :language="docInput1.highlights[0].lang"
          :content="docInput1.highlights[0].content"
        ></my-highlight>
      </el-col>
    </el-row>
    <h3>IntergerInput Attributes</h3>
    <el-row>
      <el-col :span="24">
        <free-table
          border
          stripe
          :data="docInput1.tableData"
          :column="docInput1.basicColumn"
        ></free-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {registerLanguage} from '@/utils/highlight'
import MyHighlight from '@/components/Myhighlight/MyHighlight'
import FreeTable from '@/components/FreeTable'
import MutliFileUpload from '@/components/CusUpload/MutliFileUpload'

const input1Mixin = {
  data() {
    return {
      docInput1: {
        basicColumn: [
          {label: '参数', prop: 'prop'},
          {label: '说明', prop: 'desc', minWidth: 150},
          {label: '类型', prop: 'type'}
        ],
        tableData: [
          {
            prop: 'v-model',
            desc: 'v-model',
            type: 'any'
          }
        ],
        highlights: [
          registerLanguage('html', `<interger-input></interger-input>`)
        ]
      }
    }
  }
}

export default {
  name: 'UploadDemo',
  components: {MutliFileUpload, MyHighlight, FreeTable},
  mixins: [
    input1Mixin
  ]
}
</script>
