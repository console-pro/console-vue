<template>
  <div class="security security__container">
    <panel title="修改密码">
      <el-row>
        <el-col :span="8">
          <el-form :model="form" class="demo-form-inline">
            <el-form-item label="原密码">
              <el-input
                v-model="form.originalPassword"
                placeholder="请输入原密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input
                v-model="form.originalPassword"
                placeholder="请输入新密码，长度应不少于 6 位"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input
                v-model="form.originalPassword"
                placeholder="请再次输入新密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确认修改</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </panel>
  </div>
</template>

<script>
export default {
  name: 'SecuritySetting',
  data() {
    return {
      form: {},
    }
  },
}
</script>

<style lang="scss" scoped></style>
