<script setup lang="ts">
const { $markdown } = useNuxtApp()
const route = useRoute()

const slug = route.params.slug
import type { Article } from '../../types/monediumTypes';

const { data, error } = await useAsyncGql('articleCollection', {
    id: slug.toString()
});


if (error.value) {
    console.error(error.value.cause.gqlErrors);
}

const singleArticle = data.value.articleCollection?.items[0] as Article;

</script>

<template>
    <div class="px-12 py-6 ">
        <!-- post section -->

        <div class="pt-6 pb-4 ">

            <div class="py-6">
                <h2 class="text-4xl font-bold">
                    {{ singleArticle?.title }}
                </h2>
                <div class="flex py-4 align-middle gap-x-4">
                    <img :src="(singleArticle?.author?.profilePicture?.url as string)" :alt="singleArticle?.author?.name"
                        class="w-12 h-12 rounded-full" />

                    <div>
                        <div class="flex gap-x-1">
                            <p>{{ singleArticle?.author?.name }}</p>
                            <span>•</span>
                            <button class="text-green-600"> Follow </button>
                        </div>
                        <div class="flex gap-x-2">
                            <p class="font-thin">{{ singleArticle?.readingTime }} mins
                                read</p>
                            <span>•</span>
                            <p>{{ formatDateTime(singleArticle?.creationTime) }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- option tab -->
            <div class="flex gap-x-6 border-y-[1px] border-gray-200 py-2">
                <!-- left side svgs -->
                <div class="flex w-4/6 gap-x-6">
                    <div class="flex gap-x-1">
                        <svg viewBox="0 0 20 20" class="h-6">
                            <g fill="currentColor">
                                <path
                                    d="M3.3 10.4a1.5 1.5 0 1 1 2.2-2.1l2.8 3a.5.5 0 1 1-.7.7l-2.8-3a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M4 8.3a1.5 1.5 0 1 1 2.2-2.1l2.8 2.9a.5.5 0 1 1-.7.7l-2.8-2.9a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M6.2 7.7a1.5 1.5 0 1 1 2.2-2.1l3.1 3.3a.5.5 0 1 1-.7.7l-3.1-3.3a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M10.2 7.5a1.6 1.6 0 0 1 3-.9l.8 1.6a.5.5 0 1 1-.9.4l-.7-1.6a.6.6 0 0 0-1.1.4l.4 1.9a.5.5 0 1 1-1 .2z" />
                                <path
                                    d="M4.7 14.1a.5.5 0 0 1 .7 0l2.4 2.5c.4.4.8.7 1.3.9l.1.1a3.7 3.7 0 0 0 3-.1l.1-.1c.5-.2 1-.5 1.4-.9l.1-.1a3.7 3.7 0 0 0 .9-4.1l-1.5-3.8a.5.5 0 1 1 .9-.4l1.5 3.8a4.7 4.7 0 0 1-1.1 5.1l-.1.1a6 6 0 0 1-1.6 1.1l-.1.1a4.7 4.7 0 0 1-3.8.1l-.1-.1a4.8 4.8 0 0 1-1.6-1.1l-2.4-2.5a.5.5 0 0 1 0-.7" />
                                <path
                                    d="M3.2 13.2a1.5 1.5 0 1 1 2.2-2.1l1.4 1.4a.5.5 0 1 1-.7.7l-1.4-1.4a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7zm5.1-6.3a1.5 1.5 0 1 1 2.2-2.1l.5.5a.5.5 0 1 1-.7.7l-.5-.5a.5.5 0 0 0-.7.7l1.4 1.4a.5.5 0 1 1-.7.7zm4.2-.1a1.5 1.5 0 0 1 2.8-1.2l.8 1.7a.5.5 0 0 1-.9.4l-.8-1.7a.5.5 0 0 0-1 .4l.6 1.7a.5.5 0 0 1-.9.3z" />
                                <path
                                    d="M15.5 7.2a.5.5 0 0 1 .6.3l1.5 3.8a4.7 4.7 0 0 1-1.1 5.1l-.1.1a6.2 6.2 0 0 1-1.7 1.1l-.1.1l-.2-.5.2.5a7 7 0 0 1-1 .4l-1.2.3a.5.5 0 1 1-.3-1l1.2-.3c.3-.1.6-.2.9-.3l.1-.1a5.2 5.2 0 0 0 1.4-1l.1-.1a3.7 3.7 0 0 0 .9-4.1l-1.5-3.8a.5.5 0 0 1 .3-.6M4.2 1.1a.5.5 0 0 1 .7.1l1.9 1.9a.5.5 0 0 1-.8.6L4.1 1.8a.5.5 0 0 1 .1-.7m8-.1a.5.5 0 0 0-.7.2l-.9 1.8a.5.5 0 1 0 .9.5l.9-1.8a.5.5 0 0 0-.2-.7M8.3.5a.5.5 0 0 1 .5.5v1.8a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5" />
                            </g>
                        </svg>
                        <p>{{ singleArticle.claps }}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" />
                    </svg>

                </div>
                <!-- right side svgs -->
                <div class="flex w-2/6 justify-evenly ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M12 16.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6zm10 4V7h-2V6h2V4h1v2h2v1h-2v2z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M10 15.577L15.577 12L10 8.423zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M6.615 22q-.69 0-1.152-.462Q5 21.075 5 20.385v-9.77q0-.69.463-1.152Q5.925 9 6.615 9h2.116v1H6.615q-.23 0-.423.192q-.192.193-.192.423v9.77q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423q-.193-.192-.423-.192h-2.116V9h2.116q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm4.885-6.5V4.613l-2.1 2.1L8.692 6L12 2.692L15.308 6l-.708.713l-2.1-2.1V15.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
                        class="h-6 rounded-full">
                        <path fill="currentColor"
                            d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16" />
                    </svg>
                </div>
            </div>
            <!-- single article img + body -->
            <div class="py-4 gap-y-2 ">

                <img :src="singleArticle?.thumbnail?.url ?? ''" :alt="singleArticle?.title ?? ''" class="object-cover">
                <p v-html="$markdown.render(singleArticle?.content)" class="justify-center py-6 mx-auto prose text-left " />
                <!-- tag -->
            </div>
            <button class="h-15 p-3 justify-center text-black bg-[#f2f2f2] rounded-full w-30">{{ singleArticle?.tag?.tagName
                ?? '' }}</button>
            <!-- ending content option bar -->
            <div class="flex pt-6 gap-x-6">
                <div class="flex w-4/6 gap-x-6">
                    <div class="flex gap-x-1">
                        <svg viewBox="0 0 20 20" class="h-6">
                            <g fill="currentColor">
                                <path
                                    d="M3.3 10.4a1.5 1.5 0 1 1 2.2-2.1l2.8 3a.5.5 0 1 1-.7.7l-2.8-3a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M4 8.3a1.5 1.5 0 1 1 2.2-2.1l2.8 2.9a.5.5 0 1 1-.7.7l-2.8-2.9a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M6.2 7.7a1.5 1.5 0 1 1 2.2-2.1l3.1 3.3a.5.5 0 1 1-.7.7l-3.1-3.3a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7z" />
                                <path
                                    d="M10.2 7.5a1.6 1.6 0 0 1 3-.9l.8 1.6a.5.5 0 1 1-.9.4l-.7-1.6a.6.6 0 0 0-1.1.4l.4 1.9a.5.5 0 1 1-1 .2z" />
                                <path
                                    d="M4.7 14.1a.5.5 0 0 1 .7 0l2.4 2.5c.4.4.8.7 1.3.9l.1.1a3.7 3.7 0 0 0 3-.1l.1-.1c.5-.2 1-.5 1.4-.9l.1-.1a3.7 3.7 0 0 0 .9-4.1l-1.5-3.8a.5.5 0 1 1 .9-.4l1.5 3.8a4.7 4.7 0 0 1-1.1 5.1l-.1.1a6 6 0 0 1-1.6 1.1l-.1.1a4.7 4.7 0 0 1-3.8.1l-.1-.1a4.8 4.8 0 0 1-1.6-1.1l-2.4-2.5a.5.5 0 0 1 0-.7" />
                                <path
                                    d="M3.2 13.2a1.5 1.5 0 1 1 2.2-2.1l1.4 1.4a.5.5 0 1 1-.7.7l-1.4-1.4a.5.5 0 0 0-.7.7l2.8 2.9a.5.5 0 1 1-.7.7zm5.1-6.3a1.5 1.5 0 1 1 2.2-2.1l.5.5a.5.5 0 1 1-.7.7l-.5-.5a.5.5 0 0 0-.7.7l1.4 1.4a.5.5 0 1 1-.7.7zm4.2-.1a1.5 1.5 0 0 1 2.8-1.2l.8 1.7a.5.5 0 0 1-.9.4l-.8-1.7a.5.5 0 0 0-1 .4l.6 1.7a.5.5 0 0 1-.9.3z" />
                                <path
                                    d="M15.5 7.2a.5.5 0 0 1 .6.3l1.5 3.8a4.7 4.7 0 0 1-1.1 5.1l-.1.1a6.2 6.2 0 0 1-1.7 1.1l-.1.1l-.2-.5.2.5a7 7 0 0 1-1 .4l-1.2.3a.5.5 0 1 1-.3-1l1.2-.3c.3-.1.6-.2.9-.3l.1-.1a5.2 5.2 0 0 0 1.4-1l.1-.1a3.7 3.7 0 0 0 .9-4.1l-1.5-3.8a.5.5 0 0 1 .3-.6M4.2 1.1a.5.5 0 0 1 .7.1l1.9 1.9a.5.5 0 0 1-.8.6L4.1 1.8a.5.5 0 0 1 .1-.7m8-.1a.5.5 0 0 0-.7.2l-.9 1.8a.5.5 0 1 0 .9.5l.9-1.8a.5.5 0 0 0-.2-.7M8.3.5a.5.5 0 0 1 .5.5v1.8a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5" />
                            </g>
                        </svg>
                        <p>{{ singleArticle.claps }}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" />
                    </svg>

                </div>
                <!-- right side svgs -->
                <div class="flex w-2/6 justify-evenly ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M12 16.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6zm10 4V7h-2V6h2V4h1v2h2v1h-2v2z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M10 15.577L15.577 12L10 8.423zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-6">
                        <path fill="currentColor"
                            d="M6.615 22q-.69 0-1.152-.462Q5 21.075 5 20.385v-9.77q0-.69.463-1.152Q5.925 9 6.615 9h2.116v1H6.615q-.23 0-.423.192q-.192.193-.192.423v9.77q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423q-.193-.192-.423-.192h-2.116V9h2.116q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm4.885-6.5V4.613l-2.1 2.1L8.692 6L12 2.692L15.308 6l-.708.713l-2.1-2.1V15.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
                        class="h-6 rounded-full">
                        <path fill="currentColor"
                            d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- footer author -->
    <div class="bg-[#e8e8e8] w-[100%] pt-12">
        <div class=" items-center justify-start px-[20%] gap-x-2 ">
            <div class="mb-2">
                <img :src="singleArticle?.author?.profilePicture?.url ?? ''" :alt="singleArticle?.author?.name"
                    class="object-cover w-16 h-16 bg-white rounded-full" />
            </div>
            <div class="flex gap-x-6 border-y-[1px] border-gray-200 py-2">
                <!-- option tab > left side svgs -->
                <div class="flex w-4/6 gap-x-6">
                    <div class=" gap-y-2">
                        <p class="text-xl font-bold">Written by {{ singleArticle?.author?.name }}</p>
                        <div class="flex gap-x-2">
                            <p>{{ singleArticle?.author?.followers }} Followers</p>
                            <span>•</span>
                            <p class="font-thin">{{ singleArticle?.author?.positionRole }}</p>
                        </div>
                        <p>{{ singleArticle?.author?.bio }}</p>
                    </div>
                </div>
                <!-- following button -->
                <div class="flex justify-end w-2/6 gap-x-2">
                    <button class="w-20 h-10 text-white bg-black rounded-full">Follow</button>
                    <button class="w-10 h-10 text-white bg-black rounded-full">mail</button>
                </div>
            </div>
        </div>
    </div>
</template>
