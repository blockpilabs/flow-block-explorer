<template>
  <el-card class="epoch-card">
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="epoch-card-item">
          <div class="epoch-item">
            <div class="info">
              <div class="title">
                Total Staked
              </div>
              <div class="value">
                <number-show :number="911319085" />
                <span class="flow">FLOW</span>
              </div>
            </div>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="epoch-card-item">
          <div class="epoch-item">
            <div class="info">
              <div class="title">
                Epoch Payout
              </div>
              <div class="value">
                <number-show :number="1235167" />
                <span class="flow">FLOW</span>
              </div>
            </div>
          </div>
          <horizental-divider />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="epoch-card-item">
          <div class="epoch-info">
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
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import HorizentalDivider from '@/components/HorizentalDivider';
export default {
  name: 'EpochCard',
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
.epoch-card {
  margin-top: 16px;
}
.epoch-card-item {
  position: relative;
  padding-right: 50px;
  .epoch-item {
    display: flex;
    align-items: center;
    .flow {
      color: #00d1b1;
      font-size: 18px;
      margin-left: 4px;
    }
    .title {
      color: #6a6a6a;
      margin-bottom: 16px;
    }
  }
}
.epoch-info {
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
</style>
