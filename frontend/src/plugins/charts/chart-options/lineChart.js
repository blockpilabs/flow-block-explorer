export const lineDefault = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    extraCssText: 'box-shadow: 0px 0px 20px 0px rgba(130, 147, 193, 0.18)',
    textStyle: {
      fontSize: 12,
      color: '#b5bdca',
      align: 'left'
    }
  },
  grid: {
    left: '1%',
    right: '1%',
    top: '40px',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    axisLine: {
      lineStyle: {
        color: '#c7d3d2',
        width: 1
      }
    }
  },
  yAxis: [{
    type: 'value',
    splitLine: { lineStyle: { color: '#dfeae9' } },
    axisTick: { show: false }
  }],
  series: [
    {
      smooth: true,
      type: 'line',
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(0,209,177,0.4)' },
            { offset: 1, color: 'rgba(0,209,177,0)' }
          ]
        }
      }
    }
  ]
};
