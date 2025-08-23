<template>
    <div v-if="docs">
        <div class="w-full h-82 overflow-hidden flex items-center">
            <img :src="docs.cover" alt="cover" class="w-full object-cover" />
        </div>
        <div class="typography max-w-3xl mx-auto my-8 px-4">
            <ContentRenderer :value="docs" />
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "docs",
});

const route = useRoute();
const { data: docs } = await useAsyncData(route.path, () => {
	return queryCollection("docs").path(route.path).first();
});
</script>
