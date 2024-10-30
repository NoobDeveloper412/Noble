<script>
	import { ChoicesTemplate } from '@components';
	import { Chapter2YesPage1, Chapter2YesPage2 } from '@pages/Chapter2';
	import { chapterTitles } from '@utils';

	let trigger;
</script>

<svelte:head>
	<title>{chapterTitles.chapter2}</title>
</svelte:head>

<ChoicesTemplate class="bg-sand" menu={false} >
	<Chapter2YesPage1 bind:nextTrigger={trigger} />
	<Chapter2YesPage2 bind:activeTrigger={trigger} />
</ChoicesTemplate>
