<template>
  <div class="info info__contaienr">
    <panel title="账号设置">
      <el-form :model="infoForm">
        <el-row :gutter="48">
          <el-col :span="12">
            <el-form-item label="昵称">
              <el-input
                v-model="infoForm.nickname"
                placeholder="请输入昵称"
              ></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input
                v-model="infoForm.username"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input
                v-model="infoForm.phone"
                placeholder="请输入手机号，该手机号将用于登录使用"
              ></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input
                v-model="infoForm.description"
                type="textarea"
                :rows="6"
                placeholder="简要介绍"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="头像">
              <div class="info__avatar-box">
                <el-upload
                  class="avatar-uploader"
                  action="upload-url"
                  :show-file-list="false"
                >
                  <div class="info__avatar">
                    <el-avatar
                      v-if="infoForm.avatar"
                      class="avatar"
                      :size="124"
                      :src="infoForm.avatar"
                    />
                  </div>
                  <el-button type="primary" size="mini">更换头像</el-button>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </panel>
  </div>
</template>

<script>
export default {
  name: 'InfoSetting',
  data() {
    return {
      infoForm: {
        nickname: '',
        username: '',
        phone: '',
        avatar:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        description: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  &__avatar-box {
    display: block;
    width: 100%;
    clear: both;
  }
}
</style>
