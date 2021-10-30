<template>
  <layout-container>
    <div class="contract">
      <div class="title">
        <span class="main-title">Contract Details</span>
        <span class="sub-title">
          {{ contract_id }}
        </span>
      </div>
      <el-card class="contract-info-card">
        <titan-form
          :model="form"
          :column="column"
          label-position="left"
          label-width="164px"
        />
      </el-card>
      <contract-info />
    </div>
  </layout-container>
</template>

<script>
import ContractInfo from './components/ContractInfo';
export default {
  name: 'Contract',
  components: { ContractInfo },
  data() {
    return {
      form: {
        account: '',
        identifier: '',
        interactions: 0
      }
    };
  },
  computed: {
    contract_id() {
      return this.$route.params.contract_id;
    },
    column() {
      return [
        {
          label: 'Account',
          render: (h, form) => <span class='has-link' onClick={this.handleClick.bind(this, form.account)}>{form.account}</span>
        },
        {
          prop: 'identifier',
          label: 'Identifier'
        },
        {
          prop: 'interactions',
          label: 'Interactions'
        }
      ];
    }
  },
  mounted() {
    this.form = {
      account: '0xc1e4f4f4c4257510',
      identifier: 'TopShotMarketV3',
      interactions: 4493535
    };
  },
  methods: {
    handleClick(account) {
      console.log(account);
    }
  }
};
</script>

<style lang="scss" scoped>
.contract {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .title {
    color: #333;
    .main-title {
      font-size: 36px;
      font-weight: bold;
      margin-right: 40px;
    }
    .sub-title {
      font-weight: 500;
      font-size: 24px;
    }
  }
  .contract-info-card {
    margin-top: 20px;
    ::v-deep {
      .el-form-item {
        margin-bottom: 0px;
        border-bottom: 1px solid #d8dfde;
      }
      .has-link {
        color: #1161ba;
        cursor: pointer;
      }
    }
  }
}
</style>
