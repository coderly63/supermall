<!--  -->
<template>
  <div class="detail-swiper">
    <swiper class="d-swiper">
      <swiper-item
        v-for="(item, index) in topImages"
        :key="index"
        class="swiper-item"
      >
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.d-swiper {
  height: 300px;
  overflow: hidden;
}
</style>