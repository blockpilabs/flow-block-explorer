
<template>
  <div class="history-tab">
    <div class="history-table">
      <titan-table
        :data="list"
        :column="column"
        header-row-class-name="custom-header"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryTab',
  data() {
    return { list: [] };
  },
  computed: {
    column() {
      return [
        {
          label: 'Epoch',
          type: 'index',
          width: 80
        },
        {
          label: 'Start',
          width: 240,
          render: (h, ctx) => <div class='value'>
              {ctx.row.start}
            </div>
        },
        {
          label: 'Total Rewards',
          width: 220,
          align: 'right',
          headerAlign: 'right',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.delegated}
                size='14px'
                fontWeight='normal'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          label: 'Total Staked',
          width: 220,
          align: 'right',
          headerAlign: 'right',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.delegators}
                size='14px'
                fontWeight='normal'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          label: 'APY (w/o fee)',
          width: '160',
          align: 'right',
          headerAlign: 'right',
          render: (h, ctx) => <div>
              <span class='address'>{ctx.row.address}</span>
            </div>
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.history-tab {
  .history-table {
    font-size: 14px;
    ::v-deep {
      .symbol {
        margin-left: 4px;
        color: #00d1b1;
      }
    }
  }
}
</style>
