<template>
  <div
    class="horizental-divider"
    :style="customStyle"
  />
</template>

<script>
export default {
  name: 'HorizentalDivider',
  props: {
    customStyle: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.horizental-divider {
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #d8dfde;
}
</style>
