<!--  -->
<template>
  <div class="good-item">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad" />
    <div class="good-info">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfva">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
  },
};
</script>
<style scoped>
.good-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.good-item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-item img {
  border-radius: 5px;
  width: 100%;
}
.good-info {
  text-align: center;
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
}
.good-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.good-info .cfva {
  position: relative;
}
.good-info .cfva::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>