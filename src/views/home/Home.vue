<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      ref="tabControl1"
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
      v-show="isShow"
      class="tab-control"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-views @featureImageLoad="featureImageLoad"></feature-views>
      <tab-control
        ref="tabControl2"
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="currentPosition <= -1000" />
  </div>
</template>
<script>
// components下的公用组件
import navBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

// home相关组件
import HomeSwiper from "./homecompons/HomeSwiper";
import RecommendView from "./homecompons/RecommendView.vue";
import FeatureViews from "./homecompons/FeatureViews.vue";

// 网络请求相关组件
import { getHomeMultidata, getHomeGoods } from "network/home";

//公用函数
import { itemListenerMixin } from "@/common/mixin";

export default {
  name: "",
  data() {
    return {
      currentPosition: 0,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isShow: false,
      currentPosition: 0,
    };
  },
  mixins: [itemListenerMixin],
  components: {
    navBar,
    HomeSwiper,
    RecommendView,
    FeatureViews,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // console.log(this.$refs.scroll);
  },
  activated() {
    // console.log(this.currentPosition);
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.currentPosition, 0);
  },
  deactivated() {
    // console.log(this.currentPosition);
    this.currentPosition = this.$refs.scroll.scroll.y;
    this.$bus.$off("itemImgLoad", this.monitorImgLoad);
  },
  methods: {
    featureImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    contentScroll(position) {
      this.currentPosition = position.y;
      if (-position.y >= this.tabOffsetTop) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    // 点击事件
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    //网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res);
        // this.$refs.scroll.scroll.refresh();
      });
    },
  },
};
</script>
<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 13;
}
</style>