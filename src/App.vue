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
  watch: {
    '$store.state.config.theme'(value) {
      this.setThemeToBody(value)
    },
  },
  mounted() {
    this.setThemeToBody(this.theme)
  },
  methods: {
    setThemeToBody(theme) {
      document.body.className = `app--${theme}`
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/overwrite';
@import '~@/styles/global';
</style>
