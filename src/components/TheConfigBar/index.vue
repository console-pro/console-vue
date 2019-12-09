<template>
  <div
    class="config-bar config-bar__container"
    :class="{
      ['config-bar--opened']: visible,
    }"
  >
    <el-drawer
      title="我的配置"
      append-to-body
      :visible.sync="visible"
      size="320px"
    >
      <div class="config-bar__section">
        <div class="config-bar__heading">
          <h5 class="config-bar__title">风格设置</h5>
        </div>
        <div class="config-bar__body">
          <el-radio-group :value="userConfig.theme" @input="setTheme">
            <el-radio label="light">亮色</el-radio>
            <el-radio label="dark">暗色</el-radio>
          </el-radio-group>
        </div>
      </div>
    </el-drawer>
    <div class="config-bar__trigger" @click="openDrawer">
      <span
        v-show="!visible"
        class="el-icon-s-tools"
        @click="openDrawer"
      ></span>
      <span v-show="visible" class="el-icon-circle-close"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheConfigBar',
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    userConfig() {
      return this.$store.state.config
    },
  },
  methods: {
    openDrawer() {
      this.visible = true
    },
    closeDrawer() {
      this.visible = false
    },
    setTheme(value) {
      this.$store.commit('config/updateConfig', {
        theme: value,
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/app';

.config-bar {
  &--opened {
    transform: translateX(-320px);
  }

  &__container {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    z-index: 10;
    align-items: center;
    min-height: 100%;
    transition: transform 0.225s cubic-bezier(0, 0, 0.2, 1);
  }

  &__trigger {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin: auto;
    font-size: 20px;
    color: $white;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    background-color: $primary;
    cursor: pointer;
  }

  &__section {
    margin: 2 * $spacing 0;
    padding: 0 4 * $spacing;
  }

  &__title {
    margin: 0;
    margin-bottom: 2 * $spacing;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
