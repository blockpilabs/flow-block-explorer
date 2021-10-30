import TitanDialog from './src/Dialog';

TitanDialog.install = function(Vue, option = {}) {
  const defaultOption = {
    width: '50%',
    appendToBody: false,
    modalAppendToBody: true,
    closeOnClickModal: true,
    closeOnPressEscape: true
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  Vue.prototype.$titanDialog = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanDialog.name, TitanDialog);
};

export default TitanDialog;
