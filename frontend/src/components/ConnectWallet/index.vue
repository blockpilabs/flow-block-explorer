<template>
  <div class="connect-wallet">
    <el-button
      class="connect-btn"
      plain
      @click="handleTry"
    >
      <span
        v-if="account && account.address"
        class="content"
      >
        <svg-icon
          class="wallet-icon"
          icon-class="metamask"
        />
        <span>{{ address | formatWallet }}</span>
      </span>
      <span
        v-else
        class="content"
      >
        <svg-icon
          class="wallet-icon"
          icon-class="metamask"
        />
        <span>Connect Metamask</span>
      </span>
    </el-button>
  </div>
</template>

<script>

export default {
  name: 'ConnectWallet',
  computed: {
    account() {
      return this.$store.state.wallet.account || {};
    },
    address() {
      return (this.account && this.account.address) ? this.account.address : '';
    }
  },
  methods: {
    handleTry() {
      this.$store.dispatch('wallet/tryConnectWallet');
    }
  }
};
</script>

<style lang="scss" scoped>
.connect-wallet {
  display: flex;
  justify-content: flex-end;
  .connect-btn {
    padding: 16px 50px;
    line-height: 1;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .wallet-icon {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
}
</style>
