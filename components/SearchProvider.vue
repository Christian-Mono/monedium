<script setup>

const { result, search } = useAlgoliaSearch('Articles')
const hits = ref([])


const fetchSearchResults = async (e) => {
    if (e.target.value.length >= 1) {
        await search({ query: e.target.value })

        hits.value = result.value.hits
    }
    else {
        hits.value = []
    }
}
</script>

 

<template>
    <div>
        <!--  <pre>{{ result.hits[0].article.title }}</pre> -->
        <div class="relative">
            <div class=" hidden relative sm:flex items-center h-10 px-2 my-2 font-semibold bg-[#F9F9F9] rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                    class="fill-current text-[#a8a8a8]">
                    <path fill="#currentColor"
                        d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" />
                </svg>
                <input type="search" id="search" @input="fetchSearchResults"
                    class="w-full mx-2 h-6 font-bold bg-[#F9F9F9] border border-none  focus:outline-none text-[#171717] placeholder:text-[#a8a8a8] placeholder:font-thin"
                    placeholder="Search" />

            </div>
            <div v-if="hits.length" class="absolute z-10 flex justify-center top-12">
                <ul class="text-gray-900 bg-white rounded-b-2xl w-96 ">
                    <li v-for="hit in hits" :key="hit.objectID"
                        class="w-full bg-[#E8E8E8] border border-gray-400 rounded-lg px-6 py-2 " @click="hits = []">
                        <NuxtLink :to="`article/${hit.article.slug}`" class="flex">
                            <img class="flex w-20 " :src="hit.article.thumbnail?.url">
                            <p class="ml-4"> {{ hit?.article?.title }}</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
 