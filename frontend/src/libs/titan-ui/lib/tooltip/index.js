import TitanTooltip from './src/Tooltip';
import { registerTheme } from './src/theme';

TitanTooltip.install = function(Vue, option = {}) {
  const defaultOption = { placement: 'bottom', openDelay: 0, config: {} };
  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }
  Vue.prototype.$titanTooltip = { ...defaultOption, ...option };
  Vue.component(TitanTooltip.name, TitanTooltip);

  if ({}.hasOwnProperty.call(option, 'themes')) {
    const themeList = JSON.parse(JSON.stringify(option.theme || []));
    registerTheme(themeList || []);
    delete option.themes;
  }
};

export default TitanTooltip;
