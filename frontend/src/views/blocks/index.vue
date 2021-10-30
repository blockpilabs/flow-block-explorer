<template>
  <div class="block">
    <div class="title">
      Blocks
    </div>
    <el-card class="list">
      <titan-table
        :data="blockList"
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
  name: 'Block',
  data() {
    return {
      paused: false,
      calcClass: '',
      blockList: []
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Height',
          width: '200',
          render: (h, ctx) => <div class='has-link' onClick={this.handleClick.bind(this, ctx.row.height)}>
              # {ctx.row.height}
            </div>
        },
        {
          label: 'Block Hash',
          render: (h, ctx) => <div class='has-link' onClick={this.handleHash.bind(this, ctx.row.hash)}>
              {formatWallet(ctx.row.hash)}
            </div>
        },
        {
          label: 'Transactions',
          render: (h, ctx) => {
            if (!ctx.row.transactions) {
              return <div class='empty-text'>No transactions</div>;
            } else {
              return <div>
                <span class='focus'>{ctx.row.transactions}</span> transactions in <span class='focus'>{ctx.row.collections}</span> collections
              </div>;
            }
          }
        },
        {
          label: 'Time',
          align: 'right',
          headerAlign: 'right',
          width: '128',
          render: (h, ctx) => <span>
              {formatTimeFromNow(ctx.row.time)}
            </span>
        }
      ];
    }
  },
  mounted() {
    this.blockList = [{ height: 1231231, hash: '0x11232311231231', transactions: 24, collections: 2, time: 1633940410 },
                      { height: 525255, hash: '0x177211311231231', transactions: 0, collections: 5, time: 1633940310 },
                      { height: 465255, hash: '0x721351311231231', transactions: 11, collections: 3, time: 1633940300 }];
  },
  methods: {
    handleClick(height) {
      this.$router.push({
        name: 'BlockInfo',
        params: { blockId: height }
      });
    },
    handleHash(hash) {
      console.log(hash);
    },
    loadMore() {
      this.blockList.push({ height: 1231231, hash: '0x11232311231231', transactions: 24, collections: 2, time: 1633940410 });
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
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
