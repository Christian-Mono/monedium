<script setup lang="ts">
import { useScroll } from '@vueuse/core'
const data = await GqlArticles()
const articles = data.articleCollection?.items


const carousel = ref<HTMLElement | null>(null)
const { x, arrivedState } = useScroll(carousel, { behavior: 'smooth' })
/* 
1. x = right and left scroll
2. arrivedState =  false when scrolling x-axis || true when right limit or left limit
 */
const filters = ['For you', 'Following', 'Web Development', 'Data Science', 'UX Design', 'Python', 'Artificial Intelligence', 'React', 'Coding', 'Programming', 'JavaScript']
const currentFilter = ref(filters[0])

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
                            class="absolute p-2 pr-14 bg-gradient-to-r from-white to-transparent z-2 top-6"><svg
                                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                                class="h-4 mt-3 ">
                                <path fill="currentColor"
                                    d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0" />
                            </svg>
                        </button>
                    </div>

                    <div ref="carousel"
                        class="flex pt-10 overflow-x-hidden mx-14 snap-x gap-x-12 border-b-[1px] border-b-slate-400">
                        <div v-for="(filter, index) in filters" :key="index" class="snap-normal whitespace-nowrap"
                            :class="{ 'border-b-[1px] pb-2 border-b-black': currentFilter === filter }">
                            <button @click="currentFilter = filter">{{ filter }}</button>
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
                    <!-- end carousel -->

                    <Article v-for="article in articles" :key="article?.sys.id" v-bind="article" :author="article?.author"
                        :slug="article?.slug" :id="article?.sys.id" />

                </div>
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
                <div class="py-2">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="/img/staffUser1.png" alt="Picasso propic" class="h-6 rounded-full" />
                        <p>Pablo Picasso</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        Shattering conventions: why I paint the unseen
                    </p>
                </div>
                <!-- 2nd -->
                <div class="">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="/img/staffUser2.png" alt="Basquiat propic" class="h-6 rounded-full" />
                        <p>Jean-Michel Basquiat</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        Unmasking power structures, a street art perspective.
                    </p>
                </div>
                <!-- 3rd -->
                <div class="py-2">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="/img/staffUser3.png" alt="Warhol propic" class="h-6 rounded-full" />
                        <p>Andy Warhol</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        From soup cans to stardom, exploring art in everyday objects
                    </p>
                </div>
                <!-- see full staff page -->
                <button class="py-4 text-sm text-green-600 ">See the full list</button>
                <!-- recommended topics -->
                <h2 class="pt-8 pb-2 font-bold text-md">Recommended topics</h2>
                <!-- tags -->
                <div class="flex-wrap -ml-4 space-x-4 space-y-2 ">
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Data Science
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Technology
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Self Improvement
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Writing
                    </button>
                    <button class="p-2 bg-gray-400 rounded-3xl">
                        Relationship
                    </button>
                </div>
                <button class="py-4 text-sm text-green-600">See more topics</button>
                <!-- Follow suggestions -->
                <h2 class="pt-8 pb-2 font-bold text-md">Who to follow</h2>
                <!-- profiles -->

                <div class="grid grid-flow-col grid-rows-3 gap-1">
                    <div class="row-span-3">
                        <img src="/img/suggestedUser.png" alt="monet" class="h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Claude Monet</div>
                    <div class="col-span-2 row-span-2 text-xs font-thin "> Impressionist/Social media manager</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>

                </div>
                <div class="grid grid-flow-col grid-rows-3 gap-1">
                    <div class="row-span-3">
                        <img src="/img/suggestedUser1.png" alt="monet" class="h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Francisco Goya</div>
                    <div class="col-span-2 row-span-2 text-xs font-thin "> Romanticism/Crysis manager</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>

                </div>
                <div class="grid grid-flow-col grid-rows-2 gap-1">
                    <div class="row-span-2">
                        <img src="/img/suggestedUser2.png" alt="monet" class="justify-center h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Pierre-Auguste Renoir</div>
                    <div class="col-span-2 row-span-1 text-xs font-thin ">Impressionist/Video maker</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>
                </div>
                <button class="py-4 text-sm text-green-600 ">See more suggestions</button>
                <h2 class="pt-8 pb-2 font-bold text-md">Reading list</h2>
                <!-- bookmark -->
                <div class="flex flex-wrap m-0 text-sm">
                    <span>Click the <img src="/icons/bookmark.png" alt="bookmark icon" class="inline-block h-6">
                        on any story to easily add it to your reading list or a custom list that you can
                        share</span>
                </div>
                <!-- Links -->
            </div>
        </div>
    </div>
</template>
  