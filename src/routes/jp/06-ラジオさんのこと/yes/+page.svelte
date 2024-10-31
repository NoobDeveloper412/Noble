<script>
	import { ChoicesTemplate } from '@components';
	import { Chapter6TaipPage1, Chapter6TaipPage2, Chapter6TaipPage3 } from '@pages/Chapter6';
	import { chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3;
</script>

<svelte:head>
	<title>{chapterTitles.chapter6}</title>
</svelte:head>

<ChoicesTemplate class="bg-ch6" menu={false}>
	<Chapter6TaipPage1 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter6TaipPage2 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
	<Chapter6TaipPage3 bind:activeTrigger={trigger3} />
</ChoicesTemplate>
