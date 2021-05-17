<!--  -->
<template>
  <div class="check-button" :class="{ active: isCheck }">
    <img src="~/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid black;
}
.active {
  background-color: red;
  border-color: whitesmoke;
}
</style>