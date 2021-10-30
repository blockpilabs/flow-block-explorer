import TitanAutoComplete from './src/AutoComplete.vue';

TitanAutoComplete.install = function(Vue, option = {}) {
  const defaultOption = { clearable: false, valueKey: 'query' };
  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = { trim: false, width: undefined };
  }
  Vue.prototype.$titanAutoComplete = { ...defaultOption, ...option };
  Vue.component(TitanAutoComplete.name, TitanAutoComplete);
};

export default TitanAutoComplete;
