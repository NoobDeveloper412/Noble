<script>
	export let activeTrigger, nextTrigger;
	import { Card } from '@atoms';
	const catsSrc = "/images/Chapter10/cats.png";

	const dogsSrc = "/images/Chapter10/dogs.png";

	const ratsSrc = "/images/Chapter10/rats.png";

	import { ChapterItem } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, SlideFromTop, triggerClass, SlideFromBottom, SlideFromLeft;

	const getTriggerClasses = () => {
		SlideFromTop = handleTriggerClasses(activeTrigger, nextTrigger, '', 'animate-fadeOut');
		SlideFromBottom = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBottom',
			'animate-fadeOut'
		);
		SlideFromLeft = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInTop',
			'animate-fadeOut'
		);
		triggerClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeOut', 'opacity-0');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
	<div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
		<Card>
			<h2 class="c-h2 mb-8">To the countryside</h2>
			<p class="mb-8" bind:this={triggerPoint}>
				<span class="uppercase lettsp">Summer of 1941 </span>
				<br /><br />
				I was told I would enjoy the countryside, because village cats always get a bowl of milk, and
				fields and pantries are teeming with mice - just go and catch them. But this place is not a real
				village - just a farmstead. The wife of the maid’s brother began grumbling as soon as she saw
				us: “We have no place for you here, why did you leave the city, did the rivers of gold dry out?
				And why did you bring this creature, don’t we have enough cats already?” There were plenty of
				cats, indeed - I had to fight with them and lost half an ear in the battle, but in the end I
				settled down and got a bowl of milk every morning and evening when the maid came back from milking
				the cows.
			</p>
			<p class="mb-8" bind:this={triggerPoint}>
				At first I was scared to go out into the yard because of the growling and barking dog, but
				later I realized that this shaggy creature was tied to a chain and if you weren’t stupid and
				didn’t get any closer than the chain allowed, he couldn’t really touch you, only bark until
				he lost his voice, the old hysteric - I had so much fun teasing him.
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="img-area_10 bottom-0 left-1/5 w-full flex justify-center items-center relative {triggerClass}"
	>
		<img
			class="rats maw-w-screen-xl object-contain bottom sm:mb-32 sm:-mx-1-5 animate-slideInBottom {SlideFromTop}"
			alt="rat"
			src={ratsSrc}
		/>
		<img
			class="cats absolute bottom-1/3 left-1/3 maw-w-screen-xl object-contain bottom sm:mb-32 sm:-mx-1-5 animate-slideInBottom {SlideFromBottom}"
			alt="cat"
			src={catsSrc}
		/>
		<img
			class="dogs absolute bottom-0 left-0 maw-w-screen-xl object-contain bottom sm:mb-32 sm:-mx-1-5 animate-slideInBottom {SlideFromBottom}"
			alt="dog"
			src={dogsSrc}
		/>
	</div>
</ChapterItem>

<style global lang="postcss">
	
</style>
