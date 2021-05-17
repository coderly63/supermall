<!--  -->
<template>
  <div>
    <div class="info-title" v-if="Object.keys(Infos).length != 0">
      {{ Infos.title }}
    </div>
    <div class="info-price">
      <span class="real-price">¥{{ Infos.realPrice }}</span>
      <span class="old-price">{{ Infos.oldPrice }}</span>
      <span class="discount">{{ Infos.discount }}</span>
    </div>
    <div class="info-other" v-if="Infos.columns">
      <span>{{ Infos.columns[0] }}</span>
      <span>{{ Infos.columns[1] }}</span>
      <span>{{ Infos.services[Infos.services.length - 1].name }}</span>
    </div>
    <div class="info-services" v-if="Infos.services">
      <span>
        <img :src="Infos.services[0].icon" alt="" />
        <span>{{ Infos.services[0].name }}</span>
      </span>
      <span>
        <img :src="Infos.services[1].icon" alt="" />
        <span>{{ Infos.services[1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    Infos: {
      type: Object,
      default() {
        return {};
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
.info-title {
  font-weight: bold;
  font-size: 20px;
}
.real-price {
  font-size: 25px;
  color: red;
}
.old-price {
  padding-left: 0.3rem;
  text-decoration: line-through;
  font-size: 10px;
}
.discount {
  margin-left: 0.3rem;
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 12px;
  background-color: var(--color-high-text);
  color: #fff;
  margin-bottom: 2px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  opacity: 0.6;
  margin-top: 1rem;
  font-size: 13px;
  margin-bottom: 10px;
}
.info-services {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.info-services img {
  width: 13px;
  height: 13px;
}
</style>