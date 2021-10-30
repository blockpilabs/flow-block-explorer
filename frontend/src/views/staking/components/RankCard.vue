<template>
  <div class="rank-card">
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card class="stakers">
          <div class="title">
            🐳 Biggest Stakers
          </div>
          <ul class="list">
            <li
              v-for="(item,index) in stakers"
              :key="index"
              class="list-item"
            >
              <div class="ranking">
                {{ index+1 }}
              </div>
              <titan-tooltip :content="item.name">
                <div class="name">
                  {{ item.name }}
                </div>
              </titan-tooltip>
              <div class="amount">
                <number-show
                  :number="item.amount"
                  mode="diff"
                  little-size="12px"
                  size="16px"
                />
                <span class="symbol">FLOW</span>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="nodes">
          <div class="title">
            🎉 Most Popular Nodes
          </div>
          <ul class="list">
            <li
              v-for="(item,index) in nodes"
              :key="index"
              class="list-item"
            >
              <div class="ranking">
                {{ index+1 }}
              </div>
              <titan-tooltip :content="item.name">
                <div class="name">
                  {{ item.name }}
                </div>
              </titan-tooltip>
              <div class="amount">
                <number-show
                  :number="item.amount"
                  mode="diff"
                  little-size="12px"
                  size="16px"
                />
                <span class="extra">Delegators</span>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'RankCard',
  data() {
    return {
      stakers: [],
      nodes: []
    };
  },
  mounted() {
    this.stakers = [
      { name: 'test1', amount: 50307938.62523796 },
      { name: 'tetest2test2test2test2test2test2test2test2st2', amount: 19825182.40437128 },
      { name: 'test3', amount: 19651397.52198375 },
      { name: 'test4', amount: 15812325.06159591 },
      { name: 'test5', amount: 9000000.00000000 }
    ];
    this.nodes = [
      { name: 'test1', amount: 50307 },
      { name: 'test2', amount: 19825 },
      { name: 'test3', amount: 19651 },
      { name: 'test4', amount: 15812 },
      { name: 'test5', amount: 9000 }
    ];
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.rank-card {
  margin-top: 16px;
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .list {
    &-item {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .ranking {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background-color: #ffeed0;
        border-radius: 50%;
        text-align: center;
        line-height: 24px;
        color: #f38832;
      }
      .name {
        flex: 1;
        padding: 0 10px;
        @include utils-ellipsis(1);
      }
      .amount {
        flex-shrink: 0;
        .symbol {
          margin-left: 4px;
          color: #00d1b1;
        }
        .extra {
          margin-left: 4px;
          color: #8d8d8d;
        }
      }
    }
  }
}
</style>
