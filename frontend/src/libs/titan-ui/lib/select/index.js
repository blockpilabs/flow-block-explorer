import TitanSelect from './src/Select';

TitanSelect.install = function(Vue, option = {}) {
  const defaultOption = {
    remote: false,
    filterable: false,
    popperAppendToBody: false,
    defaultFirstOption: true,
    config: {}
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  Vue.prototype.$titanSelect = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanSelect.name, TitanSelect);
};

export default TitanSelect;
