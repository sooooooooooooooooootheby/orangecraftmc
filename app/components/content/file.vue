<template>
	<div class="mb-5 rounded-xl border-1 border-gray-300 bg-gray-50 px-4 py-3">
		<div class="mb-3 ml-0.5 flex items-center gap-1 text-sm text-gray-700">
			<Icon name="gravity-ui:cloud" />
			<slot name="form" mdc-unwrap="p" />
		</div>
		<div class="flex gap-3">
			<a :href="props.url" target="_blank">
				<div class="flex size-12 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300">
					<Icon name="gravity-ui:folder-arrow-down" class="text-xl text-gray-600 duration-150 hover:text-orange-400" />
				</div>
			</a>
			<div class="flex flex-col justify-center">
				<span class="mx-0.5 font-bold text-gray-600">
					<slot name="filename" mdc-unwrap="p" />
				</span>
				<!-- <slot name="url" mdc-unwrap="p" /> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({ url: { type: String } });
</script>
