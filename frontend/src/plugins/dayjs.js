import dayjs from 'dayjs';
// 格式化为时间戳所需插件
import advancedFormat from 'dayjs/plugin/advancedFormat';
// 计算时长所需插件
import duration from 'dayjs/plugin/duration';
// 支持dayjs(), dayjs.utc, dayjs().set, dayjs().add, dayjs().subtract传入对象参数
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(objectSupport);
dayjs.extend(duration);
dayjs.extend(advancedFormat);
const Dayjs = {};

Dayjs.install = Vue => {
  Vue.prototype.$dayjs = dayjs;
};

export default Dayjs;

export { dayjs };
