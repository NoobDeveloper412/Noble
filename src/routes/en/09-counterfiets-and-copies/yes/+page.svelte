<script>
	import { ChoicesTemplate } from '@components';
	import { Chapter9TaipPage1, Chapter9TaipPage2, Chapter9TaipPage3 } from '@pages/Chapter9';
	import { chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3;
</script>

<svelte:head>
	<title>{chapterTitles.chapter9}</title>
</svelte:head>

<ChoicesTemplate class="bg-ch9" menu={false}>
	<Chapter9TaipPage1 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter9TaipPage2 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
	<Chapter9TaipPage3 bind:activeTrigger={trigger3} />
</ChoicesTemplate>
