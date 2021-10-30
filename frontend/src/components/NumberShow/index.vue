<template>
  <span class="number-show">
    <span
      class="integer"
      :style="integerStyle"
    >{{ integer }}</span>
    <span
      v-if="decimal.length"
      class="decimal"
      :style="decimalStyle"
    >.{{ decimal }}</span>
  </span>
</template>

<script>
const numeral = require('numeral');

export default {
  name: 'NumberShow',
  props: {
    mode: {
      type: String,
      default: 'same'
    },
    fixed: {
      type: Number,
      default: undefined
    },
    color: {
      type: String,
      default: '#333333'
    },
    size: {
      type: String,
      default: '18px'
    },
    littleSize: {
      type: String,
      default: '14px'
    },
    fontWeight: {
      type: String,
      default: 'bold'
    },
    littleFontWeight: {
      type: String,
      default: 'normal'
    },
    number: {
      type: Number,
      default: 0
    }
  },
  computed: {
    integer() {
      return numeral(this.number).format('0,0');
    },
    decimal() {
      const decimal = this.number.toString().split('.')[1] || '';
      if (this.fixed === undefined) {
        return decimal;
      } else if (decimal.length < this.fixed) {
        const len = this.fixed - decimal.length;
        let suffix = '';
        for (let i = 0;i < len;i++) {
          suffix += '0';
        }
        return decimal + suffix;
      } else {
        return decimal.substr(0, this.fixed);
      }
    },
    integerStyle() {
      return {
        color: this.color,
        fontSize: this.size,
        fontWeight: this.fontWeight
      };
    },
    decimalStyle() {
      if (this.mode === 'same') {
        return this.integerStyle;
      } else {
        return {
          color: this.color,
          fontSize: this.littleSize,
          fontWeight: this.littleFontWeight
        };
      }
    }
  }
};
</script>
