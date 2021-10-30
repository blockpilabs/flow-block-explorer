import TitanTable from './src/Table';

/* istanbul ignore next */
TitanTable.install = function(Vue, option = {}) {
  const defaultOption = {
    colAlign: null,
    colHeaderAlign: null,
    pagerOffset: 0,
    tablePadding: 0,
    colEmptyText: '',
    customClassName: '',
    colShowOverflowTooltip: false
  };
  Vue.prototype.$titanTable = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanTable.name, TitanTable);
};

export default TitanTable;
