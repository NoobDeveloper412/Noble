<script>
	import { ChapterTemplate, ChoicesScreen } from '@components';
	import { Chapter5Page1, Chapter5Page2 } from '@pages/Chapter5';
	import { chapterLinks, chapterTitles } from '@utils';

	let trigger1, trigger2;
</script>

<svelte:head>
	<title>{chapterTitles.chapter5}</title>
</svelte:head>

<ChapterTemplate class="bg-blue">
	<Chapter5Page1 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter5Page2 bind:activeTrigger={trigger2} />
</ChapterTemplate>
<ChoicesScreen
	header="We leave without Grandma?"
	class="relative h-120 p-10 sm:p-4"
	choice1={{ href: `${chapterLinks.chapter5}/yes`, text: 'yes' }}
	choice2={{ href: `${chapterLinks.chapter5}/no`, text: 'no' }}
/>
