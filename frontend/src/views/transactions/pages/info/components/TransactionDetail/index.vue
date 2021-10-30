<template>
  <el-card class="block-detail">
    <el-tabs class="custom-tabs">
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-code" />
          <span>Script</span>
        </div>
        <script-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-history" />
          <span>Events</span>
        </div>
        <events-tab />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import ScriptTab from './components/ScriptTab';
import EventsTab from './components/EventsTab';

export default {
  name: 'TransactionDetail',
  components: {
    ScriptTab,
    EventsTab
  }
};
</script>

<style lang="scss" scoped>
.block-detail {
  margin-top: 16px;
}
</style>
