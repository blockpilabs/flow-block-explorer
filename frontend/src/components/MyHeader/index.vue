<template>
  <el-dropdown
    trigger="click"
    placement="bottom-start"
  >
    <div class="custom-header">
      <div
        class="logo"
        @click.stop="clickHome"
      />
      <el-divider direction="vertical" />
      <span class="el-dropdown-link">
        RPC Network<i class="el-icon-arrow-down el-icon--right" />
      </span>
    </div>
    <el-dropdown-menu
      slot="dropdown"
      class="custom-dropdown"
    >
      <el-dropdown-item
        v-for="item in menus"
        :key="item.title"
        :class="{ active: item.path === $route.path }"
        @click.native="handleClick(item)"
      >
        <div class="title">
          {{ item.title }}
        </div>
        <div class="sub-title">
          {{ item.subTitle }}
        </div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      menus: [
        { title: 'RPC Network', subTitle: 'BlockPI Public RPC Network', name: 'Home' },
        { title: 'Hyperware', subTitle: 'BlockPI Hyperware', path: 'https://blockpi.io', target: 'new' }
      ]
    };
  },
  methods: {
    clickHome() {
      this.$router.push({ name: 'Home' });
    },
    handleClick(it) {
      if (it.name === this.$route.name) {
        return;
      }
      if (it.target === 'new') {
        window.location.href = it.path;
      } else {
        this.$router.push({ name: it.name });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-header {
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  .logo {
    width: 165px;
    height: 35px;
    background: url("~@/assets/images/logo.svg") no-repeat center;
    cursor: pointer;
  }
  ::v-deep {
    .el-divider--vertical {
      margin: 0 18px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    font-weight: 500;
  }
}
</style>

<style lang="scss">
.custom-dropdown {
  width: 320px;
  .el-dropdown-menu__item {
    padding: 0 50px;
    position: relative;
    .title {
      color: #152339;
      font-size: 16px;
      font-weight: 500;
    }
    &.active, &:hover {
      &::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: solid 1px #1fc399;
        left: 28px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
