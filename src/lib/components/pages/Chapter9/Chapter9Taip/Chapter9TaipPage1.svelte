<script>
	import { Card } from '@atoms';
	const peoTaipSrc = '/images/Chapter9/people-taip.png';
	const policeTaipSrc = '/images/Chapter9/police.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;
	let triggerPoint, imageTrigger, slideFromTop, slideFromLeft;

	const getTriggerClasses = () => {
		imageTrigger = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBottom',
			'animate-fadeOut'
		);
		slideFromTop = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInTop',
			'animate-fadeOut'
		);
		slideFromLeft = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredLeft',
			'animate-fadeOut'
		);
	};

	// Set the trigger when the element is in the viewport
	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex relative">
	<div
		class="image-container ch_12taip_a overflow-hidden fixed w-1/2 bottom-0 left-0 h-screen sm:w-full sm:left-0"
	>
		<img
			class={`peotaip object-contain absolute bottom-0 left-1/10 opacity-0 ${slideFromTop}`}
			alt="houseNe"
			src={peoTaipSrc}
		/>
		<img
			class={`police object-contain absolute bottom-0 left-1/10 opacity-0 ${slideFromLeft}`}
			alt="soldierNe"
			src={policeTaipSrc}
		/>
	</div>
	<Card class="card float-right sm:float-none">
		<h2 class="c-h2 mb-8">Yes</h2>
		<p class="mb-6" bind:this={triggerPoint}>
			Dad agrees to sign a cooperation agreement. And so he gets permission for a journey to
			freedom. Maybe nothing bad will happen if he doesn’t report anything, maybe he will just
			dissolve somewhere on the way and disappear from the list of NKVD assistants? After all, those
			lists of forced assistants are endless.
		</p>
	</Card>
</div>
