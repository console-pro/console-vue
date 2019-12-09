<template>
  <div class="menubar menubar__container">
    <the-board :collapse="isCollapse" />
    <el-menu :default-active="activedMenuItem" :collapse="isCollapse" router>
      <el-menu-item index="/dashborad">
        <i class="el-icon-location"></i>
        <span>仪表盘</span>
      </el-menu-item>
      <el-submenu index="detail-pages">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>详情页</span>
        </template>
        <el-menu-item index="/detail-pages/basic">基础详情页</el-menu-item>
        <el-menu-item index="/detail-pages/advanced">高级详情页</el-menu-item>
      </el-submenu>
      <el-submenu index="error-pages">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>异常页</span>
        </template>
        <el-menu-item index="/error-pages/403">403</el-menu-item>
        <el-menu-item index="/error-pages/404">404</el-menu-item>
        <el-menu-item index="/error-pages/500">500</el-menu-item>
      </el-submenu>
      <el-submenu index="app">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>应用信息</span>
        </template>
        <el-menu-item index="/app/carousels">轮播图</el-menu-item>
        <el-menu-item index="/app/news">新闻信息</el-menu-item>
        <el-menu-item index="/app/system-config">系统配置</el-menu-item>
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
    <div class="menubar__indicator" @click="toggleCollapse">
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
      isCollapse: false,
    }
  },
  mounted() {
    if (this.activedMenuItem) {
      return
    }

    this.activedMenuItem = this.$route.path
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
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
      width: 280px;

      &.el-menu--collapse {
        width: auto;
      }
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
