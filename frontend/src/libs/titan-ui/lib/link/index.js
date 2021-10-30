import TitanLink from './src/Link';

TitanLink.install = function(Vue, option = {}) {
  const defaultOption = {
    underline: false,
    config: {}
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  Vue.prototype.$titanLink = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanLink.name, TitanLink);
};

export default TitanLink;
