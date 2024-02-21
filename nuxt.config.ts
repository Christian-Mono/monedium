// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      'graphql-client': {
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./'],
        preferGETQueries: false,
        silent: true,
        retainToken: true,
        clients: {
          default: {
            host: process.env.GQL_HOST,

            token: {
              type: 'Bearer',
              name: 'Authorization',
              value: process.env.NUXT_CONTENTFUL_ACCESS_KEY,
            },
          },
        },
      },
    },
  },
})
