<template>
  <div class="pagination pagination__container">
    <div class="pagination__body">
      <slot />
    </div>
    <div class="pagination__footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        :page-count="pageCount"
        :current-page="currentPage"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: undefined,
    },
    pageCount: {
      type: Number,
      default: undefined,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    currentChange(page) {
      this.$emit('update:currentPage', page)
      this.$emit('current-change', page)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.pagination {
  &__body {
    margin-bottom: 2 * $spacing;
  }

  &__footer {
    margin: 0 -10px;
  }
}
</style>
