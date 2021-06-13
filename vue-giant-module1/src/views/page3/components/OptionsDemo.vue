<style lang="scss">
$tag: "options-demo";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="options-demo">
    <el-row type="flex">
      <el-col :span="12">
        <RemoteOptions
          :request-method="myRequestMethod"
          label-key="name"
          value-key="id"
        ></RemoteOptions>
      </el-col>
      <el-col :span="12">
        <my-highlight
          :language="docOptions.highlights[0].lang"
          :content="docOptions.highlights[0].content"
        ></my-highlight>
      </el-col>
    </el-row>
    <h3>RemoteOptions Attributes</h3>
    <el-row>
      <el-col :span="24">
        <free-table
          border
          stripe
          :data="docOptions.tableData"
          :column="docOptions.basicColumn"
        ></free-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {registerLanguage} from '@/utils/highlight'
import MyHighlight from '@/components/Myhighlight/MyHighlight'
import RemoteOptions from '@/components/FreeForm/RemoteOptions'
import FreeTable from '@/components/FreeTable'

export default {
  name: 'OptionsDemo',
  components: {RemoteOptions, MyHighlight, FreeTable},
  mixins: [
  ],
  data() {
    return {
      docOptions: {
        basicColumn: [
          {label: '参数', prop: 'prop'},
          {label: '说明', prop: 'desc', minWidth: 150},
          {label: '类型', prop: 'type'}
        ],
        tableData: [
          {
            prop: 'label-key',
            desc: 'el-option label 的 key',
            type: 'string'
          },
          {
            prop: 'value-key',
            desc: 'el-option value 的 key',
            type: 'string'
          },
          {
            prop: 'request-method',
            desc: '远程搜索方法',
            type: 'function'
          }
        ],
        highlights: [
          registerLanguage('html', `<RemoteOptions
:request-method="myRequestMethod"
label-key="name"
value-key="id"
></RemoteOptions>`)
        ]
      }
    }
  },
  methods: {
    myRequestMethod() {
      return new Promise(resolve => {
        const options = [
          {
            id: '111',
            name: '1111'
          }
        ]
        setTimeout(() => {
          resolve(options)
        }, 1000)
      })
    }
  }
}
</script>
