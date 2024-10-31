<script>
	import { ChoicesTemplate, ChoicesScreen } from '@components';
	import { Chapter9NePage1 } from '@pages/Chapter9';
	import { chapterLinks, chapterTitles } from '@utils';
</script>

<svelte:head>
	<title>{chapterTitles.chapter9}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale ch_9_ne" menu={false}>
	<Chapter9NePage1 />
	<ChoicesScreen
		header="Will Dad become a Soviet Spy?"
		class="relative h-120 p-10 sm:p-4 z-10"
		choice1={{ href: `${chapterLinks.chapter9}/yes`, text: 'yes' }}
		choice2={{ href: '', text: 'ne' }}
	/>
</ChoicesTemplate>
