<template>
	<div v-if="docs" class="flex flex-col items-center">
		<div class="flex h-[320px] w-full items-center overflow-hidden" v-if="docs.cover">
			<img :src="docs.cover" alt="cover" class="h-full w-full object-cover" />
		</div>
		<div class="pt-8">
			<div class="mx-auto w-full max-w-[1200px] px-4 md:px-6">
				<div class="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1fr)_16rem]" :class="{ 'flex!': !docs.isDir }">
					<main class="w-full min-w-0" :class="{ 'max-w-[1200px]': !docs.isDir, 'max-w-[65ch]': docs.isDir }">
						<div class="typography mx-auto">
							<ContentRenderer :value="docs" />
						</div>
					</main>

					<aside v-if="docs.isDir" class="hidden w-64 flex-shrink-0 self-start md:block">
						<div class="sticky top-4 max-h-[calc(100vh-1rem)] overflow-auto">
							<p class="mb-2 text-lg font-bold">On This Page</p>
							<ul>
								<li v-for="item in dir" :key="item.id" class="text-sm text-gray-700">
									<a :href="'#' + item.id" class="block py-1 hover:text-orange-400">
										{{ item.text }}
									</a>
								</li>
							</ul>
						</div>
					</aside>
				</div>
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

useSeoMeta({
	title: `${docs.value?.title} | Orange Craft Mc`,
	ogTitle: `${docs.value?.title} | Orange Craft Mc`,
});
</script>
