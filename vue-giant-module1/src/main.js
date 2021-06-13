import './public-path'
import './styles/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/permission.js'

import './plugins/element.js'
import './plugins/ncForm'
import './plugins/views'
import {bootstrapLoggerPlugin} from '@/plugins/logger'

const isProduction = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false

// start logger
bootstrapLoggerPlugin(Vue, isProduction)
// end logger

let instance = null

export async function bootstrap({ prototype }) {
  prototype.map(p => {
    Vue.prototype[p.name] = p.value
  })
}

function initStore(props) {
  props.onGlobalStateChange && props.onGlobalStateChange((value, prev) => {})
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name
      }
    })
}

function render(props = {}) {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  // 解决微应用vue devtools挂载失败问题
  if (process.env.NODE_ENV === 'development') {
    // vue-devtools  加入此处代码即可
    const instanceDiv = document.createElement('div')
    instanceDiv.__vue__ = instance
    document.body.appendChild(instanceDiv)
  }
}

export async function mount(props) {
  initStore(props)
  bootstrap(props)
  if (props.data.userInfo.roles) {
    store.commit('permission/SET_ROLES', props.data.userInfo.roles)
  }
  render()
}

export async function unmount() {
  instance.$destroy()
  instance = null
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
