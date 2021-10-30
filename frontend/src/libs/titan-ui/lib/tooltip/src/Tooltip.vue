<template>
  <el-tooltip
    ref="titanTooltip"
    v-model="tooltipShow"
    v-bind="$attrs"
    class="titan-tooltip"
    :placement="calcPlacement"
    :open-delay="calcOpenDelay"
    :popper-class="'titan-tooltip__popper' + ' ' + popperClass"
    v-on="$listeners"
  >
    <template #content>
      <slot name="content" />
    </template>
    <slot />
  </el-tooltip>
</template>

<script>

export default {
  name: 'TitanTooltip',

  inheritAttrs: false,
  props: {
    config: {
      // maxWidth 最大宽度
      type: Object,
      default: () => ({})
    },
    placement: {
      type: String,
      default: undefined
    },
    openDelay: {
      type: Number,
      default: 0
    },
    popperClass: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { defaultConfig: { maxWidth: undefined } };
  },
  computed: {
    mergeConfig() {
      return {
        ...this.defaultConfig,
        ...this.$titanTooltip.config,
        ...this.config
      };
    },
    calcPlacement() {
      if (this.placement === undefined) {
        return this.$titanTooltip.placement;
      }
      return this.placement;
    },
    calcOpenDelay() {
      return this.openDelay || this.$titanTooltip.openDelay;
    },
    calcMaxWidth() {
      return this.mergeConfig.maxWidth;
    },
    calcStyle() {
      const maxWidth = this.calcMaxWidth ? { maxWidth: this.calcMaxWidth } : {};
      return { ...maxWidth };
    },
    tooltipShow: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('update:value', val);
      }

    }
  },
  watch: {
    value(val) {
      if (val) {
        const dom = this.$refs.titanTooltip.$refs.popper;
        for (const key in this.calcStyle) {
          if (Object.prototype.hasOwnProperty.call(this.calcStyle, key)) {
            dom.style[key] = this.calcStyle[key];
          }
        }
      }
    }
  }
};
</script>
