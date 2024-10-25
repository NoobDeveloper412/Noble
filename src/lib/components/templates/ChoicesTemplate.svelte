<script>
	import { ChapterMenu } from '@organisms';
	import { menuLinks } from '@utils';
	import { fade, fly } from 'svelte/transition';
	export let menu = true;
</script>

<div class="choice min-h-screen {$$props.class || ''}" out:fade>
	{#if menu}
		<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" class="hidden sm:block" />
	{/if}
	<div class="card-container relative sm:pt-120" in:fly={{ y: 1000, duration: 1000 }}>
		<slot />
	</div>
</div>
