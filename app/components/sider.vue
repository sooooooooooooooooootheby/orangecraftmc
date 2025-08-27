<template>
	<div class="flex h-screen w-68 flex-col overflow-hidden border-r border-gray-200 bg-gray-50">
		<NuxtLink to="/" class="flex w-full items-center justify-center gap-3 py-6">
			<img src="/orange.png" alt="logo" class="w-8" />
			<span class="font-bold text-gray-800">Orange Craft MC</span>
		</NuxtLink>
		<search />
		<div class="flex h-full flex-1 flex-col gap-1 overflow-y-scroll px-4 pb-12">
			<div v-for="item in list">
				<div
					v-if="item.text"
					@click="item.folding = !item.folding"
					class="mb-0.5 flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200"
				>
					<Icon :name="item.icon" class="text-xl" />
					<span class="flex-1 text-sm">{{ item.text }}</span>
					<div class="flex items-center justify-center">
						<Icon name="gravity-ui:caret-down" v-if="item.folding" />
						<Icon name="gravity-ui:caret-left" v-else />
					</div>
				</div>
				<div v-if="isFolding(item.path, item.folding)">
					<div v-for="items in item.item" :class="{ 'ml-5 border-l-1 border-gray-200 py-0.5 pl-2': item.text }">
						<NuxtLink
							:to="items.path"
							class="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 duration-150 hover:bg-gray-200"
							:class="{ 'bg-gray-300 text-gray-800': isPath(items.path) }"
						>
							<Icon :name="items.icon" class="text-xl" />
							<span class="flex-1 text-sm" :class="{ 'text-xs!': item.text }">{{ items.title }}</span>
							<div class="size-1 rounded-full bg-gray-600" v-if="isPath(items.path)"></div>
						</NuxtLink>
					</div>
				</div>
				<div class="my-2 w-full border-t-1 border-gray-200" v-if="!item.text"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface listItem {
	title: string;
	path: string;
	icon: string;
}

interface list {
	text: string;
	icon: string;
	path: string;
	folding: boolean;
	item: listItem[];
}

const list = ref<list[]>([
	{
		text: "",
		icon: "",
		path: "",
		folding: true,
		item: [
			{
				title: "关于我们",
				path: "/docs/guide",
				icon: "gravity-ui:heart",
			},
			{
				title: "加入我们",
				path: "/docs/join",
				icon: "gravity-ui:plug-connection",
			},
			{
				title: "玩法指南",
				path: "/docs/play",
				icon: "gravity-ui:location-arrow",
			},
			{
				title: "玩法特色",
				path: "/docs/playing",
				icon: "gravity-ui:magic-wand",
			},
			{
				title: "公会",
				path: "/docs/guild",
				icon: "gravity-ui:persons",
			},
			{
				title: "管理组",
				path: "/docs/admin",
				icon: "gravity-ui:thunderbolt",
			},
			{
				title: "服务器日志",
				path: "/docs/log",
				icon: "gravity-ui:file",
			},
		],
	},
	{
		text: "玩家守则",
		icon: "gravity-ui:pencil",
		path: "playrule",
		folding: false,
		item: [
			{
				title: "交流守则",
				path: "/docs/playrule/chat",
				icon: "gravity-ui:comment",
			},
			{
				title: "游玩守则",
				path: "/docs/playrule/play",
				icon: "gravity-ui:card-spade",
			},
		],
	},
	{
		text: "命令大全",
		icon: "gravity-ui:terminal",
		path: "command",
		folding: false,
		item: [
			{
				title: "基础指令",
				path: "/docs/command/base",
				icon: "gravity-ui:exclamation-shape",
			},
			{
				title: "传送 & 家",
				path: "/docs/command/transfer",
				icon: "gravity-ui:paper-plane",
			},
			{
				title: "领地",
				path: "/docs/command/territory",
				icon: "gravity-ui:flag",
			},
			{
				title: "全服音乐",
				path: "/docs/command/allmusic",
				icon: "gravity-ui:music-note",
			},
		],
	},
]);

const route = useRoute();

const isPath = (path: string) => {
	return route.path === path;
};
const isFolding = (path: string, folding: boolean) => {
	const segments = route.path.split('/').filter(Boolean);
	return folding || segments.length > 1 && segments[1] === path;
}
</script>
