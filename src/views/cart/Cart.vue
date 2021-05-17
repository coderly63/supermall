<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <scroll class="wrapper" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./cartcomps/CartList";
import BottomBar from "./cartcomps/BottomBar.vue";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: { Scroll, NavBar, CartList, BottomBar },
  methods: {},
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>
<style scoped>
.cart {
  height: 100vh;
  position: relative;
}
.wrapper {
  position: absolute;
  bottom: 79px;
  top: 44px;
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
</style>