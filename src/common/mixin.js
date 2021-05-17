import { debounce } from './utils'

export const itemListenerMixin = {
  data() {
    return {
      monitorImgLoad: null,
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 100);
    this.monitorImgLoad = () => {
      // console.log("在home中调用了refresh函数");
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.monitorImgLoad);
    // console.log(this.$refs.tabControl.$el.offsetTop);
    // console.log("调用了refresh函数");
  }
}