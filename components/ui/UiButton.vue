<template>
  <button
    class="ui-button uppercase rounded-2xl cursor-pointer"
    :class="[type]"
    :disabled="disabled"
    @click.prevent.stop="emitClick"
  >{{ text }}</button>
</template>

<script setup lang="ts">
type ButtonTypeEnum = 'primary'

defineProps({
  text: {
    type: String,
    default: 'submit'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<ButtonTypeEnum>,
    default: 'primary'
  }
})

const emit = defineEmits(['click'])

const emitClick = () => {
  emit('click')
}
</script>

<style>
.ui-button {
  width: 100%;
  max-width: var(--button-width);
  height: var(--button-height);

  margin-top: 20px;
}

.ui-button:disabled {
  opacity: .5;
}

.ui-button.primary {
  background: var(--primary-color);
  color: var(--backgound-color);
  font-size: 20px;
  font-weight: 700;
}
</style>
