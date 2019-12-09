<template>
  <div class="role role__container">
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
  </div>
</template>

<script>
export default {
  name: 'AdminRoleList',
  data() {
    return {
      accountList: [
        {
          id: Date.now(),
        },
        {
          id: Date.now(),
        },
      ],
    }
  },
}
</script>
