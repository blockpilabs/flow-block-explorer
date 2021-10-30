<template>
  <div
    class="common__wrapper"
    :style="defaultStyle"
  >
    <slot />
    <custom-foot />
  </div>
</template>

<script>
import CustomFoot from './components/CustomFoot';

export default {
  name: 'LayoutContainer',
  components: { CustomFoot },
  props: {
    defaultStyle: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

