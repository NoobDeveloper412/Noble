<script>
	import { locale } from '../../i18n';
	import { get } from 'svelte/store';

	let currentLocale = get(locale);

	locale.subscribe(value => {
		currentLocale = value;
	});

	function switchLocale(newLocale) {
		locale.set(newLocale);
	}
</script>

<button
	on:click={() => switchLocale('en')}
	class="flex items-center px-6 py-2 gap-x-2"
	class:selected={currentLocale === 'en'}>
	<img src="/icons/uk.png" alt="" class="h-6" />
	EN
</button>

<button
	on:click={() => switchLocale('jp')}
	class="flex items-center px-6 py-2 gap-x-2"
	class:selected={currentLocale === 'jp'}>
	<img src="/icons/jp.png" alt="" class="h-6" />
	JP
</button>

<style>
	.selected {
		background-color: #343941; 
		color: white;
	}
</style>
