<template>
	<div class="h-screen w-68 overflow-y-auto border-r border-gray-200 bg-gray-50">
		<NuxtLink to="/" class="flex w-full items-center justify-center gap-3 py-6">
			<img src="/orange.png" alt="logo" class="w-8" />
			<span class="font-bold text-gray-800">Orange Craft MC</span>
		</NuxtLink>
		<div class="mt-4 flex flex-col gap-1 px-4">
			<div v-for="item in main_list">
				<NuxtLink
					:to="item.path"
					class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-200"
					:class="{ 'bg-gray-300 text-gray-800': isPath(item.path) }"
				>
					<Icon :name="item.icon" class="text-xl" />
					<span class="flex-1 text-sm">{{ item.title }}</span>
					<div class="size-1 rounded-full bg-gray-600" v-if="isPath(item.path)"></div>
				</NuxtLink>
			</div>
			<div class="my-2 h-0 w-full border-t-1 border-gray-200"></div>
			<div>
				<div class="mb-2 ml-3 flex items-center gap-2 text-gray-600">
					<Icon name="gravity-ui:magic-wand" class="text-xl" />
					<p class="flex-1 text-sm">特色玩法</p>
				</div>
				<div class="flex flex-col gap-1">
					<div v-for="item in playing_list" class="ml-5 border-l-1 border-gray-200 pl-2">
						<NuxtLink
							:to="item.path"
							class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-200"
							:class="{ 'bg-gray-300 text-gray-800': isPath(item.path) }"
						>
							<Icon :name="item.icon" class="text-xl" />
							<span class="flex-1 text-sm">{{ item.title }}</span>
							<div class="size-1 rounded-full bg-gray-600" v-if="isPath(item.path)"></div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: main_list } = await useAsyncData("main", () => {
	return queryCollection("main_list").select("title", "path", "icon", "index").order("index", "ASC").all();
});
const { data: playing_list } = await useAsyncData("playing", () => {
	return queryCollection("playing_list").select("title", "path", "icon").all();
});

const route = useRoute();

const isPath = (path: string) => {
	return route.path === path;
};
</script>
