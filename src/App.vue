<template>
  <div id="app">
    <!-- <transition> -->
    <navigation>
      <router-view></router-view>
    </navigation>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  mounted() {
    this.$navigation.on('forward', (to, from) => {
      console.log('forward to: ', to.name, 'form: ', from.name)
    })
    this.$navigation.on('back', (to, from) => {
      console.log('back to: ', to.name, 'form: ', from.name)
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 0.426667rem;
  position: relative;
}
.container {
  width: 100%;
  position: relative;
}
</style>
