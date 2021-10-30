<template>
  <div class="transactions-tab">
    <div class="header fm-hi">
      <div class="roles">
        Roles
      </div>
      <div class="roles-list">
        <div
          v-for="item in roles"
          :key="item"
          class="role-item"
          :style="{ color: colors[item].color, background: colors[item].bg }"
        >
          {{ item }}
        </div>
      </div>
      <div class="stat">
        <span>All</span>
        <span class="total">{{ total }}</span>
        <span>transactions</span>
      </div>
    </div>
    <titan-table
      :data="list"
      :column="column"
      class="transactions-table"
      header-row-class-name="custom-header"
    />
  </div>
</template>

<script>
import { ROLES_COLOR } from '@/assets/enum';
import { formatTimeFromNow, formatWallet } from '@/filters';
export default {
  name: 'TransactionsTab',
  data() {
    return {
      colors: ROLES_COLOR,
      roles: ['Authorizer', 'Proposer', 'Payer'],
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
          label: 'Hash',
          width: 200,
          render: (h, ctx) => <router-link
              class='has-link'
              to={{ name: 'TransactionInfo', params: { transactionId: ctx.row.transactionId } }}
            >
              {formatWallet(ctx.row.transactionId)}
            </router-link>
        },
        {
          label: 'Roles',
          width: 220,
          render: (h, ctx) => {
            const tags = ctx.row.roles.map(item => <div
                class='role-item'
                style={ { color: this.colors[item].color, background: this.colors[item].bg } }
              >
                { item }
              </div>);
            return <div class='roles'>
              {tags}
            </div>;
          }
        },
        {
          label: 'Status',
          width: 90,
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
          minWidth: 200,
          render: (h, ctx) => {
            const links = ctx.row.interactions.map(item => <router-link
                class='has-link'
                to={{ name: 'Contract', params: { contract_id: item } }}
              >
                {item}
              </router-link>);
            return <div class='links'>
              {links}
            </div>;
          }
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.transactions-tab {
  .header {
    display: flex;
    align-items: center;
    .roles {
      flex-shrink: 0;
      font-weight: bold;
      margin-right: 5px;
    }
    .roles-list {
      flex: 1;
      display: flex;
      align-items: center;
      .role-item {
        font-weight: 500;
        padding: 6px 10px;
        border-radius: 4px;
        margin: 0 5px;
      }
    }
    .stat {
      flex-shrink: 0;
      font-size: 16px;
      .total {
        font-weight: bold;
        margin: 0 2px;
      }
    }
  }
  .transactions-table {
    margin-top: 30px;
  }
}
</style>
