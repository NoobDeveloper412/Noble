<script>
	import { Card } from '@atoms';
	const bgTaipSrc = '/images/Chapter11/bg.png';
	const cowTaipSrc = '/images/Chapter11/cow.png';
	const rivkaTaipSrc = '/images/Chapter11/rivka.png';

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

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex relative">
	<div class="bg_11tai_1 overflow-hidden fixed w-4/5 bottom-0 left-0 h-screen sm:w-full sm:left-0">
		<img
			class={`bgtaip object-contain absolute bottom-0 left-0 opacity-1 ${slideFromTop}`}
			alt="houseNe"
			src={bgTaipSrc}
		/>
		<img
			class={`cow object-contain absolute opacity-1 ${slideFromLeft}`}
			alt="soldierNe"
			src={cowTaipSrc}
		/>
		<img
			class={`rivka object-contain absolute opacity-1 ${imageTrigger}`}
			alt="soldierNe"
			src={rivkaTaipSrc}
		/>
	</div>

	<Card class="card float-right sm:float-none">
		<h2 class="c-h2 mb-8">Yes</h2>
		<p class="mb-6" bind:this={triggerPoint}>The brother’s wife agrees to hide the girls.</p>
		<p class="mb-6" bind:this={triggerPoint}>
			What does the maid’s brother do in the barn with the shovel? By morning he finishes digging a
			pit in the corner of the barn...
		</p>
		<p class="mb-6" bind:this={triggerPoint}>
			At night, they lift the door and help the girls out...
		</p>
		<p class="mb-6" bind:this={triggerPoint}>A priest from Pasvalys parish writes new metrics...</p>
	</Card>
</div>
