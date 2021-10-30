<template>
  <titan-dialog
    :visible.sync="dialogShow"
    title="Faucet"
    :config="{
      showConfirm: true,
      confirmLoading: confirmLoading,
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      confirmDisabled: cannotAdd
    }"
  >
    Faucet
  </titan-dialog>
</template>

<script>
export default {
  name: 'FaucetDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      confirmLoading: false,
      walletAddr: ''
    };
  },
  computed: {
    dialogShow: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    },
    cannotAdd() {
      return !this.walletAddr;
    }
  }
};
</script>

<style>

</style>
