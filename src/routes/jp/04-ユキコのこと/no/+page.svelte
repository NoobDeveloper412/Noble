<script>
	import { ChoicesTemplate, ChoicesScreen } from '@components';
	import { Chapter4NePage1 } from '@pages/Chapter4';
	import { chapterLinks, chapterTitles } from '@utils';
</script>

<svelte:head>
	<title>{chapterTitles.chapter4}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale" menu={false}>
	<Chapter4NePage1 />
	<ChoicesScreen
		header="Do I agree to marry?"
		class="relative h-120 p-10 sm:p-4"
		choice1={{ href: `${chapterLinks.chapter4}/yes`, text: 'yes' }}
		choice2={{ href: '', text: 'no' }}
	/>
</ChoicesTemplate>
