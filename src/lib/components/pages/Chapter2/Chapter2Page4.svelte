<script>
	import { Card } from '@atoms';
	const speechBubbleSrc = '/images/Chapter2/speech-bubble.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;

	let triggerPoint1,
		triggerPoint2,
		textTrigger = '';

	const getTriggerClasses = () => {
		textTrigger = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-textFlickerInGlow',
			'opacity-100'
		);
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint1);
		nextTrigger = elementInViewport(triggerPoint2);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
	<Card
		class="w-max h-max max-w-md mt-20 bg-primary-300 sm:mt-10 sm:mb-80 sm:w-full sm:max-w-screen-sm"
	>
		<p bind:this={triggerPoint1}>
			And then something bad happens that makes us avoid the downtown ice cream parlor - and the
			downtown - altogether. Last week, on my way back from school, I was stopped by several boys
			screaming,
		</p>
		<div class="speech-container h-xl">
			<img
				src={speechBubbleSrc}
				alt=""
        class="absolute h-xl w-screen left-0 -ml-28 sm:right-0 sm:mx-auto sm:object-cover"
			/>

			<h2
				class="c-flicker  absolute w-3/5 z-1 text-primary-300 h-xl flex items-center sm:w-screen sm:text-xl sm:pr-32 sm:leading-10 sm:items-start sm:mt-40 {textTrigger} "
			>
				“you disgusting Jew, you stink and pollute our air, what are you doing here among normal
				people, get out of our city, go to your own country"
			</h2>
		</div>
		<p bind:this={triggerPoint2}>
			- I was so scared, I started to run, one of them pulled my leg, I fell and skinned my knee.
			When I came home limping, I cried and asked Mom - why, why did they do this to me, what
			country were they screaming about?
		</p>
	</Card>
</div>

<style>
</style>
