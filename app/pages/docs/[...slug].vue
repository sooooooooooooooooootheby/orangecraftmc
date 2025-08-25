<template>
	<div v-if="docs" class="flex flex-col items-center">
		<div class="flex h-82 w-full items-center overflow-hidden" v-if="docs.cover">
			<img :src="docs.cover" alt="cover" class="h-full w-full object-cover" />
		</div>
		<div class="relative flex w-3xl pt-8">
			<div class="typography flex-1">
				<ContentRenderer :value="docs" />
			</div>
			<div class="ml-4 fixed right-12 w-xs overflow-hidden" v-if="docs.isDir">
				<p class="mb-2 text-lg font-bold">On This Page</p>
				<ul v-for="item in dir">
					<li :key="item.id" class="text-gray-700">
						<a :href="'#' + item.id" class="hover:text-orange-400">
							{{ item.text }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "docs",
});

interface dir {
	tag: string;
	id: string;
	text: string;
}

const dir = ref<dir[]>([]);

const route = useRoute();
const { data: docs } = await useAsyncData(route.path, async () => {
	const d = await queryCollection("docs").path(route.path).first();
	dir.value =
		d?.body.value
			?.filter((item: any) => typeof item[0] === "string" && item[0].startsWith("h"))
			.map((item: any) => ({
				tag: item[0],
				id: item[1]?.id || "",
				text: item[2],
			})) || [];

	return d;
});
</script>
