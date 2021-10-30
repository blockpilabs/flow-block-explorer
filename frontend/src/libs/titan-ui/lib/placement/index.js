import TitanPlacement from './src/Placement';

TitanPlacement.install = function(Vue, option = {}) {
  const defaultOption = {
    initText: '初始化中',
    emptyText: '暂无数据'
  };
  Vue.prototype.$titanPlacement = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanPlacement.name, TitanPlacement);
};

export default TitanPlacement;
