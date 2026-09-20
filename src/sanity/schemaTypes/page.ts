import { defineArrayMember, defineField, defineType } from 'sanity';

export const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				defineArrayMember({ type: 'block' }),
				defineArrayMember({ type: 'image', options: { hotspot: true } }),
			],
		}),
		defineField({
			name: 'wordpressId',
			title: 'WordPress ID',
			type: 'number',
			description: 'Source page ID from the WordPress export. Used during migration.',
			hidden: true,
		}),
	],
});
