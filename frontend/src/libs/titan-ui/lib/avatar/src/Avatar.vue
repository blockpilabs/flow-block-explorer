<template>
  <el-avatar
    class="titan-avatar"
    :fit="calcFit"
    :shape="calcShape"
    :src="mergeConfig.srcFormatter(src)"
    :style="calcStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot>
      <span
        class="titan-avatar__label"
        :style="mergeConfig.labelStyle"
      >
        {{ mergeConfig.labelFormatter(label || mergeConfig.defaultLabel) }}
      </span>
    </slot>
  </el-avatar>
</template>

<script>
const DefaultConfig = {
  labelStyle: {
    fontSize: '16px',
    backgroundColor: '#3381D0'
  },
  defaultLabel: 'Unknown',
  labelFormatter: name => name.slice(0, 2).toUpperCase(),
  srcFormatter: src => {
    if (!src) {
      return '';
    }
    if (src.startsWith('http')) {
      return src;
    }
    return 'data:image/jpeg;base64,' + src;
  }
};

export default {
  name: 'TitanAvatar',

  inheritAttrs: false,
  props: {
    fit: {
      type: String,
      default: undefined
    },
    shape: {
      type: String,
      default: undefined
    },
    src: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    mergeConfig() {
      return {
        ...DefaultConfig,
        ...this.$titanAvatar.config,
        ...this.config,
        labelStyle: {
          ...(DefaultConfig.labelStyle || {}),
          ...(this.$titanAvatar.config.labelStyle || {}),
          ...(this.config.labelStyle || {})
        }
      };
    },
    calcFit() {
      if (this.fit === undefined) {
        return this.$titanAvatar.fit;
      }
      return this.fit;
    },
    calcShape() {
      if (this.shape === undefined) {
        return this.$titanAvatar.shape;
      }
      return this.shape;
    },
    calcStyle() {
      if (!this.size) {
        return {};
      }

      return {
        width: this.size,
        height: this.size
      };
    }
  }
};
</script>

<style scoped>
.titan-avatar .titan-avatar__label {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bolder;
}
</style>
