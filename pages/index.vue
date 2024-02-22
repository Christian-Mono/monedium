<script setup lang="ts">
import { useScroll, useSorted } from '@vueuse/core'
/* graphql */
const data = await GqlArticles()
const articles = data.articleCollection?.items
/* who to follow */
const uniqueAuthors = articles?.filter((author, index) => {
    return index === articles.findIndex(name => author?.author?.name === name?.author?.name)
})
const tags = await GqlTags()
const tagArray = tags?.tagCollection?.items
/* vue use */

const carousel = ref<HTMLElement | null>(null)
const { x, arrivedState } = useScroll(carousel, { behavior: 'smooth' })
/* 
1. x = right and left scroll
2. arrivedState =  false when scrolling x-axis || true when right limit or left limit
 */
const currentFilter = ref(tagArray)

</script>
<template>
    <div class="px-16 mx-auto">
        <div class="flex">
            <!-- ############### MAIN/lEFT COLUMN ###############  -->
            <!-- Main feed -->
            <div class="w-4/6 pr-4 overflow-auto ">
                <!-- <div v-for=" post in posts" :key="post.id"></div> -->

                <!--Literal categories filter   -->
                <div class="relative ">
                    <div class="absolute inset-y-0 left-0 pr-20 ">
                        <!-- add category button -->
                        <button v-if="arrivedState.left" class="absolute p-2 mt-3 rounded-full z-2 top-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                                class="h-4 ">
                                <path fill="currentColor"
                                    d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z" />
                            </svg>
                        </button>
                        <!-- scroll left button -->
                        <button v-else @click="x -= 60"
                            class="absolute p-2 pr-14 bg-gradient-to-r from-white to-transparent z-2 top-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                                class="h-4 mt-3 ">
                                <path fill="currentColor"
                                    d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0" />
                            </svg>
                        </button>
                    </div>

                    <div ref="carousel"
                        class="flex pt-10 overflow-x-hidden mx-14 snap-x gap-x-12 border-b-[1px] border-b-slate-400">
                        <!-- ###########-TAGS GQL-########### -->
                        <div v-for="(tag, index) in tagArray" :key="index" class="snap-normal whitespace-nowrap"
                            :class="{ 'border-b-[1px] pb-2 border-b-black': currentFilter === tagArray }">
                            <button @click="currentFilter = tag">{{ tag?.tagName }}</button>
                        </div>
                        <div class="absolute inset-y-0 right-0">
                            <!-- hidden when reaches the limit on right side -->
                            <button v-if="arrivedState.right" class="hidden" />
                            <!-- scroll right button -->
                            <button v-else @click="x += 60"
                                class="absolute right-0 p-2 pl-14 z-2 bg-gradient-to-l from-white to-transparent top-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                                    class="h-4 mt-3">
                                    <path fill="currentColor"
                                        d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- ###########-ARTICLES GQL-########### -->
                <Article v-for="article in articles" :key="article?.sys.id" v-bind="article" :author="article?.author"
                    :slug="article?.slug" :id="article?.sys.id" />
            </div>

            <!-- ############### RIGHT COLUMN ###############  -->

            <!-- Staff pick -->
            <div class="sticky top-0 w-2/6 px-8 border-2 border-l-gray-200">
                <!--  <div v-for="pick in staffPicks" :key="pick.id">
                </div> -->
                <div class="items-center py-8 text-center">
                    <button class="w-11/12 p-2 text-white bg-black rounded-2xl">Get unlimited access </button>
                </div>
                <h2 class="py-4 font-bold">
                    Staff pick
                </h2>
                <!-- staff post -->
                <div v-for="staff in articles?.slice(0, 3)" :key="staff?.sys.id" class="py-2">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img :src="staff?.author?.profilePicture?.url" alt="Picasso propic"
                            class="object-cover h-6 rounded-full" />
                        <p>{{ staff?.author?.name }}</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        {{ staff?.title }}
                    </p>
                </div>

                <!-- see full staff page -->
                <button class="py-4 text-sm text-green-600 ">See the full list</button>
                <!-- recommended topics -->
                <h2 class="pt-8 pb-2 font-bold text-md">Recommended topics</h2>
                <!-- tags -->
                <div class="flex-wrap -ml-4 space-x-4 space-y-2 ">
                    <button v-for="recommendedTopic in tagArray?.slice(0, 5)" :key="recommendedTopic?.sys.id"
                        class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        {{ recommendedTopic?.tagName }}
                    </button>
                </div>
                <button class="py-4 text-sm text-green-600">See more topics</button>
                <!-- Follow suggestions -->
                <h2 class="pt-8 pb-2 font-bold text-md">Who to follow</h2>
                <!-- profiles -->

                <div v-for="suggestedUser in uniqueAuthors?.slice(0, 3)" class="flex py-4 gap-x-6">
                    <div class="flex justify-start col-span-1 row-span-3 m-0">
                        <img :src="suggestedUser?.author?.profilePicture?.url" alt="monet"
                            class="flex-1 w-8 h-8 rounded-full">
                    </div>
                    <div class="flex flex-col ">
                        <div class="static font-semibold text-md">{{ suggestedUser?.author?.name }}</div>
                        <div class="static text-xs font-thin "> {{ suggestedUser?.author?.positionRole }}
                        </div>
                    </div>

                    <button class=" bg-white ml-auto border-black  rounded-full border-[1px] w-20 h-8 p-1">follow</button>

                </div>
                <button class="py-4 text-sm text-green-600 ">See more suggestions</button>
                <h2 class="pt-8 pb-2 font-bold text-md">Reading list</h2>
                <!-- bookmark -->
                <div class="flex flex-wrap m-0 text-sm">
                    <span>Click the <img src="/icons/bookmark.png" alt="bookmark icon" class="inline-block h-6">
                        on any story to easily add it to your reading list or a custom list that you can
                        share</span>
                </div>
            </div>
        </div>
    </div>
</template>
  