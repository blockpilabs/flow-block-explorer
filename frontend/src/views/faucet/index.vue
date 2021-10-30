<template>
  <layout-container>
    <div class="faucet">
      <div class="faucet-content">
        <div class="title">
          Faucet
        </div>
        <div class="label fm-hi">
          Enter your testnet account address
        </div>
        <titan-input
          v-model="address"
          class="addr-input"
          placeholder="Enter your testnet account address"
        />
        <div>
          <el-button type="custom">
            Send me FLOW
          </el-button>
        </div>
      </div>
    </div>
  </layout-container>
</template>

<script>

export default {
  name: 'Faucet',
  data() {
    return { address: '' };
  },
  computed: {},
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.faucet {
  width: 100%;
  height: 548px;
  background: url('~@/assets/images/faucet.png') no-repeat right 40px;
  &-content {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 40px 20px;
    .title {
      font-size: 36px;
      color: #333;
      font-weight: bold;
    }
    .label {
      font-weight: bold;
      margin-top: 50px;
      color: #333;
    }
    .addr-input {
      max-width: 870px;
      margin-top: 12px;
      margin-bottom: 20px;
      ::v-deep .el-input__inner {
        height: 50px;
      }
    }
  }
}

</style>
