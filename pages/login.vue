<template>
  <div>
    <page-form
      image-title="Connect with any device."
      image-subtitle="Everything you need is an internet connection."
      :image="DeviceImage"
    >
      <h1 class="title">Create your account</h1>

      <ui-remark text="with email" />

      <div class="input-list">
        <ui-input
          type="email"
          placeholder="Email"
          v-model="form.email"
        />
        <ui-input
          type="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>

      <ui-button
        text="log in"
        :disabled="isDisabledButton"
        @click="logIn"
      />

      <p class="form-description mt-5">Don’t have account? <NuxtLink to="/sign-up">Create an account</NuxtLink></p>
    </page-form>
  </div>
</template>

<script lang="ts" setup>
import DeviceImage from '@/assets/images/devices.png'

const form = reactive({
  email: '',
  password: ''
})

const userStore = useUserStore()

const isAuth = computed(() => userStore.isAuth)

const isDisabledButton = computed(() => {
  if (!form.email || !form.password) return true
  return false
})

const logIn = async () => {
  await userStore.logIn({
    email: 'kminchelle',
    password: '0lelplR'
  })
  await navigateTo('/')
}

onMounted(async () => {
  if (isAuth.value) {
    const isLogoutConfirm = confirm('Вы уже авторизированы. При переходе на эту строницу могут быть утеряны все данные.')
  
    if (isLogoutConfirm) {
      userStore.logout()
    } else {
      await navigateTo('/sign-up')
    }
  }
})
</script>
