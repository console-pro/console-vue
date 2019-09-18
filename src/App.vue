<template>
  <div id="app" :class="`app app--${theme}`">
    <router-view />
    <the-config-bar />
  </div>
</template>

<script>
export default {
  name: 'APP',
  computed: {
    theme() {
      return this.$store.state.config.theme
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/overwrite';
@import '~@/styles/global';
</style>
