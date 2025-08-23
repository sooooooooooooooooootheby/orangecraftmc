import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css", "~/assets/css/typography.scss"],

	app: {
		head: {
			title: "Orange Craft MC",
			htmlAttrs: {
				lang: "zh_CN",
			},
			link: [{ rel: "icon", type: "image/x-icon", href: "/orange.png" }],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	modules: ["@nuxt/icon", "@nuxt/content"],
});
