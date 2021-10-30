<template>
  <div class="nodes-tab">
    <div class="kinds fm-hi">
      <el-button-group>
        <el-button
          v-for="item in options"
          :key="item.value"
          type="custom"
          plain
          :class="{ 'is-active': item.value === selected }"
          @click="handleSelect(item.value)"
        >
          {{ item.label }}
        </el-button>
      </el-button-group>
      <div class="total fm-hi">
        <span class="amount">{{ total }}</span> Nodes
      </div>
    </div>
    <div class="nodes-table">
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
  name: 'NodesTab',
  data() {
    return {
      options: [
        { label: 'Execution', value: 'Execution' },
        { label: 'Consensus', value: 'Consensus' },
        { label: 'Collection', value: 'Collection' },
        { label: 'Verification', value: 'Verification' }
      ],
      selected: 'Execution',
      list: []
    };
  },
  computed: {
    total() {
      return this.list.length || 0;
    },
    column() {
      return [
        {
          prop: 'name',
          label: 'Name',
          width: 200
        },
        {
          label: 'Stake',
          width: 200,
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.stake}
                size='14px'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          label: 'Delegated',
          width: 200,
          align: 'right',
          headerAlign: 'right',
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.delegated}
                size='14px'
              />
              <span class='symbol'>FLOW</span>
            </div>
        },
        {
          label: 'Delegators',
          width: 120,
          render: (h, ctx) => <div class='value'>
              <number-show
                number={ctx.row.delegators}
                size='14px'
              />
            </div>
        },
        {
          label: 'Address',
          width: '600',
          render: (h, ctx) => <div>
              <span class='address'>{ctx.row.address}</span>
              <i class='iconfont icon-fuzhi1' onClick={this.copyAddr.bind(this, ctx.row.address)}></i>
            </div>
        },
        {
          label: 'ID',
          width: '600',
          render: (h, ctx) => <div>
              <span class='address'>{ctx.row.id}</span>
              <i class='iconfont icon-fuzhi1' onClick={this.copyAddr.bind(this, ctx.row.id)}></i>
            </div>
        }
      ];
    }
  },
  methods: {
    handleSelect(val) {
      if (val === this.selected) return;
      this.selected = val;
      this.$emit('select-type', val);
    },
    copyAddr(val) {
      this.$copyText(val).then(() => {
        this.$message.success('Copied');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.nodes-tab {
  .kinds {
    margin-bottom: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .total {
      .amount {
        font-weight: bold;
      }
    }
  }
}
</style>
