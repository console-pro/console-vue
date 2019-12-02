<template>
  <div class="header header__container">
    <div class="header__nav">
      <el-menu mode="horizontal">
        <el-menu-item index="question"
          ><i class="el-icon-question"></i
        ></el-menu-item>
        <el-menu-item index="message">
          <span class="header__message-badge">
            <el-badge :value="2">
              <i class="el-icon-message-solid"></i>
            </el-badge>
          </span>
        </el-menu-item>
        <el-submenu index="/settings/account">
          <template slot="title">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar
            ><strong class="header__username">超级管理员</strong>
          </template>
          <el-menu-item index="/settings/account">个人设置</el-menu-item>
          <el-menu-item index="/auth/logout">退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss">
@import '~@/styles/app';

.header {
  display: flex;
  flex-direction: row-reverse;
  height: 8 * $spacing;
  text-align: center;

  @include theme-dark {
    .el-menu {
      background-color: map-get($theme-dark, 'main-bg');
    }
  }

  &__username {
    margin-left: $spacing;
  }

  &__message-badge {
    line-height: 20px;
  }
}
</style>
