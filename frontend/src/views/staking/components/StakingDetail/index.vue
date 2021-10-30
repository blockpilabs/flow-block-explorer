<template>
  <el-card class="staking-detail">
    <el-tabs class="custom-tabs">
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-node" />
          <span>Nodes</span>
        </div>
        <nodes-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-zhuanhuan" />
          <span>Changes</span>
        </div>
        <changes-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-lishijilu" />
          <span>History</span>
        </div>
        <history-tab />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import NodesTab from './components/NodesTab';
import ChangesTab from './components/ChangesTab';
import HistoryTab from './components/HistoryTab';

export default {
  name: 'StakingDetail',
  components: {
    NodesTab,
    ChangesTab,
    HistoryTab
  }
};
</script>

<style lang="scss" scoped>
.staking-detail {
  margin-top: 16px;
}
</style>
