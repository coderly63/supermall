<!--  -->
<template>
  <div class="bottom-bar">
    <CheckButton
      class="select-all"
      :isCheck="isSelectAll"
      @click.native="btnClick"
    ></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ $store.getters.totalPrice }}</span>
    <span class="buy-product">去计算({{ $store.getters.cartCount }})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

export default {
  name: "BottomBar",
  data() {
    return {};
  },

  components: {
    CheckButton,
  },

  computed: {
    cartListLength() {
      return this.$store.state.cartList.length;
    },
    cartCheckList() {
      return this.$store.state.cartList.filter((item) => item.check).length;
    },
    isSelectAll() {
      if (this.cartCheckList === 0) return false;
      return this.cartListLength === this.cartCheckList;
    },
  },

  methods: {
    btnClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => (item.check = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.check = true));
      }
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-bar .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-bar .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-bar .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>