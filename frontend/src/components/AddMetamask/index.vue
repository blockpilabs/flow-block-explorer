<template>
  <el-button
    class="add-btn add-metamask-btn"
    type="primary"
    @click="handleClick(chain)"
  >
    {{ btnText }}
  </el-button>
</template>

<script>
import metamaskMixin from '@/utils/add-to-metamask';
export default {
  name: 'AddMetamask',
  mixins: [metamaskMixin],
  props: {
    chain: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>

</style>
