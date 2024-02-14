<template>
  <div class="ui-checkbox">
    <div
      class="ui-checkbox__box"
      :class="{
        active: modelValue
      }"
      @click="toggleValue"
    ></div>
    <div class="ui-checkbox__text"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

const toggleValue = () => {
  value.value = !value.value
  emit('update:modelValue', value.value)
}
</script>

<style lang="scss">
.ui-checkbox {
  display: flex;
  align-items: center;

  &__box {
    width: 20px;
    height: 20px;

    border-radius: 2px;
    border: 1px solid var(--primary-color);
    overflow: hidden;

    &.active {
      background: var(--primary-color);
    }
  }

  &__text {
    margin-left: 10px;
  }
}
</style>
