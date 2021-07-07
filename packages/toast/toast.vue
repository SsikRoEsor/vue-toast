<template>
  <div class="toast" v-if="show">
    <i v-if="type == 'info'" class="iconfont-vue-toast icon-vue-toast-info"></i>
    <i
      v-if="type == 'success'"
      class="iconfont-vue-toast icon-vue-toast-success"
    ></i>
    <i
      v-if="type == 'danger'"
      class="iconfont-vue-toast icon-vue-toast-dangerous_1"
    ></i>
    <i
      v-if="type == 'error'"
      class="iconfont-vue-toast icon-vue-toast-error"
    ></i>
    {{ msg }}
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  max-width: 400px;
  padding: 15px 20px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 16px;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  z-index: 9999999;
}
.toast i {
  margin-right: 10px;
}
.toast .icon-vue-toast-error {
  color: #ea4d62;
}
.toast .icon-vue-toast-success {
  color: #1bda88;
}
.toast .icon-vue-toast-dangerous_1 {
  color: #fdbe04;
}
.toast .icon-vue-toast-info {
  color: #909399;
}
</style>
