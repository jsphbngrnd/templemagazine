import { defineField, defineType } from 'sanity';

export const issue = defineType({
	name: 'issue',
	title: 'Issue',
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
			name: 'number',
			title: 'Issue number',
			type: 'number',
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
			name: 'description',
			title: 'Description',
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
