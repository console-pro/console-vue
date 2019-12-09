<template>
  <div class="breadcrumb breadcrumb__container">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      <el-breadcrumb-item
        v-for="item in breadcrumbs"
        :key="item.name"
        :to="item.path"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Breadcrumb',
  computed: {
    breadcrumbs() {
      return this.$store.state.breadcrumb.breadcrumbs
    },
  },
  watch: {
    $route() {
      this.updateBreadcrumbs()
    },
  },
  created() {
    this.updateBreadcrumbs()
  },
  methods: {
    updateBreadcrumbs() {
      const breadcrumbs = _.map(this.$route.matched, item => {
        const { breadcrumbName } = item.meta

        return {
          path: item.path || '/',
          name: breadcrumbName || '首页',
        }
      })

      this.$store.commit('breadcrumb/setBreadcrumbList', breadcrumbs)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.breadcrumb {
  &__container {
    margin-bottom: 4 * $spacing;
  }
}
</style>
