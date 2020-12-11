import Vue from 'vue'
// 导入组件库
import xButton from '../packages'
import App from './App.vue'

// 注册组件库
Vue.use(xButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
