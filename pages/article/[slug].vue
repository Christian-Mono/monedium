<script setup lang="ts">
const { $markdown } = useNuxtApp()
const route = useRoute()

const slug = route.params.slug
import type { SinglePost } from '../../types/monediumTypes';

const { data, error } = await useAsyncGql('articleCollection', {
    id: slug.toString()
});


if (error.value) {
    console.error(error.value.cause.gqlErrors);
}

const singleArticle = data.value.articleCollection?.items[0];



const article = computed((): SinglePost | undefined => {
    if (data.value.articleCollection?.items[0]) {
        const
            { title,
                slug,
                author,
                creationTime,
                content,
                readingTime,
                thumbnail,
                tag,
                claps
            } = data.value.articleCollection?.items[0]


        const authorToRet: SinglePost['author'] = {
            bio: author?.bio ?? '',
            followers: author?.followers ?? 0,
            name: author?.name ?? '',
            profilePicture: { url: author?.profilePicture?.url ?? '' },
            positionRole: author?.positionRole ?? ''
        }
        const thumbnailToRet: SinglePost['thumbnail'] = {
            url: thumbnail?.url ?? ''
        }

        const toRet = { title: title ?? '', tag: tag?.tagName ?? '', slug: slug ?? '', author: authorToRet, thumbnail: thumbnailToRet, claps: claps ?? 0, readingTime: readingTime ?? 0, creationTime: creationTime ?? '', content: content ?? '' }


        return toRet
    }
})

</script>

<template>
    <SinglePost v-if="article" v-bind="article" />
</template>
