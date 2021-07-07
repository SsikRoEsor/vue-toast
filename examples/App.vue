<template>
  <div id="vue-toast">
    <button @click="showToast('info')">showToast(info)</button>
    <button @click="showToast('success')">showToast(success)</button>
    <button @click="showToast('danger')">showToast(danger)</button>
    <button @click="showToast('error')">showToast(error)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "vue-toast"
    };
  },
  methods: {
    showToast(type) {
      this.$toast({ type, msg: "测试", duration: 20000 });
    }
  }
};
</script>

<style></style>
