import { checkType } from '@/utils';
import { formatTime as fmtTime } from '@/utils/time-utils';

export function formatTime(time, format) {
  if (!time) return;

  if (checkType(time) === 'number' && (time + '').length === 10) {
    time = +time * 1000;
  }

  return fmtTime(time, format);
}

export function formatTimeFromNow(time, format) {
  if (!time) return;

  if (checkType(time) === 'number' && (time + '').length === 10) {
    time = +time * 1000;
  }

  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d) / 1000;

  if (diff < 60) {
    return `${diff} seconds ago`;
  } else if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)} minutes ago`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)} hours ago`;
  }

  return fmtTime(time, format);
}
