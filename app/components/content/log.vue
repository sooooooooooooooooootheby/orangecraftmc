<template>
	<div class="h-screen">
		<div class="fixed top-0 -z-1 h-full w-0.5 bg-gray-100"></div>
		<div v-for="item in [...log].reverse()" :key="item.time" class="relative">
			<div class="time ml-6 flex flex-col justify-center gap-3">
				<div class="text-gray-500">{{ item.time }}</div>
				<div class="flex-1">{{ item.content }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface log {
	time: string;
	content: string;
}

const log = ref<log[]>([
	{
		time: "2025/8/8",
		content: "开启测试服",
	},
	{
		time: "2025/8/17",
		content: "开启正式服",
	},
	{
		time: "2025/8/24",
		content: "游戏版本从 1.21.6 升级到 1.21.7",
	},
]);
</script>

<style lang="scss" scoped>
.time::before {
	content: "";
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 9999px;
	background-color: oklch(87.2% 0.01 258.338);
	position: relative;
    left: -1.7rem;
    top: 1.8rem;
	outline: 4px solid #ffffff;
}
</style>
