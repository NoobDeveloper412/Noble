<script>
	import { Card } from '@atoms';
	import { Explanation } from '@organisms';
	const handsSrc = '/images/Chapter4/hands.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;

	let triggerPoint,
		triggerClass = '';

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		triggerClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-fadeIn',
			'animate-fadeOut'
		);
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
	<div
		class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full opacity-0 {triggerClass}"
	>
		<img src={handsSrc} alt="" class="absolute bottom-0 right-0 left-0 mx-auto {triggerClass}" />
	</div>
	<Card class="card">
		<p>
			Japan became increasingly isolated from the rest of the world, but we felt no signs of
			impending war in the safety of our family home. My father died really unexpectedly. After the
			funeral, I moved to Tokyo, where my brother worked as an insurance agent. Once he brought a
			friend home, and he, as soon as saying hello, pulled out a notebook, wrote down a few
			hieroglyphs and showed it to me.
		</p>
		<p class="mt-8">
			- Can you <span bind:this={triggerPoint}> read </span> it for me? - he asked, smiling slyly.
			<br />
			- Senpo! - sounds like an artist’s pseudonym, or wait, maybe it’s

			<Explanation variant="pink" class="border-pink border-b-4">
				<div slot="content" class="w-full">
					<p class="p-6">
						A Japanese name, if its owner doesn’t pronounce it aloud first, can be read in several
						ways, especially if rarer hieroglyphs are used.
					</p>
				</div>
				<span slot="text">Chiune</span>
			</Explanation>?<br />
			His face lit up:
			<br />
			- No one has ever managed to read my name like this, Chiune. You are a real gem, Miss Yukiko.
		</p>
	</Card>
</div>
