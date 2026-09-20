// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
	process.env.NODE_ENV ?? 'development',
	process.cwd(),
	'',
);

const projectId = PUBLIC_SANITY_PROJECT_ID || 'bry1zd8m';
const dataset = PUBLIC_SANITY_DATASET || 'production';

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId,
			dataset,
			apiVersion: '2026-09-20',
			useCdn: false,
		}),
	],
});
