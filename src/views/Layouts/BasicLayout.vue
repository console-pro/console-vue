<template>
  <div class="basic-layout">
    <el-container>
      <el-aside width="auto">
        <the-menubar />
      </el-aside>
      <el-container>
        <el-header height="auto">
          <the-header />
        </el-header>
        <el-main>
          <Breadcrumb />
          <div class="main">
            <transition
              name="page-transition-animation"
              enter-active-class="animated slideInRight"
              leave-active-class="animated slideOutLeft"
            >
              <router-view />
            </transition>
          </div>
        </el-main>
        <el-footer>
          <the-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.basic-layout {
  min-height: 100vh;

  @include theme();
}

.main {
  position: relative;
  background-color: #fff;

  @include theme-dark {
    background-color: map-get($theme-dark, 'main-bg');
  }
}

.page-transition-animation {
  &-enter,
  &-enter-active,
  &-enter-to,
  &-leave,
  &-leave-active,
  &-leave-to {
    position: absolute;
    width: 100%;
  }

  &-enter,
  &-enter-active,
  &-enter-to {
    z-index: 1;
  }

  &-leave,
  &-leave-active,
  &-leave-to {
    z-index: 2;
  }
}

.animated {
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(20%, 0, 0);
    transform: translate3d(20%, 0, 0);
    visibility: visible;
    opacity: 0;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(20%, 0, 0);
    transform: translate3d(20%, 0, 0);
    visibility: visible;
    opacity: 0;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
}

@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
</style>
