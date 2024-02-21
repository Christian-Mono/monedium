// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client'],
  'graphql-client': {
    clients: {
      default: {
        host: 'https://graphql.contentful.com/content/v1/spaces/y4cbujh9kpq2/environments/master/',
        token: {
          type: 'Bearer',
          name: 'Authorization',
          value: 'A5_RDUNnvlO_KxiE3yfmODA1m9ACYI2bHvO903ztM-Y',
        },
      },
    },
  },
})
