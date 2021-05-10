<!--  -->
<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
  text-align: center;
}
.recommend-item {
  text-align: center;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
</style>