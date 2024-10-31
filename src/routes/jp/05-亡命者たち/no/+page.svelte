<script>
	import { ChoicesTemplate } from '@components';
	import {
		Chapter5NePage1,
		Chapter5NePage2,
		Chapter5NePage3,
		Chapter5NePage4
	} from '@pages/Chapter5';
	import { chapterTitles } from '@utils';

	let trigger1, trigger2, trigger3;
</script>

<svelte:head>
	<title>{chapterTitles.chapter5}</title>
</svelte:head>

<ChoicesTemplate class="bg-blue" menu={false}>
	<Chapter5NePage1 bind:nextTrigger={trigger1} />
	<Chapter5NePage2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
	<Chapter5NePage3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
	<Chapter5NePage4 bind:activeTrigger={trigger3} />
</ChoicesTemplate>
