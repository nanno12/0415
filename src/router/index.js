import Vue from 'vue'
 import Router from 'vue-router' // 引入vue-router 
 Vue.use(Router) // 在vue中注入Router
 // 导出路由
 export default new Router({
   routes:[
   {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    }
  ]
 });