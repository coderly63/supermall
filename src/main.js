import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
//注册全局组件
import Toast from 'components/common/toast'
Vue.use(Toast)
//消除移动端点击300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
