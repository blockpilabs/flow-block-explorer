import TitanAvatar from './src/Avatar';

TitanAvatar.install = function(Vue, option = {}) {
  const defaultOption = {
    fit: 'cover',
    shape: 'circle'
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  Vue.prototype.$titanAvatar = {
    ...defaultOption,
    ...option
  };

  Vue.component(TitanAvatar.name, TitanAvatar);
};

export default TitanAvatar;
