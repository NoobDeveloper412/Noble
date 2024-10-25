<script>
	import { ChoicesScreen } from '@components';
	import { ChapterMenu } from '@organisms';
	import { menuLinks } from '@utils';
	import { fade } from 'svelte/transition';
	import {
		Chapter6Page1,
		Chapter6Page2,
		Chapter6Page3,
		Chapter6Page4,
		Chapter6Page5,
		Chapter6Page6
	} from '@pages/Chapter6';
	import { chapterLinks } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>Mister Radio</title>
</svelte:head>

<div class="absolute w-full bg-ch6" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="sm:pt-120">
		<Chapter6Page1 bind:activeTrigger={trigger1} />
		<Chapter6Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
		<Chapter6Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
		<Chapter6Page4 bind:activeTrigger={trigger3} bind:nextTrigger={trigger4} />
		<Chapter6Page5 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
		<Chapter6Page6 bind:activeTrigger={trigger5} />
	</div>
	<ChoicesScreen
		header="Does Zwartendijk agree to forge Curacao visas?"
		class="relative h-120 p-10 sm:p-4 z-999"
		choice1={{ href: `${chapterLinks.chapter6}/yes`, text: 'yes' }}
		choice2={{ href: `${chapterLinks.chapter6}/no`, text: 'no' }}
	/>
</div>
