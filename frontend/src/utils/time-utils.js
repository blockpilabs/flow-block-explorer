import { dayjs } from '@/plugins/dayjs';

/**
 * 比较传入时间是否为【今天】
 * @param {number} timestamp 需要鉴定的时间戳
 */
export function isToday(timestamp) {
  if (!timestamp) {
    return false;
  }

  const target = dayjs(timestamp)
    .startOf('day')
    .valueOf();
  const today = dayjs()
    .startOf('day')
    .valueOf();
  return target === today;
}

/**
 * 【当前时刻】是否超过预设时间，忽略日期
 * @param {number} bookTimestamp 预设时间
 */
export function isOverBookTime(bookTimestamp) {
  const nowTime = dayjs()
    .set({ year: 2000, month: 1 })
    .valueOf();
  const bookTime = dayjs(bookTimestamp)
    .set({ year: 2000, month: 1 })
    .valueOf();

  return nowTime > bookTime;
}

export function parseDateToTimeInterval(
  timestamp,
  startKey = 'start_time',
  endKey = 'end_time'
) {
  if (timestamp) {
    return {
      [startKey]: dayjs(+timestamp)
        .startOf('day')
        .valueOf(),
      [endKey]: dayjs(+timestamp)
        .endOf('day')
        .valueOf()
    };
  }
  return {
    [startKey]: null,
    [endKey]: null
  };
}

/**
 * 检验日期是否合法
 * @param {*} date
 */
export function validDate(date) {
  if (!date) return false;
  return dayjs(date).isValid();
}

/**
 * 格式化时间
 * @param {*} time 时间
 * @param {*} format 期望的格式化格式 默认YYYY-MM-DD HH:mm:ss 可通过“fmt:Ys”形式表示YYYY-MM-DD HH:mm:ss，以此类推“fmt:Ms”，“fmt:Dm”等
 * @param {*} timeFormat time本身的格式
 */
export function formatTime(time, format = 'YYYY-MM-DD HH:mm:ss', timeFormat = '') {
  if (format.startsWith('fmt:')) {
    const baseFormat = 'YYYY-MM-DD HH:mm:ss';
    const range = format.replace('fmt:', '').split('');
    const from = baseFormat.indexOf(range[0]) || 0;
    const to = baseFormat.lastIndexOf(range[1]) + 1 || baseFormat.length;
    format = baseFormat.substring(from, to);
  }
  if (!time) return dayjs().format(format);
  return timeFormat ? dayjs(time, timeFormat).format(format) : dayjs(time).format(format);
}
