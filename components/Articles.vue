<script setup lang="ts">
import { formatDateTime } from '~/utils/utils.js';
const data = await GqlArticles()
const articles = data.articleCollection?.items

/* Interfaces */
interface ArticlesResponse {
  articleCollection: {
    items: Article[]
  }
}
interface Article {
  title: string
  content: string
  creationTime: string
  readingTime: string
  thumbnail: {
    url: string
  }
  sys: {
    id: string
  }
  author: {
    name: string
    profilePicture: {
      url: string
    }
  }
  tag: {
    tagName: string
  }
  formattedCreationTime?: string
}
</script>
<template>
  <div class="p-4 pt-6 ">
    <!-- post section -->
    <div v-for="article in articles" class="pb-4 pt-6 border-b-[1px] border-b-gray-200">
      <!-- header -->
      <div class="flex py-2 gap-x-2">
        <img v-if="article?.thumbnail?.url" :src="article?.author?.profilePicture?.url" :alt="article.author?.name"
          class="w-6 h-6 rounded-full" />
        <p>{{ article?.author?.name }}</p>
        <span>•</span>
        <p>{{ formatDateTime(article?.creationTime) }}</p>
      </div>
      <!-- grid of post -->

      <div class="grid grid-cols-4 grid-rows-3 gap-2">
        <h2 class="h-8 col-span-3 row-span-1 text-2xl font-bold">
          {{ article?.title }}
        </h2>
        <p class="col-span-3 row-span-1 line-clamp-2">
          {{ article?.content }}
        </p>
        <div class="col-span-3 row-span-1 py-2 ">
          <div class="flex">
            <div class="flex items-center justify-start w-3/4 gap-x-4">
              <button class="px-2 bg-gray-400 rounded-full">{{ article?.tag?.tagName }}</button>
              <p class="mx-auto text-center">{{ article?.readingTime }} mins to read</p>
            </div>
            <div class="flex justify-end w-1/4 pr-3 gap-x-4 place-self-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                <path fill="currentColor"
                  d="M12 16.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6zm10 4V7h-2V6h2V4h1v2h2v1h-2v2z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21" class="h-6 rounded-full">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  d="M10 19c4.438 0 8-3.526 8-7.964C18 6.598 14.438 3 10 3c-4.438 0-8 3.598-8 8.036S5.562 19 10 19m-4-8h8" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
                class="h-6 rounded-full">
                <path fill="currentColor"
                  d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16" />
              </svg>
            </div>
          </div>
        </div>
        <img v-if="article?.thumbnail?.url" :src="article?.thumbnail?.url" :alt="article.title"
          class="col-span-1 col-start-4 row-span-2 row-start-1 place-self-center h-28">
      </div>
    </div>
  </div>
</template>