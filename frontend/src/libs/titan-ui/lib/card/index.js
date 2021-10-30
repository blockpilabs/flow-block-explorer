import TitanCard from './src/Card';

TitanCard.install = function(Vue, option = {}) {
  const defaultOption = { shadow: 'hover' };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  Vue.prototype.$titanCard = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanCard.name, TitanCard);
};

export default TitanCard;
