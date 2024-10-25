<script>
	import { ChoicesScreen } from '@molecules';
	import { Chapter2NoPage1, Chapter2NoPage2, Chapter2NoPage3 } from '@pages/Chapter2/';
	import { chapterLinks } from '@utils';

	let triggerPoint1, triggerPoint2, triggerPoint3;
</script>

<svelte:head>
	<title>At first, yes it was bad</title>
</svelte:head>

<div class="no absolute bg-grayscale w-full">
	<div>
		<Chapter2NoPage1 bind:activeTrigger={triggerPoint1} bind:nextTrigger={triggerPoint2} />
		<Chapter2NoPage2 bind:activeTrigger={triggerPoint2} bind:nextTrigger={triggerPoint3} />
		<Chapter2NoPage3 bind:activeTrigger={triggerPoint3} />
	</div>
	<ChoicesScreen
		header="Move to America?"
		class="ch2nein relative h-120 p-10 sm:p-4 z-30"
		choice1={{ href: `${chapterLinks.chapter2}/yes`, text: 'Yes' }}
		choice2={{ href: '', text: 'No' }}
	/>
</div>

