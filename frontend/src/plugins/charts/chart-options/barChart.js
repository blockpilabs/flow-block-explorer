export const barDefault = {
  color: '#1fc399',
  tooltip: {
    axisPointer: { type: 'none' },
    backgroundColor: '#fff',
    extraCssText: 'box-shadow: 0px 7px 10px 0px rgba(119, 122, 168, 0.1)',
    textStyle: {
      fontSize: 12,
      color: '#7c8490',
      align: 'left'
    }
  },
  grid: {
    left: '2%',
    right: '10%',
    bottom: '4%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    axisLabel: { show: true },
    axisLine: { lineStyle: { color: '#b5bdca' } },
    splitLine: { show: false }
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    minInterval: 1,
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false }
  },
  series: [
    {
      type: 'bar',
      barMaxWidth: '10',
      markLine: {
        // silent: true,
        symbol: 'none',
        label: {
          color: '#b5bdca',
          formatter: params => {
            let value = 0;
            const val = params.value;
            if (val > (1000 * 1000)) {
              value = (val / (1000 * 1000)).toFixed(2) + 'M';
            } else if (val > 1000) {
              value = (val / 1000).toFixed(2) + 'K';
            } else {
              value = val;
            }

            return value;
          }
        },
        lineStyle: {
          width: 2,
          color: '#e3e3e3'
        },
        emphasis: { lineStyle: { color: '#c2e3db' } },
        data: [
          {
            name: 'Average',
            type: 'average',
            tooltip: { formatter: params => `<span>Average: </span><strong>${params.value}</strong>` }
          }
        ]
      },
      itemStyle: { borderRadius: [5, 5, 0, 0] },
      emphasis: { itemStyle: { color: '#c2e3db' } }
    }
  ]
};
