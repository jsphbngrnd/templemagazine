import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
	name: 'default',
	title: 'Temple Magazine',
	projectId: 'brylzd8m',
	dataset: 'production',
	plugins: [structureTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
});
