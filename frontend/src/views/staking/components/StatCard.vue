<template>
  <el-card class="stat-card">
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="label">
            Total Staked
          </div>
          <div class="value">
            <number-show
              :number="632916532.8797225"
              mode="diff"
            />
            <span class="symbol">FLOW</span>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="label">
            Epoch Payout
          </div>
          <div class="value">
            <number-show
              :number="1235167"
              mode="diff"
            />
            <span class="symbol">FLOW</span>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="label">
            Total Nodes
          </div>
          <div class="value">
            <number-show :number="308" />
            <span class="extra">Nodes</span>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card-item">
          <div class="label">
            Total Delegators
          </div>
          <div class="value">
            <number-show :number="12652" />
            <span class="extra">Delegators</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="24"
        class="epoch-info"
      >
        <div class="epoch-start">
          <div class="title">
            EPOCH START
          </div>
          <div class="value">
            2021/09/28
          </div>
        </div>
        <div class="epoch-progress">
          <el-progress
            :show-text="false"
            :stroke-width="10"
            :percentage="70"
            color="#00d1b1"
          />
        </div>
        <div class="epoch-end">
          <div class="title">
            EPOCH END
          </div>
          <div class="value">
            2021/10/05
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
  components: { HorizentalDivider }
};
</script>

<style lang="scss" scoped>
.stat-card {
  margin-top: 20px;
  .stat-card-item {
    position: relative;
    padding: 10px;
    .label {
      color: #6a6a6a;
      margin-bottom: 16px;
    }
    .symbol {
      margin-left: 4px;
      font-size: 18px;
      color: #00d1b1;
    }
    .extra {
      margin-left: 4px;
      font-size: 18px;
    }
  }
  .epoch-info {
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .title {
      color: #6a6a6a;
      margin-bottom: 16px;
    }
    .value {
      font-weight: bold;
      color: #333333;
    }
    .epoch-progress {
      margin-bottom: 4px;
      flex: 1;
      padding: 0px 10px;
    }
  }
}
</style>
