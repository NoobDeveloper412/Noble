<script>
	import { ChapterMenu } from '@organisms';
	import { ChapterInteraktyviPage1 } from '@pages/ChapterInteraktyvi';
	import { fade } from 'svelte/transition';
	import { menuLinks } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>Interactive Lesson</title>
</svelte:head>

<div class="absolute w-full bg-pamoka" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="about_page sm:pt-120">
		<ChapterInteraktyviPage1 bind:activeTrigger={trigger1} />
	</div>
</div>
