<template>
  <layout-container>
    <div class="home">
      <div class="banner" />
      <div class="home-wrapper">
        <div class="home-title">
          FLOW EXPLORER
        </div>
        <div class="home-search">
          <titan-input
            v-model="searchParam"
            class="search-input"
            placeholder="Height / Address / Transaction"
          >
            <i
              slot="append"
              class="iconfont icon-sousuo search-icon"
            />
          </titan-input>
        </div>
        <div class="home-stat">
          <stat-card />
          <epoch-card />
        </div>
        <div class="home-list">
          <el-row :gutter="16">
            <el-col :span="12">
              <blocks-card />
            </el-col>
            <el-col :span="12">
              <transactions-card />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </layout-container>
</template>

<script>
import StatCard from './components/StatCard';
import EpochCard from './components/EpochCard';
import TransactionsCard from './components/TransactionsCard';
import BlocksCard from './components/BlocksCard';
export default {
  name: 'Home',
  components: {
    StatCard,
    EpochCard,
    TransactionsCard,
    BlocksCard
  },
  data() {
    return { searchParam: '' };
  },
  computed: {},
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.home {
  width: 100%;
  .banner {
    width: 100%;
    height: 264px;
    background: url('~@/assets/images/banner.jpg') no-repeat center center;
    background-size: 100%;
  }
  &-wrapper {
    position: relative;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
    top: -220px;
  }
  &-title {
    font-size: 36px;
    text-align: center;
    color: #1f2e2d;
    font-weight: bold;
  }
  &-search {
    margin-top: 30px;
    margin-bottom: 60px;
    text-align: center;
  }
  .search-input {
    max-width: 440px;
    ::v-deep {
      .el-input-group__append {
        overflow: hidden;
        cursor: pointer;
        height: 40px;
        background: #000000;
        color: #ffffff;
        width: 50px;
        padding: 5px 15px;
        border-color: #000000;
        .search-icon {
          font-size: 20px;
        }
      }
    }
  }
  &-list {
    margin-top: 16px;
  }
}

</style>
