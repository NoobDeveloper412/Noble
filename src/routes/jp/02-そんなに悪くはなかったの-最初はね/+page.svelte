<script>
	import { ChapterTemplate, ChoicesScreen } from '@components';
	import {
		Chapter2Page1,
		Chapter2Page2,
		Chapter2Page3,
		Chapter2Page4,
		Chapter2Page5
	} from '@pages/Chapter2';
	import { chapterLinks, chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>{chapterTitles.chapter2}</title>
</svelte:head>

<ChapterTemplate class="bg-sand">
	<Chapter2Page1 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter2Page2
		bind:activeTrigger={trigger2}
		bind:firstTrigger={trigger3}
		bind:secondTrigger={trigger4}
	/>
	<Chapter2Page3 bind:activeTrigger={trigger3} bind:nextTrigger={trigger4} />
	<Chapter2Page4 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
	<Chapter2Page5 bind:activeTrigger={trigger5} />
</ChapterTemplate>
<ChoicesScreen
	header="Move to America?"
	class="sp-zin relative h-120 p-10 sm:p-4"
	choice1={{ href: `${chapterLinks.chapter2}/yes`, text: 'yes' }}
	choice2={{ href: `${chapterLinks.chapter2}/no`, text: 'no' }}
/>

<style global lang="postcss">

</style>
