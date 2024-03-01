        
<script setup lang="ts">
const { result, search } = useAlgoliaSearch('monedium') // pass your index name as param

onMounted(async () => {
    await search({ query: 'monedium' });
})
</script>
<template>
    <div>
        {{ result }}
    </div>
</template>
