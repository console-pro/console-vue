<template>
  <div class="header header__container">
    <div class="header__nav">
      <el-menu
        mode="horizontal"
        :default-active="activedItem"
        @select="handleSelect"
      >
        <el-menu-item index="question"
          ><i class="el-icon-question"></i
        ></el-menu-item>
        <el-menu-item index="/messages">
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
          <el-menu-item index="/settings/info">个人设置</el-menu-item>
          <el-menu-item index="/settings/security">安全设置</el-menu-item>
          <el-menu-item index="/auth/logout">退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheHeader',
  data() {
    return {
      activedItem: '',
    }
  },
  methods: {
    handleSelect(index) {
      if (_.startsWith(index, '/')) {
        if (this.$route.path === index) {
          return
        }

        this.$router.push(index)

        this.activedItem = `${Date.now()}`
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/app';

.header {
  display: flex;
  flex-direction: row-reverse;
  height: 8 * $spacing;
  text-align: center;
  user-select: none;

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
