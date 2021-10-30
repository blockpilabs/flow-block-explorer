<template>
  <el-card class="block-detail">
    <el-tabs class="custom-tabs">
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-star" />
          <span>Collections</span>
        </div>
        <collections-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-block" />
          <span>Block Seals</span>
        </div>
        <seals-tab />
      </el-tab-pane>
      <el-tab-pane>
        <div
          slot="label"
          class="tab-header"
        >
          <i class="iconfont icon-sign" />
          <span>Signatures</span>
        </div>
        <signatures-tab />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import CollectionsTab from './components/CollectionsTab';
import SealsTab from './components/SealsTab';
import SignaturesTab from './components/SignaturesTab';

export default {
  name: 'BlockDetail',
  components: {
    CollectionsTab,
    SealsTab,
    SignaturesTab
  }
};
</script>

<style lang="scss" scoped>
.block-detail {
  margin-top: 16px;
}
</style>
