<script>
	import { ChoicesTemplate, ChoicesScreen } from '@components';
	import { Chapter6NePage1 } from '@pages/Chapter6';
	import { chapterLinks, chapterTitles } from '@utils';
</script>

<svelte:head>
	<title>{chapterTitles.chapter6}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale" menu={false}>
	<Chapter6NePage1 />
	<ChoicesScreen
		header="Does Zwartendijk agree to forge Curacao visas?"
		class="relative h-120 p-10 sm:p-4 z-10"
		choice1={{ href: `${chapterLinks.chapter6}/yes`, text: 'yes' }}
		choice2={{ href: '', text: 'ne' }}
	/>
</ChoicesTemplate>
