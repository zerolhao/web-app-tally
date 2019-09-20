<template>
  <div class="container fund-account">
    <PageHead class="test">
      <div>我的账户</div>
      <div slot="right" class="add-touch-area">
        <base-icon name="icon-add"></base-icon>
      </div>
    </PageHead>
    Fund-Account
  </div>
</template>
<script>
import PageHead from './../components/page-head'
export default {
  name: 'fund-account',
  components: { PageHead }
}
</script>
<style lang="less">
.fund-account {
}
</style>
