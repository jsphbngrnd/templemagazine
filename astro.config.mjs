// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId,
			dataset,
			apiVersion: '2026-09-20',
			useCdn: false,
			studioBasePath: '/admin',
		}),
		react(),
	],
});
