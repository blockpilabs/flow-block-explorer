<template>
  <div class="interactions-tab">
    <titan-table
      class="interactions-table"
      :data="list"
      :column="column"
      header-row-class-name="custom-header"
    />
    <div class="pagination">
      <el-pagination
        :page-size="10"
        :page="page"
        layout="pager"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
import { formatTimeFromNow, formatWallet } from '@/filters';
export default {
  name: 'InteractionsTab',
  data() {
    return {
      list: [],
      total: 0,
      page: 1
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Time',
          width: 160,
          render: (h, ctx) => <span>{formatTimeFromNow(ctx.row.node.time)}</span>
        },
        {
          label: 'Proposer',
          width: 200,
          render: (h, ctx) => <span class='has-link' onClick={this.clickProposer.bind(this, ctx.row.node.proposer.address)}>{ctx.row.node.proposer.address}</span>
        },
        {
          width: 300,
          label: 'Transaction',
          render: (h, ctx) => <span class='has-link'>{formatWallet(ctx.row.node.id)}</span>
        },
        {
          label: 'Status',
          width: 100,
          render: (h, ctx) => <span class='status-tag'>{ctx.row.node.status}</span>
        },
        {
          label: 'Events',
          minWidth: 200,
          render: (h, ctx) => {
            const reg = /(\w{1}\.\w+\.\w+)\.(\w+)/;
            const tags = ctx.row.node.eventTypes.map(item => <span class='event-tag'>{reg.exec(item.fullId)[2]}</span>);
            return <div>{tags}</div>;
          }
        }
      ];
    }
  },
  mounted() {
    this.total = 103;
    this.list = [
      {
        'node': {
          'time': 1634268020,
          'id': 'cec1def19e9caaf945251f36af6162583347e9d2373f3a67ab0bd2d4bf8296f3',
          'proposer': {
            'address': '0x55ad22f01ef568a1',
            '__typename': 'Account'
          },
          'status': 'SEALED',
          'eventTypes': [
            {
              'fullId': 'A.cfdd90d4a00f7b5b.TeleportedTetherToken.TokensDeposited',
              '__typename': 'EventType'
            },
            {
              'fullId': 'A.cfdd90d4a00f7b5b.TeleportedTetherToken.TokensWithdrawn',
              '__typename': 'EventType'
            }
          ],
          '__typename': 'Transaction'
        },
        '__typename': 'TransactionEdge'
      },
      {
        'node': {
          'time': 1634268000,
          'id': '61c5c5baa4f03b9a35029c908a4da2e6fac228fbc8eb59186e4fc3636a9f7c58',
          'proposer': {
            'address': '0x55ad22f01ef568a1',
            '__typename': 'Account'
          },
          'status': 'SEALED',
          'eventTypes': [
            {
              'fullId': 'A.cfdd90d4a00f7b5b.TeleportedTetherToken.TokensDeposited',
              '__typename': 'EventType'
            },
            {
              'fullId': 'A.cfdd90d4a00f7b5b.TeleportedTetherToken.TokensWithdrawn',
              '__typename': 'EventType'
            }
          ],
          '__typename': 'Transaction'
        },
        '__typename': 'TransactionEdge'
      }
    ];
  },
  methods: {
    clickProposer(proposer) {
      this.$router.push({
        name: 'AccountInfo',
        params: { account_id: proposer }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.interactions-tab {
  .control {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .amount {
      margin-left: auto;
      .total {
        font-weight: bold;
        margin-right: 4px;
      }
    }
  }
  .interactions-table {
    ::v-deep {
      .has-link {
        color: #1161ba;
        cursor: pointer;
      }
      .status-tag {
        display: inline-block;
        background-color: #e1faf6;
        border-radius: 4px;
        color: #01bc9f;
        padding: 10px;
        line-height: 1;
        font-weight: 500;
      }
      .event-tag {
        display: inline-block;
        background-color: #fff0fe;
        border-radius: 4px;
        color: #e56be1;
        padding: 10px;
        line-height: 1;
        font-weight: 500;
        margin-right: 10px;
        &:last-of-type {
          margin-right: 0px;
        }
      }
    }
  }
  .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    ::v-deep {
      .el-pager li {
        height: 35px;
        padding-bottom: 15px;
        margin: 0 5px;
        font-size: 20px;
        font-weight: normal;
        color: #6a6a6a;
        border-bottom: 1px solid #6a6a6a;
        &.active {
          color: #01bc9f;
          border-bottom: 1px solid #01bc9f;
        }
      }
    }
  }
}
</style>
