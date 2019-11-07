<template>
  <div class="login-page">
    <div class="login-form login-form__container">
      <el-form label-position="top" :model="form">
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="el-button--blocked" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  &__container {
    width: 320px;
    padding: 40px 0 200px;
  }
}
</style>
