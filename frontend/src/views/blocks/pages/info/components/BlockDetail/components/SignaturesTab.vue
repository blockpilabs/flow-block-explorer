
<template>
  <div class="signatures-tab">
    <div class="signature-text">
      {{ sign }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignaturesTab',
  data() {
    return { sign: '{"l/QOj/KcccSGLdWfbY9jTwvIfTgtEvaIL4Yci+MyevAdGgD9t8ViVYAw6l0wOptbp/vesqYUyEtkE2gUaovIquQzZY2LhePDrcjCA9pMe5bB2oqhb2QKY1bvgX6WvJWg"}' };
  }
};
</script>

<style lang="scss" scoped>
.signatures-tab {
  .signature-text {
    background: #f8f8f8;
    border: 1px solid #e3e3e3;
    padding: 15px;
  }
}
</style>
