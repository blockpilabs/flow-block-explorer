<template>
  <layout-container>
    <div class="account-info">
      <div class="header">
        <div class="title">
          Account Details
        </div>
        <div class="account">
          <span>{{ account }}</span>
          <i
            class="iconfont icon-fuzhi1"
            @click="handleCopy"
          />
        </div>
        <div class="worth fm-hi">
          <span class="balance-label">Balance</span>
          <span class="balance-value">0.92048900</span>
          <span class="flow">FLOW</span>
        </div>
      </div>
      <el-card class="account-card">
        <el-tabs class="custom-tabs">
          <el-tab-pane>
            <div
              slot="label"
              class="tab-header"
            >
              <i class="iconfont icon-flash" />
              <span>Transactions</span>
            </div>
            <transactions-tab />
          </el-tab-pane>
          <el-tab-pane>
            <div
              slot="label"
              class="tab-header"
            >
              <i class="iconfont icon-jiaoyi-02" />
              <span>Transfers</span>
            </div>
            <transfers-tab />
          </el-tab-pane>
          <el-tab-pane>
            <div
              slot="label"
              class="tab-header"
            >
              <i class="iconfont icon-heyue" />
              <span>Keys</span>
            </div>
            <keys-tab />
          </el-tab-pane>
          <el-tab-pane>
            <div
              slot="label"
              class="tab-header"
            >
              <i class="iconfont icon-block" />
              <span>Contracts</span>
            </div>
            <contracts-tab />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </layout-container>
</template>

<script>
import TransactionsTab from './components/TransactionsTab';
import TransfersTab from './components/TransfersTab';
import KeysTab from './components/KeysTab';
import ContractsTab from './components/ContractsTab';

export default {
  name: 'AccountInfo',
  components: {
    TransactionsTab,
    TransfersTab,
    KeysTab,
    ContractsTab
  },
  computed: {
    account() {
      return this.$route.params.accountId;
    }
  },
  methods: {
    handleCopy() {
      this.$copyText(this.account).then(() => {
        this.$message.success('Copied');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.account-info {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #333;
    .title {
      font-size: 36px;
      font-weight: bold;
      margin-right: 40px;
    }
    .account {
      font-size: 24px;
      font-weight: 500;
      font-family: Hind;
      .iconfont {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .worth {
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 24px;
      .balance {
        &-label {
          color: #6a6a6a;
          font-weight: 500;
          font-size: 16px;
        }
        &-value {
          margin: 0px 4px 0px 30px;
          font-weight: bold;
        }
      }
      .flow {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .account-card {
    margin-top: 24px;
  }
}
</style>
