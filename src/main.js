import Vue from 'vue'
import App from './App.vue'
import api from './api/index'
import WinDesign from 'win-design'
import router from './router/index' // 引入路由
import 'win-design/lib/themes/default.css' // 默认主题样式文件
import 'win-design/lib/themes/fonts/iconx.js' // 如果你需要使用行业图标

Vue.use(api)
Vue.use(WinDesign)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
