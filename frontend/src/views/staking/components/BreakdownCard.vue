<template>
  <el-card class="breakdown-card">
    <div class="header">
      <div class="title">
        Staking Breakdown
      </div>
      <div class="stat">
        <div class="stat-item node">
          <div class="label">
            Stake from Node
          </div>
          <div class="value">
            <number-show
              :number="465206596.42490428"
              mode="diff"
            />
            <span class="symbol">FLOW</span>
          </div>
          <horizental-divider />
        </div>
        <div class="stat-item delegate">
          <div class="label">
            Delegated
          </div>
          <div class="value">
            <number-show
              :number="167709936.45481825"
              mode="diff"
            />
            <span class="symbol">FLOW</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <titan-table
        :data="list"
        :column="column"
        header-row-class-name="custom-header"
      />
    </div>
  </el-card>
</template>

<script>
import HorizentalDivider from '@/components/HorizentalDivider';

export default {
  name: 'BreakdownCard',
  components: { HorizentalDivider },
  data() {
    return { list: [] };
  },
  computed: {
    column() {
      return [
        {
          label: 'Role',
          prop: 'role'
        },
        {
          prop: 'nodes',
          label: 'Nodes',
          width: '70'
        },
        {
          prop: 'delegators',
          label: 'Delegators',
          width: '100'
        },
        {
          prop: 'total',
          label: 'Total Staked',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.total}
                mode='diff'
                size='16px'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          prop: 'self',
          label: 'Self-Staked',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.total}
                mode='diff'
                size='16px'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          prop: 'delegated',
          label: 'Delegated',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.total}
                mode='diff'
                size='16px'
              />
              <span class='symbol'>FLOW</span>
            </div>
        }
      ];
    }
  },
  mounted() {
    this.list = [
      { role: 'test1', total: 50307938.62523796, nodes: 12, delegators: 14 },
      { role: 'tetest2test2test2test2test2test2test2test2st2', total: 19825182.40437128, nodes: 12, delegators: 14 },
      { role: 'test3', total: 19651397.52198375, nodes: 12, delegators: 14 },
      { role: 'test4', total: 15812325.06159591, nodes: 12, delegators: 14 },
      { role: 'test5', total: 9000000.00000000, nodes: 12, delegators: 14 }
    ];
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.breakdown-card {
  margin-top: 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .stat {
      display: flex;
      align-items: center;
      &-item {
        position: relative;
        display: flex;
        align-items: center;
        .label {
          color: #6a6a6a;
          margin-right: 20px;
        }
        .symbol {
          margin-left: 4px;
          color: #00d1b1;
        }
        &.node {
          padding-right: 25px;
        }
        &.delegate {
          padding-left: 25px;
        }
      }
    }
  }
  .content {
    margin-top: 30px;
    ::v-deep {
      .symbol {
        margin-left: 4px;
        color: #00d1b1;
      }
    }
  }
}
</style>
