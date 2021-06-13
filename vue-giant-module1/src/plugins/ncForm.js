import Vue from 'vue'
import vueNcform from '@ncform/ncform/dist/vueNcform'
import ncformStdComps from '@ncform/ncform-theme-elementui'
import ncformCusComps from '@/components/NcFormCustom'
import ncformCusRules from '@/components/NcFormRules'

Vue.use(vueNcform, {
  extComponents: {
    ...ncformStdComps,
    ...ncformCusComps
  },
  extRules: [
    ncformCusRules
  ]
})
