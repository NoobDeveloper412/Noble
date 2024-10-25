<script>
	import { Card } from '@atoms';
	import { Explanation } from '@organisms';
	import { elementInViewport } from '@utils';

	export let activeTrigger1, activeTrigger2;
	console.log(activeTrigger1, activeTrigger2);

	let triggerPoint1, triggerPoint2;

	const setActiveTrigger = () => {
		activeTrigger1 = elementInViewport(triggerPoint1);
		activeTrigger2 = elementInViewport(triggerPoint2);
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
	<Card class="card">
		When I was a little girl, she says, I dreamed of being a writer when I grew up. When your father
		is the director of the Kagawa Lyceum, <span bind:this={triggerPoint1}>this</span>
		means you have a huge library at home, and I used to devour all the books in it. I remember very
		difficult lyceum exams, when to relax my brain I began writing poems. I was published by the magazines
		Reijokai (Young Ladies’ World) and Shôjokurabu (The Girls’ Club). I was very happy. I was learning
		to write <Explanation variant="pink" class="border-pink border-b-4">
			<div slot="content" class="w-full">
				<p class="p-6">A thirty-one-syllable poem</p>
			</div>
			<span slot="text">tankas</span>
		</Explanation>, I wanted to become a famous poet. Or an artist! Or to go to Paris and open my
		own beauty salon there. I had so many bold dreams - I must have inherited it from my mother: as
		soon as dainty wrist watches appeared in Japan, she was the
		<span bind:this={triggerPoint2}>first</span> of all women to buy one for herself; when high-heeled
		shoes came into fashion - she kicked away her slippers and even wore them around the house.
	</Card>
</div>
