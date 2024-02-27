// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
      GQL_TOKEN: process.env.GQL_TOKEN,
    },
  },
})
