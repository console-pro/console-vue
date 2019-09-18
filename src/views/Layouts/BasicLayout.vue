<template>
  <div class="basic-layout"></div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.basic-layout {
  height: 100vh;

  @include theme();
}
</style>
