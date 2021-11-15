import { ls } from '@/utils';

export default {
  inserted(el, binding) {
    const { value } = binding;
    const network = ls.fetch('network_type');
    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = value.includes(network);

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(
        'need privileges! Like v-permission="[\'mainnet\']"'
      );
    }
  }
};
