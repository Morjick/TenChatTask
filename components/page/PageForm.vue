<template>
  <div class="page-form">
    <div class="page-form__content">
      <div class="page-form__container">
        <slot />
      </div>
    </div>
    <div class="page-form__image">
      <img
        class="page-form__mask"
        src="@/assets/images/pages/background-ellips.png"
        alt=""
      >
      <img
        class="page-form__avatar z-10"
        :src="image"
        alt=""
      >
      <div class="image-description">
        <p class="image-description__title">{{ imageTitle }}</p>
        <p class="image-description__subtitle">{{ imageSubtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: ''
  },
  imageTitle: {
    type: String,
    default: ''
  },
  imageSubtitle: {
    type: String,
    default: ''
  },
})
</script>

<style lang="scss">
.page-form {
  display: grid;
  
  grid-template-columns: 1fr 1fr;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__container {
    margin: 0 auto;
  }

  &__mask {
    position: absolute;
    width: 606px;
    height: 606px;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background: var(--secondary-color);
    grid-column: 2;
    overflow: hidden;

    &__avatar {
      width: 586px;
      height: 369px;

      flex-shrink: 0;
    }
  }
}

.image-description {
  position: absolute;

  bottom: 108px;

  text-align: center;

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-font-alternative);
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-font-alternative--opacity);
  }
}
</style>
