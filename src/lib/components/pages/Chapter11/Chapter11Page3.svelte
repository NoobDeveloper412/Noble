<script>
	export let activeTrigger, nextTrigger;
	import { Card, Container } from '@atoms';
	const bgThSrc = '/images/Chapter11/bg-4.png';

	const peoplePoliceThSrc = '/images/Chapter11/peoplePolice.png';

	const rivkaThSrc = '/images/Chapter11/rivka-3.png';

	import { ChapterItem } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, fromLeftClass, fromRightClass, fromTopClass, fromCenterClass;

	const getTriggerClasses = () => {
		fromLeftClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeIn', '');
		fromRightClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeIn', '');
		fromTopClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeIn', '');
		fromCenterClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'opacity-1',
			'animate-fadeOut'
		);
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		console.log(activeTrigger);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
	<div slot="story" class="animate-slideInBlurredBottom">
		<Card>
			<p class="mb-6" bind:this={triggerPoint}>
				Rivka was the local doctor’s daughter. When the column of people on the way to death was
				already struggling through the forest, the father pushed his daughter into the bushes. One
				of the white-armbands who led the column saw it but turned away and pretended not to notice.
				In the past life - the years of peace - the doctor had saved that white-armband’s sick child
				from the clutches of death.
			</p>
			<p class="mb-6" bind:this={triggerPoint}>
				The uncle brought the two trembling and starving girls home, heated some water to wash the
				little one. In the morning, he cycled all the way to Vaškai, found his niece’s husband, and
				persuaded him to come back with a horse. The horse is still harnessed, maybe the maid could
				take care of it? Maybe the brother’s wife would agree to go out into the yard as well?
			</p>
			<p class="mb-6" bind:this={triggerPoint}>
				It was already dark outside, a light of a kerosene lamp dancing through the cracks in the
				wall of the barn. There were bags of flour in the carriage. The uncle lifted up one bag, and
				there they were: two little girls wrapped in a blanket hiding behind it.
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="grave_area right-1/10 h-xl sm:h-l w-full right-0 flex justify-center items-center relative"
	>
		<img
			class="object-contain forest_bg absolute right-0 opacity-0 {fromTopClass}"
			alt="door"
			src={bgThSrc}
		/>
		<img
			class="peoplepoli object-contain bottom-0 absolute opacity-0 {fromLeftClass}"
			alt="peoplepoli"
			src={peoplePoliceThSrc}
		/>
		<img
			class="rivka-3 object-contain absolute opacity-0 {fromCenterClass}"
			alt="rivka"
			src={rivkaThSrc}
		/>
	</div>
</ChapterItem>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172 z-999">
	<Container
		class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
	>
		<Card class="!bg-primary">
			<p class="mb-6 text-primary-300">
				“Daughter, please save me, the old fool I am. I can’t keep them, it’s not safe in my forest,
				the white-armbands may come back, rumors are spreading that there may be survivors. The
				white-armbands would come back with dogs, and that’s the end for me. Your farmstead is quite
				remote, you already have a baby that no one is talking about yet, please hide these two
				little ones, at least for a while, until we find a better solution.”
			</p>
		</Card>
	</Container>
</div>

<style global lang="postcss">
</style>
