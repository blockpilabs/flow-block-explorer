<template>
  <div class="transfers-tab">
    <div class="header fm-hi">
      <span>Matched</span>
      <span class="total">{{ total }}</span>
      <span>transfers</span>
    </div>
    <titan-table
      :data="list"
      :column="column"
      class="transfers-table"
      header-row-class-name="custom-header"
    />
  </div>
</template>

<script>
import { TRANSFERS_TYPES } from '@/assets/enum';
import { formatTimeFromNow, formatWallet } from '@/filters';
export default {
  name: 'TransfersTab',
  data() {
    return {
      total: 0,
      list: []
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Time',
          width: 160,
          render: (h, ctx) => <div>
              {formatTimeFromNow(ctx.row.time)}
            </div>
        },
        {
          label: 'Transaction',
          width: 200,
          render: (h, ctx) => <router-link
              class='has-link'
              to={{ name: 'TransactionInfo', params: { transactionId: ctx.row.transactionId } }}
            >
              {formatWallet(ctx.row.transactionId)}
            </router-link>
        },
        {
          width: 60,
          render: (h, ctx) => <i class={ TRANSFERS_TYPES[ctx.row.type].icon}>
            </i>
        },
        {
          label: 'Type',
          width: 220,
          render: (h, ctx) => <div class='transfer-type' style={{ color: TRANSFERS_TYPES[ctx.row.type].color, background: TRANSFERS_TYPES[ctx.row.type].bg }}>
              {ctx.row.type}
            </div>
        },
        {
          label: 'Asset',
          minWidth: 200,
          render: (h, ctx) => <div class='asset'>
              <span class='asset-amount' style={{ color: TRANSFERS_TYPES[ctx.row.type].color }}>{ctx.row.asset}</span>
              <span>{ctx.row.token}</span>
            </div>
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.transfers-tab {
  .header {
    .total {
      font-weight: bold;
      margin: 0 2px;
    }
  }
  .transfers-table {
    margin-top: 30px;
  }
}
</style>
