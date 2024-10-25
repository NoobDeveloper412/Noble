<script>
	import { Card } from '@atoms';
	import { Explanation } from '@organisms';
	const akioSrc = '/images/Chapter4/akio.png';

	const jukikoSrc = '/images/Chapter4/jukiko.png';

	const rainSrc = '/images/Chapter4/rain.png';

	const parisSrc = '/images/Chapter4/paris.png';

	const librarySrc = '/images/Chapter4/library.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, firstTrigger, secondTrigger, thirdTrigger;

	let triggerPoint,
		imageTrigger = '',
		rainTrigger = '',
		parisTrigger = '',
		libraryTrigger = '',
		akioTrigger = '';

	const getTriggerClasses = () => {
		imageTrigger = handleTriggerClasses(activeTrigger, thirdTrigger, '', 'animate-fadeOut');
		rainTrigger = handleTriggerClasses(activeTrigger, firstTrigger, '', 'animate-fadeOut');
		libraryTrigger = handleTriggerClasses(
			firstTrigger,
			secondTrigger,
			'animate-fadeIn',
			'animate-fadeOut'
		);
		parisTrigger = handleTriggerClasses(
			secondTrigger,
			thirdTrigger,
			'animate-fadeIn',
			'animate-fadeOut'
		);
		akioTrigger = handleTriggerClasses(secondTrigger, thirdTrigger, '', 'animate-fadeOut');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
	<div
		class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full animate-slideInBlurredBottom {imageTrigger}"
	>
		<img
			src={rainSrc}
			alt=""
			class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full animate-fadeIn {rainTrigger}"
		/>
		<img
			src={librarySrc}
			alt=""
			class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full opacity-0 {libraryTrigger}"
		/>
		<img
			src={parisSrc}
			alt=""
			class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full opacity-0 {parisTrigger}"
		/>
		<img
			src={akioSrc}
			alt=""
			class="absolute bottom-1/10 left-1/10 sm:w-1/4 sm:left-0 sm:bottom-0 {akioTrigger}"
		/>
		<img
			src={jukikoSrc}
			alt=""
			class="absolute bottom-0 right-1/20 sm:w-3/4 sm:right-0 w-120 {akioTrigger}"
		/>
	</div>
	<Card class="card">
		<h2 class="c-h2 mb-8">Yukiko</h2>
		<p bind:this={triggerPoint}>
			It’s raining outside. We cats don’t like rain: sparrows are hiding, there are puddles
			everywhere, so when you come back inside you have to lick your paws for a long time. I sniff
			the radiator - the black disc of the heat regulator with the words “Cold - Warm” is turned to
			the warm side, so I jump on the windowsill. Next to me is Yukiko, she’s rewriting some
			documents. Each has to be rewritten three

			<Explanation variant="pink" class="border-pink border-b-4">
				<div slot="content" class="w-full">
					<p class="p-6">"There is no copying machine in the Consulate"</p>
				</div>
				<span slot="text">times</span>
			</Explanation>, so I can hear her thoughts wander to her past when she was still living in
			Japan.
		</p>
	</Card>
</div>
