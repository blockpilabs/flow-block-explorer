<template>
  <el-card class="stat-card">
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="stat-item first-type">
            <i class="iconfont icon-a-004-augmented-reality" />
            <div class="info">
              <div class="title">
                Block
              </div>
              <div class="value">
                <number-show :number="18993856" />
              </div>
            </div>
          </div>
          <div class="stat-item second-type">
            <i class="iconfont icon-a-003-switch" />
            <div class="info">
              <div class="title">
                Transactions
              </div>
              <div class="value">
                <number-show :number="52488808" />
              </div>
            </div>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="stat-item first-type">
            <i class="iconfont icon-a-002-networking" />
            <div class="info">
              <div class="title">
                Accounts
              </div>
              <div class="value">
                <number-show :number="2530970" />
              </div>
            </div>
          </div>
          <div class="stat-item second-type">
            <i class="iconfont icon-a-005-3d-printing" />
            <div class="info">
              <div class="title">
                Contracts
              </div>
              <div class="value">
                <number-show :number="335" />
              </div>
            </div>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="stat-card-chart">
          <div class="title">
            <span class="daily">Daily</span>
            <el-button-group>
              <el-button
                v-for="item in options"
                :key="item.value"
                type="custom"
                size="mini"
                plain
                :class="{ 'is-active': item.value === selected }"
                @click="handleSelect(item.value)"
              >
                {{ item.label }}
              </el-button>
            </el-button-group>
          </div>
          <div class="stat-chart">
            <titan-chart
              :option="option"
              preset="line"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import HorizentalDivider from '@/components/HorizentalDivider';
export default {
  name: 'StatCard',
  components: { HorizentalDivider },
  data() {
    return {
      options: [
        { label: 'Blocks', value: 'blocks' },
        { label: 'Transactions', value: 'transactions' },
        { label: 'Accounts', value: 'accounts' }
      ],
      selected: 'blocks'
    };
  },
  computed: {
    option() {
      return {
        color: '#00d1b1',
        _xAxis: { data: ['14', '15', '16'] },
        _series: [
          { data: [1234, 2222, 2115] }
        ]
      };
    }
  },
  methods: {
    handleSelect(val) {
      if (val === this.selected) return;
      this.selected = val;
      this.$emit('select-type', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.stat-card-item {
  position: relative;
  padding-right: 50px;
  .stat-item {
    display: flex;
    align-items: center;
    .iconfont {
      color: #00d1b1;
      font-size: 28px;
      margin-right: 12px;
    }
    .title {
      color: #6a6a6a;
      margin-bottom: 16px;
    }
    &.first-type {
      padding-bottom: 30px;
      border-bottom: 1px solid #d9d9d9;
    }
    &.second-type {
      padding-top: 30px;
    }
  }
}
.stat-card-chart {
  .daily {
    color: #333333;
    font-weight: bold;
    margin-right: 10px;
  }
  .stat-chart {
    height: 140px;
    width: 100%;
  }
}
</style>
