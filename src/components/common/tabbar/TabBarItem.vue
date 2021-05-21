<template>
  <div class="tab-bar-item" @click="changeView">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :style="Color"><slot name="text"></slot></div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {

    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    Color() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    changeView() {
      this.$router.replace(this.path).catch(()=>{});
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /*margin-bottom: 2px;*/
  vertical-align: middle;
}
</style>
