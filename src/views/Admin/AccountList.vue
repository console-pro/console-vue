<template>
  <div class="account account__container">
    <pagination
      :current-page.sync="pagination.page"
      :total="pagination.count"
      @current-change="handlePaginationChange"
    >
      <el-table :data="accountList" border>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="头像"></el-table-column>
        <el-table-column label="昵称"></el-table-column>
        <el-table-column label="姓名"></el-table-column>
        <el-table-column label="手机号"></el-table-column>
        <el-table-column label="简介"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </pagination>
  </div>
</template>

<script>
export default {
  name: 'AdminAccountList',
  data() {
    return {
      accountList: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      pagination: {
        page: 2,
        count: 32,
      },
    }
  },
  methods: {
    handlePaginationChange(page) {
      // eslint-disable-next-line
      console.log(page)
    },
  },
}
</script>
