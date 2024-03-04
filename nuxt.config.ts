// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client', '@nuxtjs/algolia'],
  css: ['./assets/css/tailwind.css'],
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,

    instantSearch: {
      theme: 'satellite',
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
