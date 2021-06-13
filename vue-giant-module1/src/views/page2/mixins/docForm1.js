import {registerLanguage} from '@/utils/highlight'

export const docForm1Mixin = {
  data() {
    return {
      doForm1: {
        remoteSelect: [
        ]
      }
    }
  },
  created() {
    this.doForm1.remoteSelect.push(
      registerLanguage('js',
        this.$alUtils.alJsonStringify(
          this.formSchema.properties, null, 2
        )
      )
    )
  }
}
