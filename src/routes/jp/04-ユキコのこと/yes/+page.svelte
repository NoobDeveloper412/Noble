<script>
	import { ChoicesTemplate } from '@components';
	import {
		Chapter4TaipPage1,
		Chapter4TaipPage2,
		Chapter4TaipPage3,
		Chapter4TaipPage4,
		Chapter4TaipPage5
	} from '@pages/Chapter4';
	import { chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
	<title>{chapterTitles.chapter4}</title>
</svelte:head>

<ChoicesTemplate class="bg-pink" menu={false}>
	<Chapter4TaipPage1 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter4TaipPage2 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
	<Chapter4TaipPage3 bind:activeTrigger1={trigger3} bind:activeTrigger2={trigger4} />
	<Chapter4TaipPage4 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
	<Chapter4TaipPage5 bind:activeTrigger={trigger5} />
</ChoicesTemplate>
