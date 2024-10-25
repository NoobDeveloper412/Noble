<script>
	import { Card } from '@atoms';
	const building1Src = '/images/Chapter2/building1.png';

	const wireSrc = '/images/Chapter2/wire.png';

	import { ChapterItem } from '@molecules';
	import { Explanation } from '@organisms';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;

	let triggerPoint, triggerClass, wireClass, HideClass;

	const getTriggerClasses = () => {
		HideClass = handleTriggerClasses(activeTrigger, nextTrigger, '', 'opacity-0');
		triggerClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-scaleDown',
			'animate-fadeOut'
		);
		wireClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBottom',
			'animate-fadeOut'
		);
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem textAligment="right" class="mb-20 z-20">
	<div slot="story" class="pt-16 sm:mt-120">
		<Card class="mb-24 animate-slideInBlurredBottom !bg-primary !text-primary-300">
			<p class="mb-6">And Dad’s sweetheart, biting angrily at her lip, shook her head:</p>
			<h2 class="c-h2 my-8 text-primary-300">No</h2>
			<p>
				Because things aren’t so bad here, because Grandma is too weak to endure such a long trip
				across the seas, because little Tolik throws up every time we drive outside the city,
				because Aaron can’t be torn away from his beloved Eliza,
				<span class="tracking-3 uppercase"> because, because, because!</span>
			</p>
		</Card>

		<Card class="bg-primary animate-slideInBlurredBottom  !bg-primary !text-primary-300">
			<p class="mb-6">
				In 1939, the main street in Łódź was renamed
				<Explanation variant="gray" class="w-120 md:w-80">
					<p slot="content" class="p-6 bg-primary !text-primary-300">
						Hitler Street, Adolf-Hitler-Straße - many of the cities’ main streets were renamed like
						that, for example, in Klaipėda (then Memel) there was such a street.
					</p>
					<span slot="text" class="border-b-4 border-grayscale"> Hitlerstrasse</span>
				</Explanation>
				and Łódź was renamed Litzmannstadt. We have no right to walk this street. We no longer have the
				right to our city. Dad lost all his customers. Police confiscated my brother’s bike, Mom’s jewellery
				and Kelvinator, Dad’s house.
				<Explanation variant="gray" class="w-120 md:w-80">
					<div slot="content" class="p-6 bg-primary">
						<p class="pb-4">
							A ghetto is a separate quarter, at first this word didn’t mean anything too terrible,
							only a certain area where people of the same nationality lived, had their own schools,
							doctors, craftsmen and so on.
						</p>
						<p class="pb-4">
							During the Second World War, the Nazis began to establish ghettos as a temporary stop
							for Jews before being transported to concentration camps.
						</p>
						<p>
							People had to leave their own homes and move to the worst neighborhood, live cramped
							and without any former conveniences. You could leave the ghetto for mostly forced
							labor, but you had to come back.
						</p>
					</div>
					<span slot="text" class="border-b-4 border-grayscale" bind:this={triggerPoint}>
						Ghetto
					</span>
				</Explanation>
				– we got a small room there.
			</p>
			<p>
				At first, we had to pay for the fences and barbed wire surrounding the Ghetto area. You are
				thrown into prison and ordered to pay "for security”!
			</p>
		</Card>
	</div>
	<div
		slot="illustration"
		class="max-w-screen-md first-image w-full flex justify-center items-center relative 2xl:m-auto {HideClass} "
	>
		<img
			class="first-image object-contain animate-slideInBlurredBottom mb-16 sm:w-full transform {triggerClass} "
			alt="building"
			src={building1Src}
		/>
		<img class="absolute bottom-0 opacity-0 sm:w-full {wireClass}" alt="wire" src={wireSrc} />
	</div>
</ChapterItem>

<style global lang="postcss">
	@screen sm {
		.first-image {
			margin-top: -80%;
		}
	}
</style>
