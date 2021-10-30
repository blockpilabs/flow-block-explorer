<template>
  <div class="keys-tab">
    <div class="header fm-hi">
      <span>Keys</span>
    </div>
    <ul class="keys-list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="key-item"
      >
        <div class="key-info">
          <i class="iconfont icon-key" />
          <titan-tooltip
            :content="item.publicKey"
          >
            <div class="key-pub">
              {{ item.publicKey }}
            </div>
          </titan-tooltip>
          <i class="iconfont icon-fuzhi1" />
        </div>
        <div class="key-tags">
          <div class="status-tag key-tag">
            ACTIVE
          </div>
          <div class="weight-tag key-tag">
            <span class="label">Weight </span>
            <span class="label">{{ item.weight }}</span>
          </div>
          <div class="seq-tag key-tag">
            <span class="label">Seq. Number </span>
            <span class="label">{{ item.sequenceNumber }}</span>
          </div>
          <div class="sign-tag key-tag">
            <span class="label">Sign. Algo </span>
            <span class="value">{{ item.signatureAlgo }}</span>
          </div>
          <div class="hash-tag key-tag">
            <span class="label">Hash Algo </span>
            <span class="value">{{ item.hashAlgo }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KeysTab',
  data() {
    return {
      list: [
        {
          'publicKey': 'BA4afvCb1X0eJOwYRx2QnLkP2/RaOYYyLPYCej30uH7/C4a9++x4W+wb6r/J9ewG+1UKI4WObvXUvQXuhYT5RA==',
          'weight': 1000,
          'sequenceNumber': '1',
          'revoked': false,
          'signatureAlgo': 'ECDSA_P256',
          'hashAlgo': 'SHA2_256',
          '__typename': 'AccountKey'
        }
      ]
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.keys-tab {
  padding: 20px;
  border-radius: 4px;
	border: solid 1px #d8dfde;
  .header {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 18px;
    border-bottom: 1px solid #d8dfde;
  }
  .keys-list {
    .key-item {
      margin-top: 30px;
      .key-info {
        display: flex;
        align-items: center;
        .iconfont {
          flex-shrink: 0;
          &.icon-key {
            color: #8d8d8d;
            font-size: 20px;
          }
          &.icon-fuzhi1 {
            color: #222929;
            font-size: 18px;
          }
        }
        .key-pub {
          margin: 0 10px 0px 20px;
          font-size: 14px;
          line-height: 1;
          padding: 8px 10px;
          background-color: #f8f8f8;
          border-radius: 4px;
          color: #333;
          @include utils-ellipsis(1);
        }
      }
      .key-tags {
        display: flex;
        flex-wrap: wrap;
        padding-left: 40px;
        .key-tag {
          margin-top: 5px;
          background-color: #f8f8f8;
          border-radius: 4px;
          margin-right: 5px;
          color: #333;
          font-size: 14px;
          line-height: 1;
          padding: 8px 10px;
          .label {
            font-weight: 500;
          }
          &:last-of-type {
            margin-right: 0px;
          }
          &.status-tag {
            background-color: #e1faf6;
            color: #01bc9f;
          }
        }
      }
    }
  }
}
</style>
