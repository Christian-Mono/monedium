<!-- component useful to solve re-rendering problems of single article -->
<script lang="ts">
export default defineComponent({
    props: {
        content: {
            type: String,
            required: true,
        },
        inline: { type: Boolean, required: false, default: true },
        tag: { type: String, required: false, default: "p" },
    },
    setup(props) {
        const { $markdown } = useNuxtApp()
        // renderInline() removes the <p> tag
        const markdownContent = computed(() =>
            props.inline
                ? $markdown.renderInline(props.content)
                : $markdown.render(props.content)
        )
        const renderedTag = computed(() => (!props.inline ? "div" : props.tag))
        return () =>
            h(renderedTag.value, {
                class: props.inline
                    ? " markdown-content__markdown"
                    : " markdown-content__markdown whitespace-pre-line",
                innerHTML: markdownContent.value,
            })
    },
})
</script>