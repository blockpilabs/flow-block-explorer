import Vue from 'vue';
import TitanChart from '@/libs/titan-chart';
import { barDefault } from './chart-options/barChart';
import { lineDefault } from './chart-options/lineChart';

import themeJSON from './theme/walden.json';
Vue.use(TitanChart, {
  notMerge: true,
  autoResize: true,
  theme: themeJSON.themeName,
  themes: [{ name: themeJSON.themeName, theme: themeJSON.theme }],
  presets: [
    { name: 'bar', option: barDefault },
    { name: 'line', option: lineDefault }
  ]
});
