<template>
  <div class="message message__container">
    <div class="message__box">
      <Pagination :total="12">
        <ul class="message__list">
          <li v-for="item in messageList" :key="item.id" class="message__item">
            <div class="message__heading">
              <h4 class="message__title">{{ item.title }}</h4>
              <span class="message__date">{{
                item.createdAt.toLocaleString()
              }}</span>
            </div>
            <div class="message__body">
              <p class="message__description">{{ item.description }}</p>
              <el-button class="message__btn" type="text" size="mini">
                标记已读
              </el-button>
            </div>
          </li>
        </ul>
      </Pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  data() {
    return {
      messageList: [
        {
          id: '1',
          title: '青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪',
          description: '',
          isRead: false,
          createdAt: new Date(),
        },
        {
          id: '2',
          title: '少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉',
          description: '',
          isRead: false,
          createdAt: new Date(),
        },
        {
          id: '3',
          title: '公主死去了，屠龙的少年还在燃烧公主死去了',
          description:
            '我已经不和她联系了，也不准备去找她，但我就是在努力，希望有一天碰到她，我身上有光。',
          isRead: false,
          createdAt: new Date(),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/app';

.message {
  &__list {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 4 * $spacing;
  }

  &__item {
    list-style: none;
    border-bottom: 1px solid;
    padding: 1 * $spacing 0;

    @include theme-dark {
      border-color: map-get($theme-dark, 'divider-color');
    }

    @include theme-light {
      border-color: map-get($theme-light, 'divider-color');
    }
  }

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    flex: 1 1 auto;
    margin: $spacing 0;
    font-size: 16px;
    font-weight: 400;

    @include theme-dark {
      color: $gray-500;
    }

    @include theme-light {
      color: $gray-800;
    }
  }

  &__date {
    flex: 0 0 auto;
    font-size: 12px;

    @include theme-dark {
      color: $gray-700;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    flex: 1 1 auto;
    margin: $spacing 0;
    font-size: 14px;

    @include theme-dark {
      color: $gray-500;
    }

    @include theme-light {
      color: $gray-700;
    }
  }

  &__btn {
    flex: 0 0 auto;
  }
}
</style>
