<template>
  <el-card class="transactions-card">
    <section class="header">
      <span class="title">Transactions</span>
      <div
        class="count-down"
        @click="handleToggle"
      >
        <svg class="count-svg">
          <circle
            r="9"
            cx="12"
            cy="12"
            class="circle-back"
          />
          <circle
            r="9"
            cx="12"
            cy="12"
            class="circle-front"
            :class="calcClass"
          />
        </svg>
        <i
          class="iconfont"
          :class="paused ? 'icon-play' : 'icon-pause'"
        />
      </div>
      <el-button
        type="custom"
        size="mini"
        class="more-btn"
        @click="toTransactions"
      >
        More
      </el-button>
    </section>
    <section class="list">
      <titan-table
        :data="transactionsList"
        :column="column"
        stripe
      />
    </section>
  </el-card>
</template>

<script>
import { formatWallet } from '@/filters/functions/formatWallet';
export default {
  name: 'TransactionsCard',
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
          label: 'Transactions Hash',
          render: (h, ctx) => <span class='has-link' onClick={this.handleHash.bind(this, ctx.row.hash)}>
              {formatWallet(ctx.row.hash)}
            </span>
        },
        {
          label: 'Proposer',
          render: (h, ctx) => <span class='has-link' onClick={this.handleProposer.bind(this, ctx.row.proposer)}>
                {ctx.row.proposer}
              </span>
        },
        {
          label: 'Events',
          prop: 'events',
          align: 'right',
          headerAlign: 'right',
          width: '70'
        }
      ];
    }
  },
  mounted() {
    this.transactionsList = [{ hash: '0x13r1f1311231231', proposer: '0x12048175175', events: 2 },
                             { hash: '0x113r11311231231', proposer: '0x12044175175', events: 5 },
                             { hash: '0xh62134311231231', proposer: '0x12012175175', events: 3 }];
  },
  methods: {
    handleToggle() {
      if (this.paused) {
        this.calcClass = 'waiting';
        this.paused = false;
        setTimeout(() => {
          this.calcClass = '';
        }, 300);
      } else {
        this.paused = true;
        this.calcClass = 'paused';
      }
    },
    handleHash(hash) {
      console.log(hash);
    },
    handleProposer(proposer) {
      console.log(proposer);
    },
    toTransactions() {
      this.$router.push({ name: 'Transactions' });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .more-btn {
    margin-left: auto;
  }
}
.count-down {
  position: relative;
  margin-left: 20px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  .iconfont {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: #00d1b1;
  }
  .count-svg {
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }
  .circle-back {
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 3px;
    stroke: #f1f1f1;
    fill: none;
  }
  .circle-front {
    stroke-dasharray: 56px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 3px;
    stroke: #00d1b1;
    fill: none;
    animation: circle 10s linear 0s infinite normal forwards running;
    &.paused {
      animation: circle 10s linear 0s infinite normal forwards paused;
    }
    &.waiting {
      animation: none 10s linear 0s infinite normal forwards running;
    }
    @keyframes circle {
      0% {
        stroke-dashoffset: 0px;
      }
      100% {
        stroke-dashoffset: 56px;
      }
    }
  }
}
.list {
  ::v-deep {
    .has-link {
      cursor: pointer;
      color: #1161ba;
    }
    .empty-text {
      color: #8d8d8d;
    }
  }
}
</style>

