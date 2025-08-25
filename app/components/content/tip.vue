<template>
	<div class="mb-5 rounded-xl border-1 border-orange-300 bg-orange-50 px-4 py-3">
		<div class="mb-2! flex items-center gap-1">
			<span class="font-bold text-lg">
				<slot name="title" mdc-unwrap="p" />
			</span>
		</div>
		<slot name="default" mdc-unwrap="p" />
	</div>
</template>
