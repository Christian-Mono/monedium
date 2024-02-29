// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client', '@nuxtjs/algolia'],
  css: ['./assets/css/tailwind.css'],
  algolia: {
    instantSearch: {
      theme: 'algolia',
    },
  },
  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          contentful: {
            host: `https://graphql.contentful.com/content/v1/spaces/${process.env.GQL_CONTENTFUL_SPACES}/environments/master/?access_token=${process.env.GQL_CONTENTFUL_TOKEN}`,
          },
        },
      },
    },
  },
})
