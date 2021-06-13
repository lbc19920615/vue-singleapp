<template>
  <div>
    <RemoteOptions
      :request-method="myRequestMethod"
      label-key="name"
      value-key="id"
    ></RemoteOptions>
  </div>
</template>

<script>
import RemoteOptions from '@/components/FreeForm/RemoteOptions'
import {remoteOptionsDemo1Mixin} from '@/views/page3/mixins/common'
export default {
  name: 'Page3',
  components: {RemoteOptions},
  mixins: [
    remoteOptionsDemo1Mixin
  ]
}
</script>
