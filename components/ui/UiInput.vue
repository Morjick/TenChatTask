<template>
  <label
    class="ui-input flex items-center rounded-2xl"
  >
    <div class="ui-input__icon"><img :src="icon" alt=""></div>
    <div
      class="ui-input__icon cursor-pointer z-10"
      style="position: absolute; right: 20px;"
      @click="toggleShowPassword"
      v-if="type === 'password'"
    ><img src="@/assets/icons/eye-slash.png" alt=""></div>
    <p
      class="ui-input__placeholder"
      v-show="isShowPlaceholder && !modelValue.length"

    >{{ placeholder }}</p>
    <input
      v-model="value"
      class="ui-input__content block p-4 rounded-2xl"
      :type="inputType"
      :value="modelValue"
      @focus="setShowPlaceholder(false)"
      @blur="setShowPlaceholder(true)"
      @input="onInput"
      @change="onInput"
    />
  </label>
</template>

<script  lang="ts" setup>
import MailImage from '@/assets/icons/mail.png'
import SecurityImage from '@/assets/icons/security.png'
// import EyeSlashImage from '@/assets/icons/eye-slash.png'
import UserImage from '@/assets/icons/user.png'

type InputTypeEnum = 'email' | 'password' | 'user'
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  icon: {
    type: String as PropType<InputTypeEnum>,
    default: 'email'
  },
  type: {
    type: String,
    default: 'string'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const icon = ref('')
const value = ref('')
const inputType = ref(props.type)
const isShowPlaceholder = ref(true)
const isShowPassword = ref(false)

const setShowPlaceholder = (display: boolean = true) => {
  isShowPlaceholder.value = display
}

const toggleShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const onInput = () => {
  emit('update:modelValue', value.value)
}

watch(isShowPassword, () => {
  inputType.value = inputType.value === 'password' ? 'string' : 'password'
})

onMounted(() => {
  switch (props.icon) {
    case 'email':
      icon.value = MailImage
      break

    case 'password':
      icon.value = SecurityImage
      break

    case 'user':
      icon.value = UserImage
      break;
  }
})
</script>

<style>
.ui-input {
  position: relative;

  width: 100%;
  max-width: var(--button-width);
  height: var(--button-height);
  background: var(--input-background);

  border: 2px solid var(--border-color);
  padding: 0 10px;
}

.ui-input__content {
  width: 100%;
  height: 100%;

  background: none;
}

.ui-input__content::placeholder {
  color: var(--placeholder-font);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
}

.ui-input__placeholder {
  position: absolute;
  left: 50px;

  color: var(--placeholder-font);
  font-size: 18px;
  font-weight: 400;
}
</style>
