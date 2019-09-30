<template>
  <div id="app">
    <!-- <transition> -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- </transition> -->
  </div>
</template>

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
