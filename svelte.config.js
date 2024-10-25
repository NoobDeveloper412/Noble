import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@atoms': path.resolve('./src/lib/components/atoms'),
			'@molecules': path.resolve('./src/lib/components/molecules'),
			'@organisms': path.resolve('./src/lib/components/organisms'),
			'@pages': path.resolve('./src/lib/components/pages'),
			'@utils': path.resolve('./src/lib/components/utils'),
			'@pages': path.resolve('./src/lib/components/pages'),
		}
	}
};

export default config;
