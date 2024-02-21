<script setup lang="ts">
const route = useRoute()
// Access the id from the route query
/* console.log("data", id)
try {

    const data = await GqlArticle()
    console.log(data)
} catch (error) {
    console.log(error)

}
 */
const slug = route.params.slug

console.log("SLUG ", slug)
const { data, error, pending, refresh } = await useAsyncGql('articleCollection', {
    id: slug.toString()
});

console.log(data.value);

if (error.value) {
    // eslint-disable-next-line no-console
    console.error(error.value.cause.gqlErrors);
}
</script>
<template>
    <div>Ciao</div>
    <pre>{{ data }}</pre>
    <!--  <SinglePost v-bind="article" /> -->
</template>