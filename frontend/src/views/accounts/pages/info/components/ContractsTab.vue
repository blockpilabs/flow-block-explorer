<template>
  <div class="contracts-tab">
    <div class="header fm-hi">
      <span>Showing all</span>
      <span class="total">{{ total }}</span>
      <span>contracts deployed to this account</span>
    </div>
    <titan-table
      :data="list"
      :column="column"
      class="contracts-table"
      header-row-class-name="custom-header"
    />
  </div>
</template>

<script>
import { TRANSFERS_TYPES } from '@/assets/enum';
import { formatTimeFromNow, formatWallet } from '@/filters';
export default {
  name: 'ContractsTab',
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
          label: 'Name',
          width: 180,
          render: (h, ctx) => <router-link
              class='has-link'
              to={{ name: 'Contract', params: { contract_id: ctx.row.contract_id } }}
            >
              {ctx.row.name}
            </router-link>
        },
        {
          label: 'Project',
          width: 180,
          render: (h, ctx) => <span>{ctx.row.project}</span>
        },
        {
          label: 'Deployments',
          width: 260,
          render: (h, ctx) => <div>
              <span class='deploy'>{ctx.row.deployments}</span>
              <span>deployments</span>
            </div>
        },
        {
          label: 'Interactions',
          minWidth: 90,
          render: (h, ctx) => <span class='placement'>Coming Soon</span>
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.contracts-tab {
  .header {
    .total {
      font-weight: bold;
      margin: 0 2px;
    }
  }
  .contracts-table {
    margin-top: 30px;
  }
}
</style>
