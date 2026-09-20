import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
	api: {
		projectId: 'brylzd8m',
		dataset: 'production',
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
