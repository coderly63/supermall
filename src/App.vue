<template>
  <div id="app">
    <main-tab-bar v-show="this.$route.path.indexOf('details') === -1" />
    <keep-alive exclude="Details">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/mainTabBar";

export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
