<script>
	export let activeTrigger, nextTrigger;
	import { Card, Container } from '@atoms';
	const dadSrc = '/images/Chapter9/dad_white.png';
	const workshopeSrc = '/images/Chapter9/workshop.png';
	import { ChapterItem } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, fromLeftClass, fromRightClass, fromTopClass, fromBottomClass;

	const getTriggerClasses = () => {
		fromLeftClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredLeft',
			''
		);
		fromRightClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredRight',
			''
		);
		fromTopClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-slideInTop', '');
		fromBottomClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'opacity-1 animate-FadeIn',
			''
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
				Our family names don’t feature in the famous list of visas issued by Sugihara. When Dad,
				collapsed and sobbing, was found by a former employee passing by the closed Japanese
				Consulate, he felt sincerely sorry for him. In addition to pity, one golden shoe buckle
				certainly helped: Dad was told to return to Vilnius and go to St. Casimir’s Church. “What,
				to pray?” Dad asked, surprised. “Does the Christian God help the Jews?”
			</p>
			<p class="mb-6" bind:this={triggerPoint}>
				In the basement of St. Casimir’s Church there was a secret factory for forging visas,
				passports and other documents required for departure. Document fraud. When the Polish
				assistant brought Sugihara a rubber stamp to speed up the work at the peak of the visa
				issuance, he also had a duplicate of that stamp in his pocket. In such an illegal way, Dad
				got a very expensive and very fake visa for our family. One transit visa on behalf of Dad
				was enough for the whole family.
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="workshope_area h-xl sm:h-l w-full left-1/5 flex justify-center items-center relative"
	>
		<img
			class="fworkshope object-contain absolute bottom-0 left-0 opacity-0 {fromTopClass}"
			alt="door"
			src={workshopeSrc}
		/>
		<img
			class="dad-whit object-contain absolute right-0 bottom-0 opacity-0 {fromBottomClass}"
			alt="dad"
			src={dadSrc}
		/>
	</div>
</ChapterItem>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172">
	<Container
		class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
	>
		<Card class="!bg-primary">
			<p class="mb-6 text-primary-300">
				Having such a visa was not enough - it was still necessary to get permission to leave the
				Soviet Union! At the NKVD headquarters, Dad was kindly offered “work” in exchange for such
				permission.
			</p>
		</Card>
	</Container>
</div>

<style global lang="postcss">
	
</style>
