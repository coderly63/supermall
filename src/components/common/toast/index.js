import Toast from './Toast.vue'
const obj = {}

obj.install = function (Vue) {
  // console.log("执行了Toast的install函数");
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //创建一个组件对象
  const toast = new toastConstructor()

  //因为vue文件中为template模板 所以需要手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  //将挂载后的元素放入到body中
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}
export default obj