<template>
  <div id="app">
    <router-view v-if="showView" />
  </div>
</template>

<script>
import { ls } from '@/utils';

export default {
  name: 'App',
  data() {
    return { showView: true };
  },
  provide() {
    return { appReload: this.reload };
  },
  created() {
    const networkType = ls.fetch('network_type');
    if (!networkType) {
      ls.save('network_type', 'emulator');
    }
  },
  methods: {
    reload() {
      this.showView = false;
      setTimeout(() => {
        this.showView = true;
      }, 1000 / 60);
    }
  }
};
</script>
