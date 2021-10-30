<template>
  <layout-container>
    <div class="staking">
      <div class="title">
        Staking Stats
      </div>
      <stat-card />
      <rank-card />
      <breakdown-card />
      <staking-detail />
    </div>
  </layout-container>
</template>

<script>
import StatCard from './components/StatCard';
import RankCard from './components/RankCard';
import BreakdownCard from './components/BreakdownCard';
import StakingDetail from './components/StakingDetail';
export default {
  name: 'Staking',
  components: {
    StatCard,
    RankCard,
    BreakdownCard,
    StakingDetail
  },
  data() {
    return { };
  },
  computed: {},
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.staking {
  width: 100%;
  max-width: 1240px;
  padding: 40px 20px;
  margin: 0 auto;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }
}

</style>
