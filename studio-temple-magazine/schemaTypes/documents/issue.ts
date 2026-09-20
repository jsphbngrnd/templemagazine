import { BookIcon } from '@sanity/icons/Book';
import { defineField, defineType } from 'sanity';

export const issue = defineType({
	name: 'issue',
	title: 'Issue',
	type: 'document',
	icon: BookIcon,
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
			name: 'number',
			title: 'Issue number',
			type: 'number',
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
			name: 'description',
			type: 'text',
			rows: 4,
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'number',
			media: 'coverImage',
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle: subtitle ? `Issue ${subtitle}` : undefined,
				media,
			};
		},
	},
});
