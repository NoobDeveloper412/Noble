<script>
	import { ChapterMenu } from '@organisms';
	import { menuLinks } from '@utils';
	import { fly, fade } from 'svelte/transition';
</script>

<div class="chapter min-h-screen {$$props.class || ''}" out:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div
		class="card-container relative ml-28 sm:ml-0 sm:pt-120"
		out:fade
		in:fly={{ y: 1500, duration: 1000 }}
	>
		<slot />
	</div>
</div>
