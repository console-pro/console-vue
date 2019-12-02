<template>
  <div class="basic-layout">
    <el-container>
      <el-aside width="280px">
        <the-menubar />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>
          <the-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.basic-layout {
  min-height: 100vh;

  @include theme();
}
</style>
