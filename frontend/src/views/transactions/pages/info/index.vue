<template>
  <layout-container>
    <div class="transaction-info">
      <div class="title">
        Transaction Details
      </div>
      <el-card class="transaction-info-card">
        <titan-form
          :model="form"
          :column="column"
          label-position="left"
          label-width="164px"
        />
      </el-card>
      <transaction-detail />
    </div>
  </layout-container>
</template>

<script>
import TransactionDetail from './components/TransactionDetail';
export default {
  name: 'TransactionInfo',
  components: { TransactionDetail },
  data() {
    return {
      form: {
        height: 0,
        id: '',
        parent_id: '',
        next_id: '',
        time: 0,
        status: '',
        proposer: '',
        payer: '',
        authorizers: [],
        transfers: '',
        fee_limit: 0
      }
    };
  },
  computed: {
    transactionId() {
      return this.$route.params.transactionId || '';
    },
    column() {
      return [
        {
          prop: 'id',
          label: 'ID'
        },
        {
          prop: 'status',
          label: 'Status',
          render: (h, form) => <div>
              <i class='iconfont icon-duigouxiao'></i>
              <span>Success</span>
            </div>
        },
        {
          label: 'Height',
          render: (h, form) => <div class='transaction-height-cell'>
              <span class='transaction-height'>{form.height}</span>
            </div>
        },
        {
          prop: 'proposer',
          label: 'Proposer',
          render: (h, form) => <div class='has-link' onClick={this.handleHash.bind(this, form.proposer)}>
              {form.proposer}
            </div>
        },
        {
          prop: 'payer',
          label: 'Payer',
          render: (h, form) => <div class='has-link' onClick={this.handleHash.bind(this, form.payer)}>
              {form.payer}
            </div>
        },
        {
          prop: 'authorizers',
          label: 'Authorizers',
          render: (h, form) => <div class='has-link' onClick={this.handleHash.bind(this, form.authorizers)}>
              {form.authorizers}
            </div>
        },
        {
          prop: 'transfers',
          label: 'Transfers',
          render: (h, form) => <div>
              <span class='extra'>From</span>
              <span class='has-link has-margin'>{form.transfers}</span>
              <span class='extra'>To</span>
              <span class='has-link has-margin'>{form.transfers}</span>
              <span class='extra'>For</span>
              <number-show number={500.0001} fontWeight='normal' class='has-margin'></number-show>
              <span class='has-link'>{form.contract}</span>
            </div>
        },
        {
          prop: 'time',
          label: 'Timestamp',
          render: (h, form) => <div class='timestamp'>
              <i class='iconfont icon-shijian_o'></i>
              <span>{this.$dayjs(form.time).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
        },
        {
          prop: 'fee_limit',
          label: 'Fee limit',
          render: (h, form) => <number-show number={form.fee_limit} fontWeight='normal'></number-show>
        }
      ];
    }
  },
  mounted() {
    this.form = {
      height: 18826435,
      id: '0xfa242d67c037f56b0f917d99d6d8311bd08045eeed3a30336ea350a9dc2e8c38',
      parent_id: '0x81c34c41e5aba77a9fc7f7c339a1147c623c33f2d8e4e4b5bf675c6e788278ee7',
      next_id: '0x81c34c41e5aba77a9fc7f7c339a1147c623c33f2d8e4e4b5bf675c6e78827e8e7',
      time: 1633940410000,
      status: 'success',
      proposer: '0x55ad22f01ef568a1',
      payer: '0x55ad22f01ef568a1',
      authorizers: ['0x55ad22f01ef568a1'],
      transfers: '0x4d4002d8995b06af',
      fee_limit: 9999
    };
  },
  methods: {
    handleHash(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.transaction-info {
  width: 100%;
  max-width: 1240px;
  padding: 40px 20px;
  margin: 0 auto;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
    .transaction-num {
      font-size: 24px;
      font-weight: 500;
      margin-left: 40px;
    }
  }
  .transaction-info-card {
    margin-top: 20px;
    ::v-deep {
      .el-form-item {
        margin-bottom: 0px;
        border-bottom: 1px solid #d8dfde;
      }
      .has-link {
        color: #1161ba;
      }
      .has-margin {
        margin: 0 4px;
      }
      .timestamp {
        display: flex;
        align-items: center;
        .iconfont {
          margin-right: 4px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
