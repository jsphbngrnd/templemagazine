import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'bry1zd8m';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
	api: {
		projectId,
		dataset,
	},
	deployment: {
		autoUpdates: true,
	},
	typegen: {
		enabled: true,
		path: '../src/**/*.{ts,tsx,js,jsx,astro}',
		generates: '../src/sanity.types.ts',
	},
});
