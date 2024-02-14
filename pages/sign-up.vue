<template>
  <div>
    <page-form
      image-title="Connect with any device."
      image-subtitle="Everything you need is an internet connection."
      :image="TasksImage"
    >
      <h1 class="title">Create your account</h1>
      <p class="title-description">Unlock all Features!</p>

      <div class="input-list mt-6">
        <ui-input
          v-model="form.username"
          type="string"
          placeholder="Username"
          icon="user"
        />
        <ui-input
          v-model="form.email"
          type="email"
          placeholder="Email"
        />
        <ui-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        />
        <ui-input
          v-model="form.confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      <ui-checkbox
        v-model="form.isActive"
        class="mt-3"
      >
        <p class="form-description">Accept <NuxtLink to="/sign-up">terms and conditions</NuxtLink></p>
      </ui-checkbox>

      <ui-button
        text="sign up"
        :disabled="isButtonDisabled"
        @click="sendData"
      />

      <p class="form-description mt-5">You have account? <NuxtLink to="/login">Login now</NuxtLink></p>
    </page-form>
  </div>
</template>

<script lang="ts" setup>
import TasksImage from '@/assets/images/tasks.png'

const userStore = useUserStore()

const user = computed(() => userStore.getUserInfo)
const isAuth = computed(() => userStore.isAuth)
const form = reactive({
  isActive: false,
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const isConfirmedPassword = computed(() => {
  if (form.password && form.confirmPassword == form.password) return true
  return false
})

const isButtonDisabled = computed(() => {
  if (form.isActive && form.username && form.email && isConfirmedPassword.value && !isAuth.value) {
    return false
  }
  return true
})

const sendData = async () => {
  userStore.signUp(form)
}

onMounted(() => {
  form.isActive = true
  form.username = user.value.username || ''
  form.email = user.value.email || ''
  form.password = user.value.password || ''
  form.confirmPassword = user.value.password || ''
})
</script>
