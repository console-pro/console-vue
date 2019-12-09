<template>
  <div class="panel panel__container">
    <div class="panel__heading">
      <h3 v-if="title" class="panel__title">
        {{ title }}
      </h3>
      <slot name="heading" />
    </div>
    <div class="panel__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/app';

.panel {
  &__heading {
    overflow: hidden;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
  }

  &__body {
    padding: 2 * $spacing;
  }
}
</style>
