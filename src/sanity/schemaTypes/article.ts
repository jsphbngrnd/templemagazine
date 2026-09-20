import { defineArrayMember, defineField, defineType } from 'sanity';

export const article = defineType({
	name: 'article',
	title: 'Article',
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
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover image',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}),
		defineField({
			name: 'authors',
			title: 'Authors',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: [{ type: 'author' }] })],
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: [{ type: 'category' }] })],
		}),
		defineField({
			name: 'issue',
			title: 'Issue',
			type: 'reference',
			to: [{ type: 'issue' }],
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
			description: 'Source post ID from the WordPress export. Used during migration.',
			hidden: true,
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'coverImage',
			subtitle: 'publishedAt',
		},
	},
});
