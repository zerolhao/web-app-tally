<template>
  <svg
    class="icon base-icon"
    aria-hidden="true"
    :style="{ color, 'font-size': size }"
  >
    <use :href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
  name: 'base-icon',
  props: {
    name: String,
    color: String,
    size: String
  }
}
</script>
<style lang="less">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #455a64;
}
</style>
