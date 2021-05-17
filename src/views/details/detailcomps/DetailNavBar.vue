<!--  -->
<template>
  <!-- <div class="detail"> -->
  <nav-bar class="detail-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        @click="itemClick(index)"
        :class="{ active: currentIndex === index }"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
  <!-- </div> -->
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  components: { NavBar },
  methods: {
    itemClick(index) {
      this.$emit("navClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.detail {
  background-color: #fff;
}
.center {
  font-size: 14px;
  display: flex;
  justify-content: space-around;
}
.active {
  color: var(--color-high-text);
}
.back {
  text-align: center;
}
.back img {
  vertical-align: middle;
  /* text-align: center; */
}
</style>