<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  font-size: 12px;
  div {
    width: 750px;
  }
}
</style>
