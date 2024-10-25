<script>
	export let activeTrigger, nextTrigger;
	import { Container, Card } from '@atoms';
	import { ChapterItem, HoverImage } from '@molecules';
	const personsSrc = '/images/chapter6/persons.png';

	const janSrc = '/images/chapter6/jan.png';

	const visaSrc = '/images/chapter6/visa.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, fromTopClass, triggerClass, fromLeftClass, fromFadeInClass;

	const getTriggerClasses = () => {
		fromTopClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInTop',
			'animate-slideOutTop'
		);
		fromLeftClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredLeft',
			''
		);
		fromFadeInClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-fadeInSlow ', '');
		triggerClass = handleTriggerClasses(activeTrigger, nextTrigger, '', 'animate-fadeOut');
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
				And so Nathan rushes home to pack his shirt, a few pairs of socks and a box of teeth powder,
				and knocks on the door of the dormitory where his old buddy Chaim lives. Two best friends go
				to Kaunas, to the Dutch Consulate, and pity-eyed Aaron goes with them, because it’s not that
				far from Kaunas to Vilnius, and he is worried about his family.
			</p>
			<p class="mb-6" bind:this={triggerPoint}>
				Now the two friends, Nathan and Chaim, stand in the office of the Dutch Consulate and try to
				persuade the interim Consul, a former radio salesman, to issue them visas to a little piece
				of the Netherlands not yet reached by the Nazis: the island of Curaçao in the Caribbean. The
				Consul says he’s been instructed that the island of Curaçao doesn’t need a visa, however,
				the Governor of the island himself decides whether to grant permission to enter or not (no
				one has yet heard the Governor say “yes”).
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="table_area_6 h-xl sm:h-l w-full flex justify-center items-center relative {triggerClass}"
	>
		<img
			class="object-contain absolute jan_6 mb-40 right-0 opacity-0 {fromFadeInClass}"
			alt="desk"
			src={janSrc}
		/>
		<img
			class="object-contain absolute persons_6 right-0 opacity-0 {fromLeftClass}"
			alt="book"
			src={personsSrc}
		/>
		<img
			class="object-contain absolute visa_6 right-3/20 opacity-0 {fromTopClass}"
			alt="person"
			src={visaSrc}
		/>
	</div>
</ChapterItem>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172 z-999">
	<Container
		class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
	>
		<Card class="!bg-primary">
			<p class="mb-6 text-primary-300">
				And then Nathan asks the Consul to make a trick. To write only the first sentence in the
				passport:
			</p>
			<p class="text-primary-300">
				“The Dutch Consulate in Kaunas states that no visa is required to enter the islands of
				Curaçao and Suriname.” And skip the second one: “The Governor’s permission is required to
				enter.”
			</p>
		</Card>
	</Container>
</div>

<style global lang="postcss">
	.table_area_6 {
		width: 700px;
		left: 20%;
		transition-delay: 5s;
	}
	.persons_6 {
		width: 350px;
		height: auto;
		top: auto;
		right: auto;
		left: 0%;
		bottom: 0;
		z-index: 99;
	}
	.jan_6 {
		width: 500px;
		height: auto;
		bottom: 0;
		right: 5%;
		left: auto;
	}
	.visa_6 {
		width: 120px;
		height: 90.29px;
		bottom: 10%;
		right: 30%;
		left: auto;
	}

	@screen sm {
		.table_area_6 {
			width: 100%;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
		.jan_6 {
			width: 100%;
			height: auto;
			bottom: 0;
			left: auto;
			right: 0%;
			margin-bottom: 5rem;
		}
		.persons_6 {
			width: 52%;
			left: -5%;
		}
		.visa_6 {
			width: 26%;
			height: 90.29px;
			bottom: 3%;
			left: 40%;
			right: auto;
			z-index: -9;
		}
		.z-999 {
			z-index: 999;
		}
	}
</style>
