<template>
	<div class="relative mx-4 mb-4 rounded-lg px-2 py-1 outline-1 outline-gray-200">
		<div class="flex items-center">
			<Icon name="gravity-ui:magnifier" class="mr-2 text-gray-600" />
			<input type="text" v-model="search" class="flex-1 text-sm focus:outline-0" placeholder="搜索..." />
		</div>
		<ul v-if="results.length" class="absolute z-2 mt-4 p-2 max-h-[50vh] overflow-auto rounded-xl border-1 border-gray-200 bg-gray-50">
			<li v-for="item in results" :key="item.id" class="cursor-pointer rounded py-1 hover:bg-gray-100">
				<NuxtLink :to="item.id" class="block" @click="search = ''">
					<strong class="text-gray-800">{{ item.title }}</strong>
					<p class="text-xs text-gray-500">{{ item.content.slice(0, 80) }}...</p>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import Fuse from "fuse.js";

const search = ref<string>("");
const { data: sections } = await useAsyncData("search-sections", () => queryCollectionSearchSections("docs", { ignoredTags: ["code"] }));

const fuse = computed(() =>
	sections.value
		? new Fuse(sections.value, {
				keys: ["title", "content"],
				threshold: 0.3,
			})
		: null
);

const results = computed(() =>
	fuse.value && search.value
		? fuse.value
				.search(search.value)
				.slice(0, 10)
				.map((r) => r.item)
		: []
);
</script>
