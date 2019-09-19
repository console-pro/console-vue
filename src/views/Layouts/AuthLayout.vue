<template>
  <div class="auth-layout">
    <div class="main-box">
      <div class="heading">
        <h1 class="title">后台管理系统</h1>
      </div>
      <div class="content">
        <router-view />
      </div>
      <footer class="footer">
        <the-copyright />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @include theme();
}

.heading {
  padding: 4 * $spacing 0;
}
.title {
  margin: 0;
  text-align: center;
}
.content {
  min-height: 300px;
}
</style>
