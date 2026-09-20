import { UserIcon } from '@sanity/icons/User';
import { defineField, defineType } from 'sanity';

export const author = defineType({
	name: 'author',
	title: 'Author',
	type: 'document',
	icon: UserIcon,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'name' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'bio',
			type: 'text',
			rows: 4,
		}),
		defineField({
			name: 'portrait',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'wordpressId',
			title: 'WordPress ID',
			type: 'number',
			hidden: true,
		}),
	],
});
