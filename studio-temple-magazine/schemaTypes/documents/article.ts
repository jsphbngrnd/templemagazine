import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const article = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'excerpt',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'coverImage',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime',
		}),
		defineField({
			name: 'authors',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: [{ type: 'author' }] })],
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: [{ type: 'category' }] })],
		}),
		defineField({
			name: 'issue',
			type: 'reference',
			to: [{ type: 'issue' }],
		}),
		defineField({
			name: 'body',
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
