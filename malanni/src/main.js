/*
 * @Description: 页面描述
 * @Author: yangshuwen
 * @Date: 2022-03-10 11:28:32
 * @LastEditors: yanshuwen
 * @astEditTime: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import xinxi from "./api/index.js"
console.log(xinxi.name)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
