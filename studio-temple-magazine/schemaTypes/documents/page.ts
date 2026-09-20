import { DocumentIcon } from '@sanity/icons/Document';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: DocumentIcon,
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
			description: 'Source page ID from the WordPress export. Used during migration.',
			hidden: true,
		}),
	],
});
