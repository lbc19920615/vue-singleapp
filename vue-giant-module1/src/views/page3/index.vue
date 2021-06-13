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
          <pre v-highlightjs>
<code
class="hljs"
      :class="doc.remoteSelect[0].cls"
v-html="doc.remoteSelect[0].content"
></code>
          </pre>
        </el-col>
      </el-row>
    </div>
  </com-page>
</template>

<script>

import RemoteOptions from '@/components/FreeForm/RemoteOptions'
import {remoteOptionsDemo1Mixin} from '@/views/page3/mixins/common'
import {docMixin} from '@/views/page3/mixins/doc'
export default {
  name: 'Page3',
  components: {RemoteOptions},
  mixins: [
    remoteOptionsDemo1Mixin,
    docMixin
  ]
}
</script>
