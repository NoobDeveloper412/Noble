<script>
	import { MenuLink } from '@molecules';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { language } from '../store/languageStore';

	export let links = [];
	export let chapterHeader = 'Noble Rogues';

	let currentLanguage = '';
	$: currentLanguage = get(language);

	const setActiveLink = (index) => {
		links.map((link) => (link.isActive = false));
		links[index].isActive = true;
	};

	onMount(() => {
		const activeIndex = links.findIndex(
			(link) =>
				window.location.pathname === link.href || window.location.pathname === link.href + '/'
		);
		activeIndex > -1 && setActiveLink(activeIndex);
	});
</script>

<div class="chapter-menu {$$props.class || ''}">
	<div>
		{#each links as link, index}
			<MenuLink
				href={`/${currentLanguage}${link.href}`}
				isActive={link.isActive}
				onClick={() => setActiveLink(index)}
			>
				<span slot="index">
					{`${index < 9 ? '0' + (index + 1) : index + 1}`}
				</span>
				<span>{link.title}</span>
			</MenuLink>
		{/each}
	</div>
	{#if chapterHeader}
		<p
			class="chapter-header sm:hidden transform rotate-180 text-2xl text-right font-serif ml-auto my-1"
		>
			{chapterHeader}
		</p>
	{/if}
</div>
