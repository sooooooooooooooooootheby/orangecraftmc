import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		main_list: defineCollection({
			type: "page",
			source: "docs/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
				index: z.number(),
			}),
		}),
		// playing_list: defineCollection({
		//     type: "page",
		// 	source: "docs/playing/*.md",
		// 	schema: z.object({
		// 		title: z.string(),
		// 		icon: z.string(),
		// 		index: z.number(),
		// 	})
		// }),
		docs: defineCollection({
			type: "page",
			source: "docs/**/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
				cover: z.string(),
			}),
		}),
	},
});
