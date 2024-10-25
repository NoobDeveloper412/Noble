<script>
	import { ChoicesScreen } from '@components';
	import { ChapterMenu } from '@organisms';
	import { menuLinks, chapterLinks } from '@utils';
	import { fade } from 'svelte/transition';
	import { Chapter8Page1, Chapter8Page2, Chapter8Page3, Chapter8Page4 } from '@pages/Chapter8';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>Goodbye to Kaunas</title>
</svelte:head>

<div class="absolute w-full bg-ch8" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="sm:pt-120">
		<Chapter8Page1 bind:activeTrigger={trigger1} />
		<Chapter8Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
		<Chapter8Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
		<Chapter8Page4 bind:activeTrigger={trigger3} />
	</div>
	<ChoicesScreen
		header="Will the maid will betray Gudze?"
		class="relative h-120 p-10 sm:p-4 z-999"
		choice1={{ href: `${chapterLinks.chapter8}/yes`, text: 'yes' }}
		choice2={{ href: `${chapterLinks.chapter8}/no`, text: 'no' }}
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
