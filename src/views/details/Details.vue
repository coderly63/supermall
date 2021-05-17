<!--  -->
<template>
  <div class="details">
    <detail-nav-bar
      ref="nav"
      class="detail-nav"
      @navClick="navClick"
      :currentIndex="currentIndex"
    />
    <scroll class="wrapper" ref="scroll" @scroll="scroll">
      <detail-swiper :top-images="topImages" ref="base"></detail-swiper>
      <detail-base-info :Infos="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommendList" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>
<script>
import DetailNavBar from "./detailcomps/DetailNavBar";
import DetailSwiper from "./detailcomps/DetailSwiper.vue";
import DetailBaseInfo from "./detailcomps/DetailBaseInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./detailcomps/DetailGoodsInfo.vue";
import DetailShopInfo from "./detailcomps/DetailShopInfo.vue";
import DetailParamInfo from "./detailcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./detailcomps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

//导入网络相关
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

import { itemListenerMixin } from "@/common/mixin";
import DetailBottomBar from "./detailcomps/DetailBottomBar.vue";

export default {
  name: "Details",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTop: [],
      currentIndex: 0,
      isShow: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 2.1.获取结果
      const data = res.result;

      // 2.2.获取顶部信息
      this.topImages = data.itemInfo.topImages;

      // 2.3.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 2.4.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 2.5.获取商品信息
      this.detailInfo = data.detailInfo;

      // 2.6.保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 2.7.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
      // console.log(this.recommendList);
    });
    // console.log(this.$route);
  },
  updated() {
    this.themeTop = [];
    this.themeTop.push(0);
    this.themeTop.push(this.$refs.param.$el.offsetTop);
    this.themeTop.push(this.$refs.comment.$el.offsetTop);
    this.themeTop.push(this.$refs.recommend.$el.offsetTop);
    console.log(this.themeTop);
    // console.log("执行了updated函数");
  },
  mixins: [itemListenerMixin],
  methods: {
    navClick(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.themeTop[index], 400);
    },
    scroll(position) {
      let pos = -position.y;
      for (let i = 0; i < this.themeTop.length; i++) {
        if (
          pos >= this.themeTop[i] &&
          ((this.themeTop[i + 1] && pos < this.themeTop[i + 1]) ||
            !this.themeTop[i + 1])
        ) {
          if (this.currentIndex != i) this.currentIndex = i;
        }
      }

      //监听是否显示backtop按钮
      if (pos >= 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    addToCart() {
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.realPrice;
      // 3.添加到Store中
      this.$store.dispatch("addCart", obj).then((res) => {
        // console.log(res);
        console.log(this.$toast);
        this.$toast.show(res, 1500);
      });
    },
  },
};
</script>
<style scoped>
.details {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  /* height: calc(100% - 44px - 49px); */
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>