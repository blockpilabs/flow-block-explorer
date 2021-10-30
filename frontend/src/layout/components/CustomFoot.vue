<template>
  <div class="custom-foot">
    <span class="power fm-hi">Powered by</span>
    <div class="logo" />
  </div>
</template>

<script>
export default { name: 'CustomFoot' };
</script>

<style lang="scss" scoped>
.custom-foot {
  height: 110px;
  width: 100%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  .power {
    font-size: 14px;
    color: #ffffff;
    margin-top: 10px;
    margin-right: 20px;
  }
  .logo {
    background: url('~@/assets/images/BlockPI-logo.svg') no-repeat center;
    width: 170px;
    height: 35px;
  }
}
</style>
