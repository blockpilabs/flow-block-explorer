<template>
  <layout-container>
    <div class="accounts">
      <div class="title">
        <div class="legend">
          My Accounts
        </div>
        <div class="add-btn">
          <el-popover
            ref="createPopover"
            placement="bottom-end"
            popper-class="add-account-popper"
            width="700"
            trigger="click"
          >
            <div class="add-account">
              <div class="title">
                New Account
              </div>
              <div class="key">
                key
              </div>
              <el-input
                v-model="publicKey"
                class="create-input"
                type="textarea"
                :rows="2"
                resize="none"
              />
              <el-button
                type="custom"
                class="create-btn"
                @click="handleCreate"
              >
                Create
              </el-button>
            </div>
            <el-button
              slot="reference"
              type="custom"
              size="mini"
              icon="el-icon-plus"
            >
              New Account
            </el-button>
          </el-popover>
        </div>
      </div>
      <el-card class="accounts-card">
        <titan-table
          class="accounts-table"
          :data="list"
          :column="column"
        />
      </el-card>
    </div>
    <send-dialog
      :visible.sync="sendShow"
      :account="selectedAccount"
    />
  </layout-container>
</template>

<script>
import SendDialog from './components/SendDialog';

export default {
  name: 'Accounts',
  components: { SendDialog },
  data() {
    return {
      list: [{
        account: '0x55ad22f01ef568a1',
        balance: 0.9204848
      }],
      sendShow: false,
      selectedAccount: '',
      publicKey: ''
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Account',
          render: (h, ctx) => <router-link class='has-link' to={{ name: 'AccountInfo', params: { accountId: ctx.row.account } }}>{ctx.row.account}</router-link>
        },
        {
          label: 'Balance',
          align: 'right',
          headerAlign: 'right',
          render: (h, ctx) => <div>
              <number-show
                number={ctx.row.balance}
                fontWeight='normal'
              />
              <span class='flow'>FLOW</span>
            </div>
        },
        {
          align: 'right',
          render: (h, ctx) => {
            h = this.$createElement;
            return <div class='control'>
              <div class='send' onClick={this.handleSend.bind(this, ctx.row.account)}>
                <i class='iconfont icon-fasong'></i>
                <span>Send</span>
              </div>
              <el-popover
                ref='delPopover'
                popper-class='del-popover'
                placement='bottom-end'
                width='186'
                trigger='click'>
                <ul class='options'>
                  <li class='option-item' onClick={this.showDel}>Delete account</li>
                </ul>
                <div class='menu' slot='reference'>
                  <i class='iconfont icon-gengduo1'></i>
                </div>
              </el-popover>
            </div>;
          }
        }
      ];
    }
  },
  mounted() {

  },
  methods: {
    handleSend(account) {
      this.selectedAccount = account;
      this.sendShow = true;
    },
    showDel() {
      this.$refs.delPopover.doClose();
      this.$confirm('Delete this account', '', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message.success('Deleted');
      });
    },
    handleCreate() {
      this.$refs.createPopover.doClose();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.accounts {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .legend {
      font-size: 36px;
      color: #333;
      font-weight: bold;
    }
  }
  &-card {
    margin-top: 14px;
  }
  &-table {
    ::v-deep {
      .el-table {
        font-size: 16px;
        .flow {
          color: #00d1b1;
          margin-left: 4px;
        }
        .has-link {
          color: #1161ba;
          font-weight: 500;
        }
        .control {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .send {
            cursor: pointer;
            .iconfont {
              margin-right: 8px;
            }
          }
          .menu {
            cursor: pointer;
            margin-left: 50px;
          }
        }
      }
    }
  }
}

</style>

<style lang="scss">
.del-popover {
  .options {
    margin: 0 -12px;
    .option-item {
      cursor: pointer;
      font-weight: bold;
      padding: 16px 0px;
      text-align: center;
      &:hover {
        background: #ffe1dc;
        color: #f03535;
      }
    }
  }
}
.add-account-popper {
  .add-account {
    padding: 18px;
    .title {
      font-weight: bold;
      font-size: 24px;
    }
    .key {
      margin-top: 50px;
    }
    .create-input {
      margin-top: 10px;
      .el-textarea__inner {
        &:hover, &:focus {
          border-color: #00d1b1
        }
      }
    }
    .create-btn {
      margin-top: 30px;
    }
  }
}
</style>
