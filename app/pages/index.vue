<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center gap-2">
        <img src="/orange.png" alt="logo" class="w-32 mb-6 animate-spin" style="animation-duration: 12s;">
        <p class="text-4xl font-bold">~ Orange Craft MC ~</p>
        <div class="w-full max-w-4xl border-t-1 mb-2"></div>
        <NuxtLink to="/docs" class="text-lg hover:underline">docs</NuxtLink>
    </div>
</template>

<script lang='ts' setup>
useSeoMeta({
	title: `Orange Craft Mc`,
	ogTitle: `Orange Craft Mc`,
});
</script>
