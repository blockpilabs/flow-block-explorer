import TitanForm from './src/Form';

TitanForm.install = function(Vue, option = {}) {
  const defaultOption = {
    emptyText: '',
    formClass: ''
  };
  Vue.prototype.$titanForm = {
    ...defaultOption,
    ...option
  };
  Vue.component(TitanForm.name, TitanForm);
};

export default TitanForm;
