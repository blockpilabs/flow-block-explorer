<template>
  <div
    ref="chart"
    :class="['titan-chart', `titan-chart--${preset}`]"
    :style="style"
  />
</template>

<script>
import * as echarts from 'echarts';
import { merge, debounce, cloneDeep } from './utils';
import { addListener, removeListener } from './utils/resize-detector';
const INIT_TRIGGERS = ['theme', 'initOptions', 'autoResize'];
const REWATCH_TRIGGERS = ['manualUpdate', 'watchShallow'];
const DefaultConfig = { presets: {} };

export default {
  name: 'TitanChart',
  props: {
    // 要使用的默认配置名称
    preset: {
      type: String,
      default: undefined
    },
    // 传入配置
    option: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    theme: {
      type: String,
      default: undefined
    },
    group: {
      type: String,
      default: undefined
    },
    initOptions: {
      type: Object,
      default: () => ({ renderer: 'canvas' })
    },
    watchShallow: {
      type: Boolean,
      default: false
    },
    manualUpdate: {
      type: Boolean,
      default: false
    },
    notMerge: {
      type: Boolean,
      default: undefined
    },
    autoResize: {
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
      lastArea: 0,
      chart: null
    };
  },
  computed: {
    mergeConfig() {
      return {
        ...DefaultConfig,
        ...(this.$titanChart || {})
      };
    },
    // 当使用特殊方式时，会将传入的配置与默认配置进行组合
    options() {
      if (this.preset) {
        const setting = this.mergeConfig.presets.find(o => o.name === this.preset) || {};
        return merge(cloneDeep(setting.option || {}), this.option);
      }
      return this.option;
    },
    style() {
      return {
        width: this.width,
        height: this.height,
        minHeight: '100%'
      };
    },
    calcTheme() {
      if (this.theme === undefined) {
        return this.mergeConfig.defaultTheme;
      }
      return this.theme;
    },
    calcNotMerge() {
      if (this.notMerge === undefined) {
        return this.mergeConfig.notMerge;
      }
      return this.notMerge;
    },
    calcAutoResize() {
      if (this.autoResize === undefined) {
        return this.mergeConfig.autoResize;
      }
      return this.autoResize;
    }
  },
  watch: {
    group(group) {
      this.chart.group = group;
    },
    height() {
      this.$nextTick(() => {
        this.chart && this.chart.resize();
      });
    }
  },
  created() {
    this.initOptionsWatcher();
    INIT_TRIGGERS.forEach(prop => {
      this.$watch(
        prop,
        () => {
          this.refresh();
        },
        { deep: true }
      );
    });
    REWATCH_TRIGGERS.forEach(prop => {
      this.$watch(prop, () => {
        this.initOptionsWatcher();
        this.refresh();
      });
    });
  },
  mounted() {
    // auto init if `options` is already provided
    if (this.options) {
      this.init();
    }
  },
  activated() {
    if (this.calcAutoResize) {
      this.chart && this.chart.resize();
    }
  },
  destroyed() {
    if (this.chart) {
      this.destroy();
    }
  },
  methods: {
    // provide an explicit merge option method
    mergeOptions(options, notMerge, lazyUpdate) {
      if (this.manualUpdate) {
        this.manualOptions = options;
      }
      if (!this.chart) {
        this.init(options);
      } else {
        this.delegateMethod('setOption', options, notMerge, lazyUpdate);
      }
    },
    // just delegates ECharts methods to Vue component
    // use explicit params to reduce transpiled size for now
    appendData(params) {
      this.delegateMethod('appendData', params);
    },
    resize(options) {
      this.delegateMethod('resize', options);
    },
    dispatchAction(payload) {
      this.delegateMethod('dispatchAction', payload);
    },
    convertToPixel(finder, value) {
      return this.delegateMethod('convertToPixel', finder, value);
    },
    convertFromPixel(finder, value) {
      return this.delegateMethod('convertFromPixel', finder, value);
    },
    containPixel(finder, value) {
      return this.delegateMethod('containPixel', finder, value);
    },
    showLoading(type, options) {
      this.delegateMethod('showLoading', type, options);
    },
    hideLoading() {
      this.delegateMethod('hideLoading');
    },
    getDataURL(options) {
      return this.delegateMethod('getDataURL', options);
    },
    getConnectedDataURL(options) {
      return this.delegateMethod('getConnectedDataURL', options);
    },
    clear() {
      this.delegateMethod('clear');
    },
    dispose() {
      this.delegateMethod('dispose');
    },
    delegateMethod(name, ...args) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[name](...args);
    },
    delegateGet(methodName) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[methodName]();
    },
    getArea() {
      return this.$el.offsetWidth * this.$el.offsetHeight;
    },
    init(options) {
      if (this.chart) {
        return;
      }
      const chart = echarts.init(this.$el, this.calcTheme, this.initOptions);
      if (this.group) {
        chart.group = this.group;
      }
      chart.setOption(options || this.manualOptions || this.options || {}, true);
      Object.keys(this.$listeners).forEach(event => {
        const handler = this.$listeners[event];
        if (event.indexOf('zr:') === 0) {
          chart.getZr().on(event.slice(3), handler);
        } else {
          chart.on(event, handler);
        }
      });
      if (this.calcAutoResize) {
        this.lastArea = this.getArea();
        this.__resizeHandler = debounce(
          () => {
            if (this.lastArea === 0) {
              // emulate initial render for initially hidden charts
              this.mergeOptions({}, true);
              this.resize();
              this.mergeOptions(this.options || this.manualOptions || {}, true);
            } else {
              this.resize();
            }
            this.lastArea = this.getArea();
          },
          100,
          { leading: true }
        );
        addListener(this.$el, this.__resizeHandler);
      }
      this.chart = chart;
    },
    initOptionsWatcher() {
      if (this.__unwatchOptions) {
        this.__unwatchOptions();
        this.__unwatchOptions = null;
      }
      if (!this.manualUpdate) {
        this.__unwatchOptions = this.$watch(
          'options',
          (val, oldVal) => {
            if (!this.chart && val) {
              this.init();
            } else {
              // 解决词云图，快速设置数据，数据有残留（不是最后一次设置的数据）的情况
              this.chart._model.option.series.some(o => o.type === 'wordCloud') && this.chart.clear();
              this.chart.setOption(val, val !== oldVal);
            }
          },
          { deep: !this.watchShallow }
        );
      }
    },
    destroy() {
      if (this.calcAutoResize) {
        removeListener(this.$el, this.__resizeHandler);
      }
      this.dispose();
      this.chart = null;
    },
    refresh() {
      if (this.chart) {
        this.destroy();
        this.init();
      }
    }
  },
  connect(group) {
    if (typeof group !== 'string') {
      group = group.map(chart => chart.chart);
    }
    echarts.connect(group);
  },
  disconnect(group) {
    echarts.disConnect(group);
  },
  getMap(mapName) {
    return echarts.getMap(mapName);
  },
  registerMap(mapName, geoJSON, specialAreas) {
    echarts.registerMap(mapName, geoJSON, specialAreas);
  },
  registerTheme(name, theme) {
    echarts.registerTheme(name, theme);
  },
  graphic: echarts.graphic
};
</script>
