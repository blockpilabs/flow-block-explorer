export function formatBigNumber(value) {
  if (value > 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  }
  if (value > 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  return value;
}

export function formatTraffic(val) {
  let value = '';
  if (val > (1024 * 1024 * 1024 * 1024)) {
    value = (val / (1024 * 1024 * 1024 * 1024)).toFixed(2) + ' Tb';
  } else if (val > (1024 * 1024 * 1024)) {
    value = (val / (1024 * 1024 * 1024)).toFixed(2) + ' Gb';
  } else if (val > (1024 * 1024)) {
    value = (val / (1024 * 1024)).toFixed(2) + ' Mb';
  } else if (val > 1024) {
    value = (val / 1024).toFixed(2) + ' Kb';
  } else {
    value = val + ' B';
  }
  return value;
}
