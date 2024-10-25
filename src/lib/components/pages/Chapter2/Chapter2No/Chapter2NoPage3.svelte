<script>
	import { Card } from '@atoms';
	const building3Src = '/images/Chapter2/building3.png';

	const wireSrc = '/images/Chapter2/wire.png';

	import { ChapterItem } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;

	let triggerPoint, triggerClass, wireClass;

	const getTriggerClasses = () => {
		triggerClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-scaleDown',
			'animate-fadeOut'
		);
		wireClass = handleTriggerClasses(activeTrigger, nextTrigger, 'opacity-100', 'opacity-100');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<ChapterItem textAligment="right" class="z-10 sm:mt-120">
	<div slot="story" class="pt-16">
		<Card class=" !bg-primary !text-primary-300 mb-24">
			<p class="mb-6">
				In late August 1942, it was announced that all children under the age of ten would be
				rescued from the Ghetto. Trucks drove in, and the sick, the elderly, everyone who could not
				work - children as well - were to be put into them. Dad quickly pulled Tolik aside and hid
				him in the attic above our room. He put the boy on the mattress and strictly said that he
				could lie, stand or sit on the mattress, but never get off it.
			</p>
			<p bind:this={triggerPoint}>
				At night, Mom and Dad brought him a bit of bread, some water, and took out the piss bucket.
				This way, almost motionless, my little brother stayed for a whole month, after which he was
				allowed to climb down: Dad got fake documents with the entry that Tolik is already ten years
				old and can work with me in the factory, which meant another food card.
			</p>
		</Card>
		<Card class=" !bg-primary !text-primary-300 sm:mt-120">
			<p class="mb-6">
				In August 1944, the Ghetto was liquidated. This means that the remaining living people were
				taken to Auschwitz-Birkenau, a still operating concentration camp.
			</p>
			<p class="tracking-3 mb-6">TO DEATH.</p>
			<p class="bg-primary-300 w-3 h-3 border-none rounded-lg" />
		</Card>
	</div>
	<div
		slot="illustration"
		class="max-w-screen-md 2xl:m-auto w-full flex justify-center items-center relative"
	>
		<img
			class="transform lg:scale-90 object-contain mb-16 opacity-0 sm:w-full {triggerClass}"
			alt="building"
			src={building3Src}
		/>
		<img class="absolute bottom-0 opacity-0 sm:w-full {wireClass}" alt="wire" src={wireSrc} />
	</div>
</ChapterItem>
