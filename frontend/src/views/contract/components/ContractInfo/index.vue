<template>
  <el-card class="contract-info">
    <el-tabs class="custom-tabs">
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-code" />
          <span>Code</span>
        </div>
        <code-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-hudong" />
          <span>Interactions ({{ interactionsCount }})</span>
        </div>
        <interactions-tab />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import CodeTab from './components/CodeTab';
import InteractionsTab from './components/InteractionsTab';

export default {
  name: 'ContractInfo',
  components: {
    CodeTab,
    InteractionsTab
  },
  props: {
    interactionsCount: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.contract-info {
  margin-top: 16px;
}
</style>
