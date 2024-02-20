// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          default: {
            host: process.env.GQL_HOST,

            // Basic
            token: process.env.NUXT_CONTENTFUL_ACCESS_KEY,
          },
        },
      },
    },
  },
})

/*  
  
  'graphql-client': {
    watch: true,
    autoImport: true,
    documentPaths: ['./queries/'],
    clients: {
      default: {
        host: 'https://graphql.contentful.com/content/v1/spaces/y4cbujh9kpq2/explore?access_token=A5_RDUNnvlO_KxiE3yfmODA1m9ACYI2bHvO903ztM-Y',
        // host: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_CONTENTFUL_SPACE_ID}/enviroments/${process.env.NUXT_CONTENTFUL_ENVIROMENT}`,
        token: {
          type: 'Bearer',
          name: 'Authorization',
          value: process.env.NUXT_CONTENTFUL_ACCESS_KEY,
        },
      },
    },
  }, 
  
  runtimeConfig: {
    public: {
      graphql: {
        clients: {
          default: {
            endpoint:
              'https://graphql.contentful.com/content/v1/spaces/y4cbujh9kpq2/enviroments/master',
          },
        },
      },
    },
  }, */
