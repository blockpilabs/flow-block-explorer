<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>

export default {
  name: 'AppMain',

  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  height: 100%;
  padding-top: 115px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
/* .fixed-header+.app-main {
  padding-top: 50px;
} */
</style>

