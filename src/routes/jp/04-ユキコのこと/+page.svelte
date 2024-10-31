<script>
	import { ChapterTemplate, ChoicesScreen } from '@components';
	import {
		Chapter4Page1,
		Chapter4Page2,
		Chapter4Page3,
		Chapter4Page4,
		Chapter4Page5
	} from '@pages/Chapter4';
	import { chapterLinks, chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>{chapterTitles.chapter4}</title>
</svelte:head>

<ChapterTemplate class="bg-pink">
	<Chapter4Page1
		bind:activeTrigger={trigger1}
		bind:firstTrigger={trigger2}
		bind:secondTrigger={trigger3}
		bind:thirdTrigger={trigger4}
	/>
	<Chapter4Page2 bind:activeTrigger1={trigger2} bind:activeTrigger2={trigger3} />
	<Chapter4Page3 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
	<Chapter4Page4 />
	<Chapter4Page5 bind:activeTrigger={trigger5} />
</ChapterTemplate>
<ChoicesScreen
	header="Do I agree to marry?"
	class="relative h-120 p-10 sm:p-4"
	choice1={{ href: `${chapterLinks.chapter4}/yes`, text: 'yes' }}
	choice2={{ href: `${chapterLinks.chapter4}/no`, text: 'no' }}
/>
