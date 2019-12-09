<template>
  <div class="menubar menubar__container">
    <the-board />
    <el-menu :default-active="activedMenuItem" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="admin">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理员设置</span>
        </template>
        <el-menu-item index="/admin/accounts">账号管理</el-menu-item>
        <el-menu-item index="/admin/roles">角色管理</el-menu-item>
      </el-submenu>
      <el-submenu index="settings">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>高级设置</span>
        </template>
        <el-menu-item index="/settings/info">账号设置</el-menu-item>
        <el-menu-item index="/settings/security">安全设置</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="menubar__indicator">
      <div class="menubar__indicator-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMenubar',
  data() {
    return {
      activedMenuItem: '',
    }
  },
  mounted() {
    if (this.activedMenuItem) {
      return
    }

    this.activedMenuItem = this.$route.path
  },
}
</script>

<style lang="scss">
@import '~@/styles/app';

.menubar {
  &__container {
    position: relative;
    min-height: 100vh;
    user-select: none;

    & > .el-menu {
      border-right: 0;
    }

    @include theme-dark {
      background-color: theme-dark('menubar-bg');
    }
  }

  &__indicator {
    position: absolute;
    top: 0;
    right: -2 * $spacing;
    width: 2 * $spacing;
    height: 100%;
    cursor: pointer;

    &-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      content: '';
      border-right: 1px solid;

      @include theme-light {
        border-right-color: theme-light('divider-color');
      }

      @include theme-dark {
        border-right-color: theme-dark('divider-color');
      }
    }

    &:hover {
      .menubar__indicator-line {
        border-right-width: 2px;
        border-right-color: $primary;
      }
    }
  }
}
</style>
