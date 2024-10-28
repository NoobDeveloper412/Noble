import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null, // set to '200.html' for SPA fallback
			strict: true
		}),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@atoms': path.resolve('./src/lib/components/atoms'),
			'@molecules': path.resolve('./src/lib/components/molecules'),
			'@organisms': path.resolve('./src/lib/components/organisms'),
			'@pages': path.resolve('./src/lib/components/pages'),
			'@utils': path.resolve('./src/lib/components/utils'),
		}
	}
};

export default config;
