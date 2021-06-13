<style lang="scss">
$tag: "input-demo";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="input-demo">
    <el-row type="flex">
      <el-col :span="12">
        <interger-input v-model="formModel.input1"></interger-input>
        <p>只能输入数字</p>
      </el-col>
      <el-col :span="12">
        <vue-json-editor
          v-model="formModel"
          :expanded-on-start="true"
          :mode="'view'"
          copyable
          boxed
          sort
          :show-btns="false"
        ></vue-json-editor>
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
import VueJsonEditor from 'vue-json-editor'
import {registerLanguage} from '@/utils/highlight'
import MyHighlight from '@/components/Myhighlight/MyHighlight'
import FreeTable from '@/components/FreeTable'
import IntergerInput from '@/components/FreeForm/IntergerInput'

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
  name: 'InputDemo',
  components: {IntergerInput, VueJsonEditor, MyHighlight, FreeTable},
  mixins: [
    input1Mixin
  ],
  data() {
    return {
      formModel: {
        input1: ''
      }
    }
  },
  methods: {
  }
}
</script>
