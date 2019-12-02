<template>
  <div class="board board__container">
    <strong class="board__name">Dashboard</strong>
    <span class="board__postfix">SYSTEM</span>
  </div>
</template>

<script>
export default {
  name: 'TheBoard',
}
</script>

<style lang="scss">
@import '~@/styles/app';

.board {
  height: 8 * $spacing;
  line-height: 8 * $spacing;
  text-align: center;

  &__name {
    font-weight: 700;
    margin-right: 0.5 * $spacing;
  }

  &__postfix {
    color: $primary;
    font-weight: 600;
    font-style: italic;
  }
}
</style>
