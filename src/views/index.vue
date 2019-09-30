<template>
  <div class="container index">
    <div class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <div class="tab-bar">
      <div class="item">
        <router-link :to="{ name: 'fund-account' }">
          <span class="text">账户</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/index/home">
          <span class="text">主页</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/index/user">
          <span class="text">用户</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
<style lang="less">
.index {
  height: 100vh;
  padding-bottom: 1.28rem;
  .main {
    position: relative;
  }
}
.tab-bar {
  height: 1.28rem;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: #607d8b;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  color: rgb(207, 216, 220);
  .top-shadow;

  .item .text {
    color: rgb(207, 216, 220);
  }
  .item .link-active .text {
    color: #fff;
  }
}
</style>
