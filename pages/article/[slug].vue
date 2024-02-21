<script setup lang="ts">
const route = useRoute()
console.log("ID:", route.query.id)
// @ts-ignore

const data = await GqlArticle()
const articles = data.articleCollection?.items

console.log("DATA:", data)

</script>
<template>
    <pre> {{ data }}</pre>
    <!--  <SinglePost v-bind="article" /> -->
</template>