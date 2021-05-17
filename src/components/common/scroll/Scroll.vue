<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      mouseWheel: true,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // console.log(this.scroll);

    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("上拉加载更多");
        this.$emit("pullingUp");
        this.scroll.finishPullUp();
      });
    }
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log("执行了刷新函数refresh");
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
</style>