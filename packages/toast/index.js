import toast from './toast.vue'
import './iconfont/iconfont.css'
export default (Vue) => {
  const ToastComp = Vue.extend(toast)
  const typeCate = ['info', 'success', 'danger', 'error']
  function showToast(data) {
    if (!data.duration) data.duration = 2.5e3
    if (!data.type || !typeCate.includes(data.type)) data.type = 'info'
    const toastDom = new ToastComp({
      data() {
        return {
          show: true,
          msg: data.msg,
          type: data.type
        }
      }
    }).$mount(document.createElement('div'))
    document.body.appendChild(toastDom.$el)
    setTimeout(() => {
      toastDom.show = false
    }, data.duration)
  }
  Vue.prototype.$toast = showToast
}
