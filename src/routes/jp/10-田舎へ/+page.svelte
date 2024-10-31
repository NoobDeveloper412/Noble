<script>
	import { ChapterMenu } from '@organisms';
	import { menuLinks } from '@utils';
	import { fade } from 'svelte/transition';
	import {
		Chapter10Page1,
		Chapter10Page2,
		Chapter10Page3,
		Chapter10Page4,
		Chapter10Page5,
		Chapter10Page6,
		Chapter10Page7
	} from '@pages/Chapter10';

	let trigger1, trigger2, trigger3, trigger4, trigger5, trigger6;
</script>

<svelte:head>
	<title>To the countryside</title>
</svelte:head>

<div class="absolute w-full bg-ch10" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="sm:pt-120">
		<Chapter10Page1 bind:activeTrigger={trigger1} />
		<Chapter10Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
		<Chapter10Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
		<Chapter10Page4 bind:activeTrigger={trigger3} bind:nextTrigger={trigger4} />
		<Chapter10Page5 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
		<Chapter10Page6 bind:activeTrigger={trigger5} bind:nextTrigger={trigger6} />
		<Chapter10Page7 bind:activeTrigger={trigger6} />
	</div>
</div>
