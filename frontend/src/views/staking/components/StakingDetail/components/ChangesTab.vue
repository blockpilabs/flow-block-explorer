<template>
  <div class="changes-tab">
    <div class="title fm-hi">
      Changes at the end of the epoch
    </div>
    <div class="changes-item fm-hi">
      <div class="sub-title">
        <div class="legend">
          <i class="iconfont icon-suoding" />
          <span>Committed</span>
        </div>
        <div class="info">
          <span class="desc">Tokens that will be <span class="focus">staked</span> on the next epoch</span>
          <span>
            <number-show
              :number="66370010.09183324"
              mode="diff"
              little-size="12px"
              size="16px"
            />
            <span class="symbol">FLOW</span>
          </span>
        </div>
      </div>
      <div class="changes-table">
        <titan-table
          :data="committedList"
          :column="committedCol"
          header-row-class-name="custom-header-first"
        />
      </div>
    </div>
    <div class="changes-item">
      <div class="sub-title">
        <div class="legend">
          <i class="iconfont icon-suoding" />
          <span>Requested to unstake</span>
        </div>
        <div class="info">
          <span class="desc">Tokens that is requested to <span class="focus">unstake</span> on the next epoch</span>
          <span>
            <number-show
              :number="452753.09183324"
              mode="diff"
              little-size="12px"
              size="16px"
            />
            <span class="symbol">FLOW</span>
          </span>
        </div>
      </div>
      <div class="changes-table">
        <titan-table
          :data="unstakeList"
          :column="unstakeCol"
          header-row-class-name="custom-header-second"
        />
      </div>
    </div>
    <div class="changes-item">
      <div class="sub-title">
        <div class="legend">
          <i class="iconfont icon-weisuoding" />
          <span>Unstaking</span>
        </div>
        <div class="info">
          <span class="desc">Tokens that will be <span class="focus">released</span> on the next epoch</span>
          <span>
            <number-show
              :number="32.09183324"
              mode="diff"
              little-size="12px"
              size="16px"
            />
            <span class="symbol">FLOW</span>
          </span>
        </div>
      </div>
      <div class="changes-table">
        <titan-table
          :data="unstakingList"
          :column="unstakingCol"
          header-row-class-name="custom-header-third"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangesTab',
  data() {
    return {
      committedList: [],
      unstakeList: [],
      unstakingList: []
    };
  },
  computed: {
    committedCol() {
      return [
        {
          prop: 'from',
          width: 150,
          label: 'From'
        },
        {
          label: 'Committed',
          render: (h, ctx) => <div class='value'>
          <number-show
            number={ctx.row.committed}
            mode='diff'
            size='16px'
            littleSize='12px'
          />
          <span class='symbol'>FLOW</span>
        </div>
        }
      ];
    },
    unstakeCol() {
      return [
        {
          prop: 'from',
          width: 150,
          label: 'From'
        },
        {
          label: 'Unstaking',
          render: (h, ctx) => <div class='value'>
          <number-show
            number={ctx.row.unstaking}
            mode='diff'
            size='16px'
            littleSize='12px'
          />
          <span class='symbol'>FLOW</span>
        </div>
        }
      ];
    },
    unstakingCol() {
      return [
        {
          prop: 'from',
          width: 150,
          label: 'From'
        },
        {
          label: 'Unstaking',
          render: (h, ctx) => <div class='value'>
          <number-show
            number={ctx.row.unstaking}
            mode='diff'
            size='16px'
            littleSize='12px'
          />
          <span class='symbol'>FLOW</span>
        </div>
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.changes-tab {
  .title {
    font-weight: bold;
  }
  .changes-item {
    margin-top: 25px;
    .sub-title {
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .legend {
        font-weight: bold;
        .iconfont {
          color: #6a6a6a;
          margin-right: 10px;
        }
      }
      .desc {
        margin-right: 30px;
        color: #8d8d8d;
        .focus {
          color: #323232;
        }
      }
    }
  }
}
</style>
