<!--  -->
<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :itemInfo="item"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: { CartListItem },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>