import TitanInput from './src/Input.vue';

TitanInput.install = function(Vue, option = {}) {
  const defaultOption = { clearable: false };
  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {
      trim: false,
      width: undefined
    };
  }
  Vue.prototype.$titanInput = { ...defaultOption, ...option };
  Vue.component(TitanInput.name, TitanInput);
};

export default TitanInput;
