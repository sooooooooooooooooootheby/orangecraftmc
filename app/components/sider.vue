<template>
	<div class="h-screen w-68 overflow-y-auto border-r border-gray-200 bg-gray-50 mb-4">
		<NuxtLink to="/" class="flex w-full items-center justify-center gap-3 py-6">
			<img src="/orange.png" alt="logo" class="w-8" />
			<span class="font-bold text-gray-800">Orange Craft MC</span>
		</NuxtLink>
		<search />
		<div class="flex flex-col gap-1 px-4">
			<div v-for="item in main_list">
				<NuxtLink
					:to="item.path"
					class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200"
					:class="{ 'bg-gray-300 text-gray-800': isPath(item.path) }"
				>
					<Icon :name="item.icon" class="text-xl" />
					<span class="flex-1 text-sm">{{ item.title }}</span>
					<div class="size-1 rounded-full bg-gray-600" v-if="isPath(item.path)"></div>
				</NuxtLink>
			</div>
			<div class="my-4 w-full border-t-1 border-gray-200"></div>
			<div class="">
				<div class="mb-0.5 flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200" @click="isPlayrule_list = !isPlayrule_list">
					<Icon name="gravity-ui:pencil" class="text-xl" />
					<p class="flex-1">玩家守则</p>
					<div class="flex items-center justify-center">
						<Icon name="gravity-ui:caret-down" v-if="isPlayrule_list" />
						<Icon name="gravity-ui:caret-left" v-else />
					</div>
				</div>
				<div class="flex flex-col" v-if="isPlayrule_list">
					<div v-for="item in playrule_list" class="ml-5 border-l-1 border-gray-200 py-0.5 pl-2">
						<NuxtLink
							:to="item.path"
							class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200"
							:class="{ 'bg-gray-300 text-gray-800': isPath(item.path) }"
						>
							<Icon :name="item.icon" class="text-xl" />
							<span class="flex-1 text-sm">{{ item.title }}</span>
							<div class="size-1 rounded-full bg-gray-600" v-if="isPath(item.path)"></div>
						</NuxtLink>
					</div>
				</div>
				<div class="mb-0.5 flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200" @click="isCommand_list = !isCommand_list">
					<Icon name="gravity-ui:terminal" class="text-xl" />
					<p class="flex-1">命令大全</p>
					<div class="flex items-center justify-center">
						<Icon name="gravity-ui:caret-down" v-if="isCommand_list" />
						<Icon name="gravity-ui:caret-left" v-else />
					</div>
				</div>
				<div class="flex flex-col" v-if="isCommand_list">
					<div v-for="item in command_list" class="ml-5 border-l-1 border-gray-200 py-0.5 pl-2">
						<NuxtLink
							:to="item.path"
							class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200"
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
const { data: playrule_list } = await useAsyncData("playing", () => {
	return queryCollection("playrule_list").select("title", "path", "icon").all();
});
const { data: command_list } = await useAsyncData("command", () => {
	return queryCollection("command_list").select("title", "path", "icon", "index").order("index", "ASC").all();
});

const isPlayrule_list = ref<boolean>(false);
const isCommand_list = ref<boolean>(false);

const route = useRoute();

const isPath = (path: string) => {
	return route.path === path;
};
</script>
