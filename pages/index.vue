<template>
  <div>
    <page-form
      image-title="It's just OTP verification"
      image-subtitle="You are one step away from recovering your password."
      :image="DevicesImage"
    >
      <h1
        class="title"
        style="text-align: left;"
      >Enter OTP</h1>
      <p
        class="form-description"
        style="text-align: left;"
      >Sent OTP on <NuxtLink to="/">johndoe@gmail.com</NuxtLink></p>
      <button class="change-button">Change email</button>

      <ui-number-board
        :count="6"
        class="my-6"
      />

      <div>
        <ui-button
          text="submit"
        />
      </div>
    </page-form>
  </div>
</template>

<script lang="ts" setup>
import DevicesImage  from '@/assets/images/devices.png'

</script>

<style lang="scss" scoped>
.change-button {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-color);
}
</style>
