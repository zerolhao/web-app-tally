<template>
  <div class="page-head">
    <!-- 返回按钮，默认显示 -->
    <div v-if="hasBack" class="back add-touch-area">
      <base-icon name="icon-back"></base-icon>{{ backText }}
    </div>
    <!-- 如果不现实返回按钮则显示自定义left -->
    <!-- 添加span占位，防止其它slot左移 -->
    <slot v-else name="left"><span></span></slot>
    <!-- 中间的标题 -->
    <slot></slot>
    <!-- 右侧的其它按钮 -->
    <slot name="right"><span></span></slot>
  </div>
</template>

<script>
export default {
  // name: 'page-head',
  components: {},
  props: {
    hasBack: {
      type: Boolean,
      default: true
    },
    backText: String
  }
}
</script>
<style lang="less">
.page-head {
  width: 100%;
  height: @head-height;
  background: @head-bg;
  color: #fff;
  font-size: 0.186667rem;
  .bottom-shadow;
  // display: grid;
  // grid-template-columns: minmax(0.96rem, 1fr) auto minmax(0.96rem, 1fr);
  // grid-column-gap: 0.16rem;
  // justify-items: center;
  // align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.12rem;
  .add-touch-area {
    padding: 0.08rem;
  }
}
</style>
