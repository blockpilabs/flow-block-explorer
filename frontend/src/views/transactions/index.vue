<template>
  <div class="transactions">
    <div class="title">
      Transactions
    </div>
    <el-card class="list">
      <titan-table
        :data="transactionsList"
        :column="column"
        stripe
      />
      <div class="load-more">
        <el-button
          class="load-btn"
          @click="loadMore"
        >
          LOAD MORE
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { formatTimeFromNow, formatWallet } from '@/filters';

export default {
  name: 'Transactions',
  data() {
    return {
      paused: false,
      calcClass: '',
      transactionsList: []
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Time',
          width: '128',
          render: (h, ctx) => <span>
              {formatTimeFromNow(ctx.row.time)}
            </span>
        },
        {
          label: 'Transactions Hash',
          render: (h, ctx) => <span class='has-link' onClick={this.handleHash.bind(this, ctx.row.hash)}>
              {formatWallet(ctx.row.hash)}
            </span>
        },
        {
          label: 'From',
          render: (h, ctx) => <span class='has-link' onClick={this.handleHash.bind(this, ctx.row.hash)}>
              {formatWallet(ctx.row.hash)}
            </span>
        },
        {
          label: 'To',
          render: (h, ctx) => <span class='has-link' onClick={this.handleHash.bind(this, ctx.row.hash)}>
              {formatWallet(ctx.row.hash)}
            </span>
        },
        {
          label: 'Status',
          render: (h, ctx) => {
            if (ctx.row.status) {
              return <div class='sealed'>SEALED</div>;
            } else {
              return <div class='un-sealed'>UNSEALED</div>;
            }
          }
        },
        {
          label: 'Interactions',
          render: (h, ctx) => {
            const list = (ctx.row.interactions || []).map(item => <span class='has-link interaction-item' onClick={this.handleClick.bind(this, item)}>
                {item}
              </span>);
            if (list.length) {
              return <div>
                {list}
              </div>;
            } else {
              return <span class='empty-text'>None</span>;
            }
          }
        }
      ];
    }
  },
  mounted() {
    this.transactionsList = [{ height: 1231231, hash: '0x11232311231231', transactions: 24, collections: 2, time: 1633940410 },
                             { height: 525255, hash: '0x177211311231231', transactions: 0, collections: 5, time: 1633940310 },
                             { height: 465255, hash: '0x721351311231231', transactions: 11, collections: 3, time: 1633940300 }];
  },
  methods: {
    handleClick(height) {
      console.log(height);
    },
    handleHash(hash) {
      this.$router.push({
        name: 'TransactionInfo',
        params: { transactionId: hash }
      });
    },
    loadMore() {
      this.transactionsList.push({ height: 1231231, hash: '0x11232311231231', transactions: 24, collections: 2, time: 1633940410 });
    }
  }
};
</script>

<style lang="scss" scoped>
.transactions {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }
  .list {
    margin-top: 24px;
    ::v-deep {
      .has-link {
        cursor: pointer;
        color: #1161ba;
      }
      .empty-text {
        color: #8d8d8d;
      }
      .focus {
        font-weight: 500;
      }
    }
  }
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .load-btn {
      cursor: pointer;
      padding: 16px 30px;
      font-size: 16px;
      font-weight: bold;
      color: #1f2e2d;
      background-color: #f8f8f8;
      border: none;
    }
  }
}
</style>
