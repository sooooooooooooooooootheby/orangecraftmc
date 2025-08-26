<template>
	<div v-if="data" class="mb-24 max-w-2xl mx-auto">
		<div class="mb-8 flex items-center justify-between">
			<span>公会排名</span>
			<span class="text-xs text-gray-400">更新于 {{ handleTime(data.time) }}</span>
		</div>
		<div class="flex flex-col">
			<div v-for="(item, index) in sorting">
                <div class="w-full h-0.5 bg-gray-100 my-4" v-if="index !== 0"></div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col w-2/5">
						<div class="flex items-center gap-2">
							<img :src="`https://mc-heads.net/head/${item.creator}`" :alt="item.creator" class="mb-0! w-6!" />
							<span v-html="toColoredHtml(item.guild_name)"></span>
						</div>
						<span class="ml-8 text-gray-600"
                            :class="{ 'text-teal-500': index === 2, 'text-indigo-500': index === 1, 'text-rose-500': index === 0 }"
                        >
                            评分: {{ item.score }}
                        </span>
					</div>
					<div class="flex gap-12 w-3/5">
						<div class="w-1/4 flex flex-col items-center gap-1">
							<span class="text-xs text-gray-400">等级</span>
							<span>{{ item.level }}</span>
						</div>
						<div class="w-1/4 flex flex-col items-center gap-1">
							<span class="text-xs text-gray-400">会员</span>
							<span>{{ item.member_count }}</span>
						</div>
						<div class="w-1/4 flex flex-col items-center gap-1">
							<span class="text-xs text-gray-400">活跃</span>
							<span>{{ item.prosperity_degree }}</span>
						</div>
						<div class="w-1/4 flex flex-col items-center gap-1">
							<span class="text-xs text-gray-400">金币</span>
							<span>{{ item.money }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface ranking {
	guild_name: string;
	level: number;
	money: number;
	member_count: number;
	prosperity_degree: number;
	month_prosperity_degree: number;
	member_max_count: number;
	creator: string;
	create_time: string;
	score: number;
}
interface res {
	success: boolean;
	data: ranking[];
	cacheTime: string;
}

const score = (level: number, prosperity_degree: number, money: number, member_count: number): number => {
	return level * 1000 + prosperity_degree * 0.1 + money * 1 + member_count * 100;
};

const sorting = computed(() => {
	return data.value?.ranking.sort((a, b) => {
		return b.score - a.score;
	});
});

const { data } = await useAsyncData("mountains", async () => {
	const res = (await $fetch("https://api.s22y.moe/lodestar/api/guild")) as res;
	const ranking: ranking[] = res.data.map((item) => {
		return {
			...item,
			score: score(item.level, item.prosperity_degree, item.money, item.member_count),
		};
	});
	return { ranking, time: res.cacheTime };
});
</script>
