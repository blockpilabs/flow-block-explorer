<template>
  <el-card class="blocks-card">
    <section class="header">
      <span class="title">Blocks</span>
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
        @click="toBlocks"
      >
        More
      </el-button>
    </section>
    <section class="list">
      <titan-table
        :data="blockList"
        :column="column"
        stripe
      />
    </section>
  </el-card>
</template>

<script>
import { formatTimeFromNow } from '@/filters/functions/formatTime';

export default {
  name: 'BlocksCard',
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
          width: '100',
          render: (h, ctx) => <div class='has-link' onClick={this.handleClick.bind(this, ctx.row.height)}>
              # {ctx.row.height}
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
    this.blockList = [{ height: 1231231, transactions: 24, collections: 2, time: 1633940410 },
                      { height: 525255, transactions: 0, collections: 5, time: 1633940310 },
                      { height: 465255, transactions: 11, collections: 3, time: 1633940300 }];
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
    handleClick(height) {
      console.log(height);
    },
    toBlocks() {
      this.$router.push({ name: 'Blocks' });
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
    .focus {
      font-weight: 500;
    }
  }
}
</style>
