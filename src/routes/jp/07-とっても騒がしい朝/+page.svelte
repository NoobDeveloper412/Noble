<script>
	import { ChapterTemplate, ChoicesScreen } from '@components';
	import { ChapterMenu } from '@organisms';
	import { menuLinks } from '@utils';
	import { fade } from 'svelte/transition';
	import {
		Chapter7Page1,
		Chapter7Page2,
		Chapter7Page3,
		Chapter7Page4,
		Chapter7Page5
	} from '@pages/Chapter7';
	import { chapterLinks } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>A very Noisy morning</title>
</svelte:head>

<div class="absolute w-full bg-ch7" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="sm:pt-120">
		<Chapter7Page1 bind:activeTrigger={trigger1} />
		<Chapter7Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
		<Chapter7Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
		<Chapter7Page4 bind:activeTrigger={trigger3} bind:nextTrigger={trigger4} />
		<Chapter7Page5 bind:activeTrigger={trigger4} />
	</div>
	<ChoicesScreen
		header="Will Sugihara issue visas?"
		class="relative h-120 p-10 sm:p-4 z-999"
		choice1={{ href: `${chapterLinks.chapter7}/yes`, text: 'yes' }}
		choice2={{ href: `${chapterLinks.chapter7}/no`, text: 'no' }}
	/>
</div>

<style global lang="postcss">
	.house {
		margin-left: 5%;
	}
	.z-999 {
		z-index: 999;
	}
	@screen sm {
		.house {
			max-width: 150%;
			margin-left: 25%;
			margin-right: -25%;
		}
	}
</style>
