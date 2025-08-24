<template>
	<div class="flex flex-col gap-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="flex gap-4 rounded-xl border-1 border-gray-300 bg-gray-50 px-4 py-3">
				<div class="jucestify-center flex flex-1 flex-col">
					<span class="text-xl font-bold text-gray-800">{{ fz.name }}</span>
					<span class="text-sm text-gray-600">{{ fz.info }}</span>
					<span class="mt-4 text-sm text-gray-700">{{ fz.role }}</span>
				</div>
				<div class="flex items-center">
					<img :src="`https://mc-heads.net/head/${fz.uuid}`" alt="fz.name" class="m-0! w-16! shrink-0" />
				</div>
			</div>
            <div class="flex gap-4 rounded-xl border-1 border-gray-300 bg-gray-50 px-4 py-3 opacity-0">
				<div class="jucestify-center flex flex-1 flex-col">
					<span class="text-xl font-bold text-gray-800">{{ fz.name }}</span>
					<span class="text-sm text-gray-600">{{ fz.info }}</span>
					<span class="mt-4 text-sm text-gray-700">{{ fz.role }}</span>
				</div>
				<div class="flex items-center">
					<img :src="`https://mc-heads.net/head/${fz.uuid}`" alt="fz.name" class="m-0! w-16! shrink-0" />
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div v-for="item in admin">
				<div class="flex gap-4 rounded-xl border-1 border-gray-300 bg-gray-50 px-4 py-3">
					<div class="jucestify-center flex flex-1 flex-col">
						<span class="text-xl font-bold text-gray-800">{{ item.name }}</span>
						<span class="text-sm text-gray-600">{{ item.info }}</span>
						<span class="mt-4 text-sm text-gray-700">{{ item.role }}</span>
					</div>
					<div class="flex items-center">
						<img :src="`https://mc-heads.net/head/${item.uuid}`" alt="fz.name" class="m-0! w-16! shrink-0" />
					</div>
				</div>
			</div>
		</div>
        <div class="grid grid-cols-2 gap-4">
			<div v-for="item in lowadmin">
				<div class="flex gap-4 rounded-xl border-1 border-gray-300 bg-gray-50 px-4 py-3">
					<div class="jucestify-center flex flex-1 flex-col">
						<span class="text-xl font-bold text-gray-800">{{ item.name }}</span>
						<span class="text-sm text-gray-600">{{ item.info }}</span>
						<span class="mt-4 text-sm text-gray-700">{{ item.role }}</span>
					</div>
					<div class="flex items-center">
						<img :src="`https://mc-heads.net/head/${item.uuid}`" alt="fz.name" class="m-0! w-16! shrink-0" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface p {
	name: string;
	uuid: string;
	info: string;
	role: string;
}

const fz = ref<p>({
	name: "ChengPro",
	uuid: "a8e204c4-74cd-45ae-b2f6-3041edb1eaac",
	info: "这是一段简介",
	role: "橙服腐竹",
});

const admin = ref<p[]>([
	{
		name: "AliceIClodia",
		uuid: "90b27e82-deac-4e85-9155-10b055878ca9",
		info: "这是一段简介",
		role: "橙服技术管理",
	},
	{
		name: "MinaFireVine",
		uuid: "9e11d6b6-5fc2-4698-b8f9-1e8f4551930e",
		info: "这是一段简介",
		role: "橙服技术管理",
	},
	{
		name: "Ming_XiaoYu",
		uuid: "e758ce79-83ce-48a3-94ee-711d28bee08e",
		info: "这是一段简介",
		role: "橙服技术管理",
	},
	{
		name: "lesfor",
		uuid: "4f62122e-5874-4a82-b718-e67f159213d9",
		info: "这是一段简介",
		role: "橙服技术管理",
	},
	{
		name: "NicekillersCN",
		uuid: "e19db909-7dfa-416a-af6f-cc586ac0ed99",
		info: "这是一段简介",
		role: "橙服技术管理",
	},
]);

const lowadmin = ref<p[]>([
	{
		name: "Th_Long",
		uuid: "b3cb636d-8297-40e4-b069-b9f7adbfc241",
		info: "这是一段简介",
		role: "橙服维护管理",
	},
	{
		name: "NAKANO666",
		uuid: "838ec429-5dc4-4f0d-8f75-051ff6f3332e",
		info: "这是一段简介",
		role: "橙服维护管理",
	},
	{
		name: "kunkun22678",
		uuid: "fab5ceff-4a53-4306-925e-268bf31981e3",
		info: "这是一段简介",
		role: "橙服维护管理",
	},
    {
		name: "mantou_ya",
		uuid: "3d4ecd53-89bd-4a2a-acee-e07fa1829552",
		info: "这是一段简介",
		role: "橙服维护管理",
	},
]);
</script>
