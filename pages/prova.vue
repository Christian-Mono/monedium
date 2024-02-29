        
<script setup lang="ts">
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es'
const indexName = 'test_index'
const algolia = useAlgoliaRef()


</script>
<template>
    <div>
        <div> <ais-instant-search :index-name="indexName" :search-client="algolia" `future.preserveSharedStateOnUnmount`:
                true>
                <ais-search-box />
                <ais-hits />
            </ais-instant-search>
        </div>
    </div>
</template>
