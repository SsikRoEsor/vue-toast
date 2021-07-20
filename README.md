# Toast for Vue 2

这是一个基于Vue2的轻量级Toast组件。

## How to use

Install:
```js
// Window
npm install @air-cloud/vue-toast --save

// Mac
sudo npm install @air-cloud/vue-toast --save
```

```js
// main.js
import toast from "@air-cloud/vue-toast"

Vue.use(toast);
```

```js
// xxx.vue

/**
 * 
 * @param {Object} config 配置
 * @param {string} config.type ['success', 'info', 'warning', 'danger']
 * @param {string} config.msg 信息
 * @param [number] config.duration 持续时间 默认2.5s
 */
this.$toast({ type:'success', msg: 'message', duration: 2.5e3 })
```