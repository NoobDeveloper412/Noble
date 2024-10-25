<script>
	export let activeTrigger, nextTrigger;
	import { Card, Container } from '@atoms';
	const emptyChairSrc = '/images/Chapter8/empty-chair.png';
	const gudzeSrc = "/images/Chapter8/gudze.png";

	import { ChapterItem } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, fromTopClass, triggerClass, fromBottomClass, fromFadeInClass;

	const getTriggerClasses = () => {
		fromTopClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeIn ', '');
		fromBottomClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeIn ', '');
		fromFadeInClass = handleTriggerClasses(activeTrigger, nextTrigger, 'opacity-1 ', '');
		triggerClass = handleTriggerClasses(activeTrigger, nextTrigger, 'opacity-1 ', '');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
	<div slot="story" class="animate-slideInBlurredBottom">
		<Card class="mb-16 z-20">
			<p class="mb-6" bind:this={triggerPoint}>
				When I get back to our house, which is no longer a consulate, I look around for the maid so
				that I could complain to her about my feet sore from running around Kaunas - but I find her
				in tears! She no longer has a job. I am a poor cat left behind by the masters, she is a poor
				maid left behind by the masters. The new Soviet government says that there is no God, and
				therefore no St. Zita’s Order, only normal worker unions. Also, the new Russian government
				says there are and cannot be any masters, so there can be no maids, too.
			</p>
			<p class="mb-6" bind:this={triggerPoint}>
				As soon as it gets dark, Gudze sneaks into the empty consulate, looking around carefully. He
				jokes with the maid, scratches my chin, then looks for something in the former Decoding
				Room. Soon the door of the consulate is shaken by blows: someone is knocking, I hear a dog
				barking, so I just hiss and hide behind the rolled up carpets.
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="table_area_4 left-1/3 h-xl sm:h-l w-full flex justify-center items-center relative opacity-0 {triggerClass}"
	>
		<img
			class="empty_chair object-contain absolute right-0 opacity-0 {fromTopClass}"
			alt="empty chair"
			src={emptyChairSrc}
		/>
		<img
			class="object-contain absolute gudze per right-3/20 opacity-0 {fromBottomClass}"
			alt="person"
			src={gudzeSrc}
		/>
	</div>
</ChapterItem>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172 z-999">
	<Container
		class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
	>
		<Card class="!bg-primary">
			<p class="mb-6 text-primary-300">“Open up, militsiya!” someone screams,</p>
			<p class="text-primary-300">
				“We are looking for Wolfgang Gudze, a dangerous German Gestapo agent, open up!”
			</p>
		</Card>
	</Container>
</div>

<style global lang="postcss">
	.table_area_4 {
		width: 530px;
		bottom: 3%;
	}
	img.empty_chair.object-contain.absolute.right-0.opacity-0 {
		bottom: 15%;
	}
	.gudze {
		bottom: 57%;
		z-index: 9;
		max-width: 180px;
	}
	.gudze.per {
		animation-delay: 200ms;
	}
	@screen sm {
		.table_area_4 {
			width: 100%;
			left: 0;
			transition-delay: 5s;
		}
	}
</style>
