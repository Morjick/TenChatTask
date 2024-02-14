<template>
  <div class="ui-remark my-6">
    <span class="ui-remark__content">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: 'with email'
  }
})
</script>

<style lang="scss" scoped>
$markMargin: 10px;

.ui-remark {
  display: flex;
  justify-content: center;
  position: relative;

  &__content {
    color: var(--secondary-font);
    font-size: 15px;
    font-weight: 500;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;

      width: 25%;
      height: 0.5px;

      background: var(--secondary-font);
      transform: translateY(-50%);
    }

    &::before {
      left: $markMargin;
    }

    &::after {
      right: $markMargin;
    }
  }
}
</style>
