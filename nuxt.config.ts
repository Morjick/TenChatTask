// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'TenChat',
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  css: [
    '~/public/main.css'
  ],
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
