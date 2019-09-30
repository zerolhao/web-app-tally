<template>
  <div class="container fund-account">
    <PageHead class="test">
      <div>我的账户</div>
      <div slot="right" class="add-touch-area">
        <base-icon name="icon-add"></base-icon>
      </div>
    </PageHead>

    <main>
      <section class="total">
        <h3 class="title">
          <span class="m-r-10">净资产</span>
          <base-icon
            :name="showTotal ? 'icon-xianshi' : 'icon-yincang'"
            @on-lick="changeShowTotal"
          ></base-icon>
          <span @click="toAnalysis" class="analysis">资产分析</span>
        </h3>
        <div class="total__count">***</div>
        <div class="hold">
          <span class="m-r-40">负债：***</span>
          <span>总资产：***</span>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters, mapMutations } from 'vuex'
import PageHead from './../components/page-head'
export default {
  name: 'fund-account',
  components: { PageHead },
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters('fundAccount', { showTotal: 'getShowTotal' })
    // 使用全局 $store 实现
    // showTotal() {
    //   return this.$store.state.fundAccount.showTotal
    // }
  },
  mounted() {
    console.log('store: ', this.$store, this.$store.state.fundAccount.showTotal)
  },
  methods: {
    ...mapMutations('fundAccount', ['_changeShowTotal']),
    changeShowTotal() {
      this._changeShowTotal(!this.showTotal)
      // 使用全局 $store 实现
      // this.$store.commit('fundAccount/_changeShowTotal', !this.showTotal)
    },
    toAnalysis() {
      console.log('toAnalysis')
    }
  }
}
</script>
<style lang="less">
.fund-account {
  > main {
    section {
      padding: 0 0.533334rem;
    }
  }
  .total {
    line-height: 1.2;
    position: relative;
    .p-b(0.32rem);
    > .title,
    > .total__count,
    > .hold {
      .m-t(0.32rem); // 12px;
    }
    .title {
      font-size: 0.426666rem; // 16px
      color: #3e3e3e;
      .m-r-10 {
        .m-r(0.266667rem); // 20px
      }
      .analysis {
        color: #e91e63;
        float: right;
      }
    }
    .total__count {
      font-size: 0.64rem;
      color: #000;
    }
    .hold {
      font-size: 0.32rem;
      color: #979797;
    }
    .m-r-40 {
      .m-r(0.533333rem); // 40px
    }
  }
}
</style>
