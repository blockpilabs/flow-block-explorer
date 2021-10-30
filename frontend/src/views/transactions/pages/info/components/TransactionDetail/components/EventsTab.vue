<template>
  <div class="events-tab">
    <div class="control">
      <div class="choose">
        ch
      </div>
      <div class="filters">
        filter
      </div>
      <div class="amount">
        <span class="total">{{ total }}</span>
        <span>{{ title }}</span>
      </div>
    </div>
    <titan-table
      class="events-table"
      :data="list"
      :column="column"
      header-row-class-name="custom-header"
    />
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'EventsTab',
  data() {
    return {
      list: [
        {
          'node': {
            'indexInTransaction': 0,
            'eventType': {
              'fullId': 'A.ead892083b3e2c6c.DapperUtilityCoin.TokensWithdrawn',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '12.00000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0xead892083b3e2c6c'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 1,
            'eventType': {
              'fullId': 'A.ead892083b3e2c6c.DapperUtilityCoin.TokensWithdrawn',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '0.60000000'
              },
              {
                'type': 'Optional',
                'value': null
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 2,
            'eventType': {
              'fullId': 'A.ead892083b3e2c6c.DapperUtilityCoin.TokensDeposited',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '0.60000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0xead892083b3e2c6c'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 3,
            'eventType': {
              'fullId': 'A.e544175ee0461c4b.TokenForwarding.ForwardedDeposit',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '0.60000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0xfaf0cc52c6e3acaf'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 4,
            'eventType': {
              'fullId': 'A.ead892083b3e2c6c.DapperUtilityCoin.TokensDeposited',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '11.40000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0xead892083b3e2c6c'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 5,
            'eventType': {
              'fullId': 'A.e544175ee0461c4b.TokenForwarding.ForwardedDeposit',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UFix64',
                'value': '11.40000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0x53a108146f49ae42'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 6,
            'eventType': {
              'fullId': 'A.c1e4f4f4c4257510.TopShotMarketV3.MomentPurchased',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UInt64',
                'value': '4486288'
              },
              {
                'type': 'UFix64',
                'value': '12.00000000'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0x53a108146f49ae42'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 7,
            'eventType': {
              'fullId': 'A.0b2a3299cc857e29.TopShot.Withdraw',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UInt64',
                'value': '4486288'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0x53a108146f49ae42'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        },
        {
          'node': {
            'indexInTransaction': 8,
            'eventType': {
              'fullId': 'A.0b2a3299cc857e29.TopShot.Deposit',
              '__typename': 'EventType'
            },
            'fields': [
              {
                'type': 'UInt64',
                'value': '4486288'
              },
              {
                'type': 'Optional',
                'value': {
                  'type': 'Address',
                  'value': '0x2c0dbef6e556e8a0'
                }
              }
            ],
            '__typename': 'Event'
          },
          '__typename': 'EventEdge'
        }
      ]
    };
  },
  computed: {
    total() {
      return this.list.length || 0;
    },
    title() {
      return this.total > 1 ? 'events' : 'event';
    },
    column() {
      return [
        {
          label: 'Contract',
          render: (h, ctx) => {
            const reg = /(\w{1}\.\w+\.\w+)\.(\w+)/;
            const eventInfo = ctx.row.node.eventType.fullId;
            const eventArr = reg.exec(eventInfo);
            return <span class='asLink' onClick={this.clickContract.bind(this, eventArr[1])}>{eventArr[1]}</span>;
          }
        },
        {
          prop: 'type',
          label: 'Type',
          render: (h, ctx) => {
            const reg = /(\w{1}\.\w+\.\w+)\.(\w+)/;
            const eventInfo = ctx.row.node.eventType.fullId;
            const eventArr = reg.exec(eventInfo);
            return <span>{eventArr[2]}</span>;
          }
        },
        {
          label: 'Data',
          render: (h, ctx) => <json-viewer
              value={{ fields: ctx.row.node.fields }}
              expand-depth={3}
              copyable
              name='fields'
            />
        }
      ];
    }
  },
  methods: {
    clickContract(contract) {
      this.$router.push({
        name: 'Contract',
        params: { contract_id: contract }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.events-tab {
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
  .events-table {
    ::v-deep {
      .asLink {
        color: #1161ba;
        cursor: pointer;
      }
    }
  }
}
</style>
