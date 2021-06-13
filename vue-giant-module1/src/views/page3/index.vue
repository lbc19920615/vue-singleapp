<template>
  <com-page>
    <div class="a-layout-row">
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
            :language="doc.remoteSelect[0].lang"
            :content="doc.remoteSelect[0].content"
          ></my-highlight>
        </el-col>
      </el-row>
      <h3>RemoteOptions Attributes</h3>
      <el-row>
        <el-col :span="24">
          <free-table
            border
            stripe
            :data="doc.tableData"
            :column="doc.basicColumn"
          ></free-table>
        </el-col>
      </el-row>
    </div>
  </com-page>
</template>

<script>
import FreeTable from '@/components/FreeTable'
import RemoteOptions from '@/components/FreeForm/RemoteOptions'
import {remoteOptionsDemo1Mixin} from '@/views/page3/mixins/common'
import {docMixin} from '@/views/page3/mixins/doc'
import MyHighlight from '@/components/Myhighlight/MyHighlight'
export default {
  name: 'Page3',
  components: {MyHighlight, RemoteOptions, FreeTable},
  mixins: [
    remoteOptionsDemo1Mixin,
    docMixin
  ]
}
</script>
