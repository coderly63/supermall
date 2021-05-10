<!--  -->
<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  /* 在使用浏览器原生滚动的时候为了防止nav-bar不随浏览器一起滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  z-index: 9;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>