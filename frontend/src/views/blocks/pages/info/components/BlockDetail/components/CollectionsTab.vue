<template>
  <div class="collections-tab">
    <ul class="collection-list">
      <li
        v-for="(val, key) in list"
        :key="key"
        class="collection-item"
      >
        <div
          class="collection-id"
          @click="handleToggle(key)"
        >
          <i
            class="el-icon el-icon-caret-right"
            :class="controls.includes(key) ? 'expanded' : ''"
          />
          <span class="collection-addr">{{ key }}</span>
        </div>
        <div
          v-show="controls.includes(key)"
          class="transaction-list"
        >
          <div
            v-for="item in val"
            :key="item"
            class="transaction-item"
          >
            <span style="cursor: pointer;">{{ item }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'CollectionsTab',
  data() {
    return {
      list: {},
      controls: []
    };
  },
  computed: {
    formatList() {
      const keys = Object.keys(this.list);
      const result = {};
      keys.forEach(it => {
        result[it] = {
          expand: false,
          transactions: this.list[it] || []
        };
      });
      return result;
    }
  },
  mounted() {
    this.list = {
      'aaa': [123, 456],
      'bbb': [45, 12344444],
      'ccc': [],
      'ddd': [112]
    };
  },
  methods: {
    handleToggle(key) {
      console.log(key);
      this.controls = _.xor(this.controls, [key]);
    }
  }
};
</script>

<style lang="scss" scoped>
.collections-tab {
  .collection-item {
    margin: 20px 0px 40px;
    padding: 0 25px;
    .collection-id {
      cursor: pointer;
      color: #1161ba;
      .el-icon {
        margin-right: 10px;
        color: #222929;
        transition: all 0.3s;
        &.expanded {
          transform: rotate(90deg);
        }
      }
      .collection-addr {
        text-decoration: underline;
      }
    }
    .transaction-list {
      padding-left: 27px;
      .transaction-item {
        margin: 10px 0px;
        color: #1161ba;
      }
    }
  }
}
</style>
