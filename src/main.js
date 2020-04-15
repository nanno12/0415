import Vue from 'vue'
import App from './App.vue'
import WinDesign from 'win-design'
import 'win-design/lib/themes/default.css' // 默认主题样式文件
import 'win-design/lib/themes/fonts/iconx.js' // 如果你需要使用行业图标

Vue.use(WinDesign)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
