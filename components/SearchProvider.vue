<template>
    <div>
        <AisInstantSearchSsr>
            <AisConfigure :hits-per-page.camel="4" v-if="$route.params.indexName === 'Articles'" />

            <AisInfiniteHits show-previous>
                <template #loadPrevious="{ isFirstPage, refinePrevious }">
                    <button :disabled="isFirstPage" @click="refinePrevious">
                        Load less
                    </button>
                </template>
                <template v-slot="{ items, refineNext, isLastPage }">
                    <div class="cont">
                        <div v-for="item in items" :key="item.objectID" class="">
                            <img :src="item.article.thumbnail.url" />
                            <NuxtLink :to="`article/${item?.article.slug}`" class="">
                                {{ item.article.title }}
                            </NuxtLink>
                        </div>
                    </div>
                    <button :disabled="isLastPage" @click="refineNext">
                        Load more
                    </button>
                </template>
            </AisInfiniteHits>
        </AisInstantSearchSsr>
    </div>
    <!-- 
    <div>
        <div class=" hidden sm:flex items-center h-10 px-2 my-2 font-semibold bg-[#F9F9F9] rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                class="fill-current text-[#a8a8a8]">
                <path fill="#currentColor"
                    d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" />
            </svg>
            <input
                class="w-full mx-2 h-6 font-bold bg-[#F9F9F9] border border-none  focus:outline-none text-[#171717] placeholder:text-[#a8a8a8] placeholder:font-thin"
                placeholder="Search" />

        </div>
    </div> -->
</template>
 
<script>
import { renderToString } from "vue/server-renderer";
import {
    AisInstantSearchSsr,
    AisRefinementList,
    AisInfiniteHits,
    AisIndex,
    AisConfigure,
    // @ts-ignore
} from "vue-instantsearch/vue3/es/index.js";

export default defineNuxtComponent({
    components: {
        AisInstantSearchSsr,
        AisRefinementList,
        AisInfiniteHits,
        AisIndex,
        AisConfigure,
    },
    inject: ["$_ais_ssrInstantSearchInstance"],
    async serverPrefetch() {
        const s = await this["$_ais_ssrInstantSearchInstance"].findResultsState({
            component: this,
            renderToString,
        });
        this.$nuxt.ssrContext.payload.data.algoliaState = s;
    },
    props: {
        indexName: {
            type: String,
            required: false,
            default: null,
        },
    },
    mounted() {
        console.log(this.$_ais_ssrInstantSearchInstance);
        setTimeout(() => { }, 5000);
    },
    async beforeMount() {
        if (this.$nuxt.payload.data.algoliaState) {
            this.$_ais_ssrInstantSearchInstance.hydrate(
                this.$nuxt.payload.data.algoliaState,
            );
        } else {
            // somehow, it needs to be disposed and refreshed when i change route with client side navigation
            this.instantsearch.dispose();

            this.$nextTick(() => {
                this.$nextTick(() => {
                    this.instantsearch.helper.setIndex(this.indexName).search();
                });
            });
        }
        // avoid double hydration
        delete this.$nuxt.payload.data.algoliaState;
    },
});
</script>

 