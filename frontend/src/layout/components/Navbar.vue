<template>
  <div class="navbar">
    <div class="navbar-top">
      <div class="main">
        <div class="main-left">
          <div class="logo" />
          <span>EXPLORER</span>
        </div>
        <div class="main-right">
          <titan-input
            v-model="searchParam"
            class="search-input"
            placeholder="Height / Address / Transaction"
          >
            <i
              slot="append"
              class="iconfont icon-sousuo search-icon"
            />
          </titan-input>
          <titan-select
            v-model="network"
            class="network-select"
            popper-class="network-select-popper"
            :config="{
              dataSource: networks,
              itemLabel: 'label',
              itemValue: 'value'
            }"
          />
        </div>
      </div>
    </div>
    <div class="navbar-content">
      <div class="main">
        <div class="navbar-menu">
          <div
            v-for="item in menus"
            :key="item.path"
            class="menu-item"
          >
            <router-link :to="item.path">
              <i
                v-if="item.meta.icon"
                class="iconfont"
                :class="item.meta.icon"
              />
              <span>{{ item.meta.title }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'NavBar',
  data() {
    return {
      searchParam: '',
      network: 'mainnet',
      networks: [{ label: 'Mainnet', value: 'mainnet' }]
    };
  },
  computed: {
    menus() {
      return router.options.routes.filter(o => !o.hidden);
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 115px;
  overflow: hidden;
  position: relative;
  &-top {
    width: 100%;
    padding: 10px 0px;
    background: #222929;
    .main {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      &-left {
        display: flex;
        align-items: flex-end;
        color: #fff;
        font-size: 12px;
        span {
          margin-bottom: 10px;
          margin-left: 10px;
        }
      }
      &-right {
        display: flex;
        align-items: center;
        color: #fff;
        .search-input {
          width: 440px;
          margin-right: 20px;
          ::v-deep {
            .el-input-group__append {
              cursor: pointer;
              height: 40px;
              background: #000000;
              color: #ffffff;
              width: 50px;
              padding: 5px 15px;
              border-color: #000000;
              .search-icon {
                font-size: 20px;
              }
            }
          }
        }
        .network-select {
          width: 118px;
          height: 40px;
          ::v-deep {
            .el-input__inner {
              color: #ffffff;
              background: #000000;
              border: solid 2px #00d1b1;
            }
          }
        }
      }
    }
    .logo {
      width: 103px;
      height: 44px;
      background: url('~@/assets/images/logo.svg') no-repeat center;
    }
  }
  &-content {
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(31, 46, 45, 0.2);
    .main {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      height: 50px;
    }
  }
  &-menu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .menu-item {
      position: relative;
      flex: 1;
      text-align: center;
      color: #333333;
      .iconfont {
        margin-right: 10px;
      }
      .router-link-active {
        font-weight: bold;
        &::after {
          position: absolute;
          content: '';
          width: 6px;
          height: 6px;
          background-color: #00d1b1;
          border-radius: 50%;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
