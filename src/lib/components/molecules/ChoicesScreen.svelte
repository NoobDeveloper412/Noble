<script>
	import { Arrow } from '@atoms';
	import { language } from '../store/languageStore';
	import { get } from 'svelte/store';

	export let header, choice1, choice2;

	let currentLanguage = '';
	$: currentLanguage = get(language);
</script>

<div
	class="flex flex-col justify-center items-center bg-primary shadow-primaryTop z-50 {$$props.class ||
		''}"
>
	<div class="container max-w-md text-center">
		<p class="c-h3">
			{header}
		</p>
		<div class="choices flex justify-between mt-20">
			<a
				href={choice1.href ? `/${currentLanguage}${choice1.href}` : ''}
				class="{choice1.href
					? ''
					: 'opacity-50 pointer-events-none cursor-not-allowed'} flex items-center"
			>
				<Arrow direction="LEFT" />
				<span class="ml-4 uppercase tracking-3 leading-7">{choice1.text}</span>
			</a>
			<a
				href={choice2.href ? `/${currentLanguage}${choice2.href}` : ''}
				class="{choice2.href
					? ''
					: 'opacity-50 pointer-events-none cursor-not-allowed'} flex items-center"
			>
				<span class="mr-4 uppercase tracking-3 leading-7">{choice2.text}</span>
				<Arrow direction="RIGHT" />
			</a>
		</div>
	</div>
</div>

<style global lang="postcss">

</style>
