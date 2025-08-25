import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		docs: defineCollection({
			type: "page",
			source: "docs/**/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
				cover: z.string(),
				isDir: z.boolean(),
			}),
		}),
		main_list: defineCollection({
			type: "page",
			source: "docs/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
				index: z.number(),
			}),
		}),
		playrule_list: defineCollection({
			type: "page",
			source: "docs/playrule/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
			})
		}),
		command_list: defineCollection({
			type: "page",
			source: "docs/command/*.md",
			schema: z.object({
				title: z.string(),
				icon: z.string(),
				index: z.string(),
			})
		}),
	},
});
