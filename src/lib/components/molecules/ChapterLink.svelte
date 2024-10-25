<script>
	import { language } from '../store/languageStore';
	import { get } from 'svelte/store';

	export let href;

	// Get the current language
	let currentLanguage = '';
	$: currentLanguage = get(language);
</script>

<a
	href={`/${currentLanguage}${href}`}
	class="block w-full py-4 px-12 bg-transparent uppercase border transition duration-500 hover:bg-primary hover:text-primary-300 cursor-pointer text-center {$$props.class ||
		''}"
>
	<slot />
</a>
