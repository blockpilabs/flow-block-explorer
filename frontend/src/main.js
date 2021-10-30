import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'; // lang i18n
import TitanUI from '@/libs/titan-ui';
import VueClipboard from 'vue-clipboard2';

import '@/styles/index.scss'; // global css
import '@/assets/font-hind/font-hind.css';
import '@/assets/font-nunitoSans/font-nunitoSans.css';
import App from './App';
import store from './store';
import router from './router';
import '@/plugins/charts'; // titan-charts
import Dayjs from '@/plugins/dayjs';
import xss from 'xss';

import '@/icons'; // icon
import '@/iconfont/iconfont.css';

import '@/permission'; // permission control
import LayoutContainer from '@/layout/pageContainer';
import * as CustomFilters from '@/filters';
import VueHighlightJS from 'vue-highlightjs';

import NumberShow from '@/components/NumberShow';
import JsonViewer from 'vue-json-viewer';
Vue.use(VueHighlightJS);
Vue.use(JsonViewer);
Vue.component(NumberShow.name, NumberShow);
Object.keys(CustomFilters).forEach(item => Vue.filter(item, CustomFilters[item]));

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.component('LayoutContainer', LayoutContainer);

Vue.use(TitanUI, {
  Table: {
    colAlign: 'left',
    colHeaderAlign: 'left',
    colEmptyText: '- -',
    pagerOffset: 10,
    tablePadding: 0
  },
  Form: {
    emptyText: '- -',
    config: { labelPosition: 'left' }
  },
  Avatar: { config: { labelStyle: { backgroundColor: '#3458f1' } } },
  Autocomplete: {
    clearable: true,
    config: { trim: 'weak' }
  },
  Input: {
    clearable: true,
    config: { trim: 'weak' }
  },
  Link: { underline: false },
  Dialog: { appendToBody: true },
  Tooltip: {
    placement: 'top-start',
    openDelay: 1000,
    config: { maxWidth: '400px' }
  },
  Select: {
    popperAppendToBody: true,
    defaultFirstOption: true
  }
});
Vue.use(VueClipboard);
Vue.use(Dayjs);
Vue.prototype.xss = xss;

Vue.config.productionTip = false;

const app = new Vue({
  name: 'App',
  router,
  store,
  render: h => h(App)
});
app.$mount('#app');
