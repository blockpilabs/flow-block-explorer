<template>
  <titan-dialog
    class="send-dialog"
    width="630px"
    :visible.sync="dialogShow"
    title="Make a Transaction"
    :destroy-on-close="true"
    :show-close="false"
    :config="{
      showConfirm: true,
      showCancel: false,
      confirmText: 'Send',
      confirmType: 'custom',
      footerAlign: 'left',
      confirmLoading: confirmLoading
    }"
    @open="handleOpen"
    @confirm="handleSend"
  >
    <div class="from-account">
      <div class="label">
        From
      </div>
      <div class="value">
        {{ account }}
      </div>
    </div>
    <titan-form
      :model="form"
      :column="column"
      class="send-form"
    />
    <div class="balance">
      <span class="balance-text">
        Balance: {{ balance }}
      </span>
      <span class="flow">FLOW</span>
    </div>
    <div class="fee">
      <span class="fee-text">
        Fee: {{ fee }}
      </span>
      <span class="flow">FLOW</span>
    </div>
  </titan-dialog>
</template>

<script>
export default {
  name: 'SendDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    account: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      toAccount: '',
      amount: undefined,
      confirmLoading: false,
      balance: 0,
      fee: 0,
      form: {
        toAccount: '',
        amount: undefined
      }
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
    cannotSend() {
      return !this.toAccount;
    },
    column() {
      return [
        {
          prop: 'toAccount',
          rules: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          render: (h, form) => <div class='to-account input-item'>
                    <el-input
                      v-model={form.toAccount}
                      placeholder='Address'
                    >
                      <div
                        slot='prepend'
                        class='to-prepend'
                      >
                        To
                      </div>
                    </el-input>
                  </div>
        },
        {
          prop: 'amount',
          render: (h, form) => <div class='amount input-item'>
                    <el-input
                      v-model={form.amount}
                      placeholder='Transfer amount'
                    >
                      <div
                        slot='prepend'
                        class='amount-prepend'
                      >
                        Send
                      </div>
                      <div
                        slot='append'
                        class='amount-append'
                      >
                        <span class='flow'>FLOW</span>
                      </div>
                    </el-input>
                  </div>
        }
      ];
    }
  },
  methods: {
    handleOpen() {
      this.toAccount = '';
      this.amount = undefined;
    },
    handleSend() {
      console.log('send');
      this.dialogShow = false;
    }
  }
};
</script>

<style lang="scss">
.send-dialog {
  font-family: Hind;
  .el-dialog__body {
    color: #333;
  }
  .el-dialog__title {
    font-size: 24px;
  }
  .from-account {
    margin-bottom: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    .label {
      width: 90px;
      text-align: center;
      font-weight: bold;
    }
    .value {
      font-size: 24px;
    }
  }
  .send-form {
    .el-form-item.is-error {
      .el-input__inner {
        border-left-color: #ff3761;
        &:focus, &:hover {
          border-left-color: #f8f8f8;
        }
      }
    }
  }
  .input-item {
    .el-input-group__prepend {
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 90px;
      color: #333;
      font-weight: bold;
      font-size: 16px;
      background: #f8f8f8;
    }
    .el-input__inner {
      border-left-color: #f8f8f8;
      background: #f8f8f8;
      &:focus, &:hover {
        border-color: #d8dfde;
        border-left-color: #f8f8f8;
      }
    }
    .el-input-group__append {
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      background: #f8f8f8;
      .flow {
        color: #00d1b1;
        font-size: 16px;
        font-weight: bold;
      }
    }
    &.amount {
      .el-input__inner {
        border-right-color: #f8f8f8;
      }
    }
  }
  .balance, .fee {
    text-align: right;
    color: #8d8d8d;
    .flow {
      color: #00d1b1;
    }
  }
}
</style>
