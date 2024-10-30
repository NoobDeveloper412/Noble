<script>
	export let activeTrigger, nextTrigger;
	import { Card } from '@atoms';
	const boysSrc = '/images/chapter3/boys@2x.png';

	const catBackSrc = '/images/chapter3/catBack.png';

	const gudzeSrc = '/images/chapter3/gudze@2x.png';

	const gudzePhotoSrc = '/images/chapter3/gudzePhoto.png';

	const houseSrc = '/images/chapter3/house.png';

	import { ChapterItem } from '@molecules';
	import { Explanation } from '@organisms';
	import { elementInViewport, handleTriggerClasses, imageReferences } from '@utils';

	let triggerPoint, triggerClass, houseClass;

	console.log(houseClass);

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		triggerClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBottom',
			'animate-slideOutBlurredRight'
		);
		houseClass = handleTriggerClasses(activeTrigger, nextTrigger, '', 'animate-fadeOut');
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="mb-20 sm:mt-172">
	<div slot="story">
		<Card class="mb-16">
			<p bind:this={triggerPoint}>
				Two little boys are playing in the yard, the older Hiroki throws the ball to the little
				Chiaki, who is just starting to walk, so the ball he didn’t catch is kicked by the secretary
				Gudze, smoking at the corner of the house.
				<Explanation
					variant="green"
					class="w-120 md:w-80"
					positionY="bottom"
					href={imageReferences[3].gudze}
				>
					<div slot="content" class="w-full">
						<img class="w-full h-64" alt="" src={gudzePhotoSrc} />
						<p class="p-6">
							Wolfgang Gudze, the secretary of Chiune Sugihara, a Lithuanian of German origin. He is
							also an agent of the German Gestapo, but only the cat can know this at the time.
						</p>
					</div>
					<span slot="text"> Gudze</span>
				</Explanation>, unlike other Polish staff at the Consulate, speaks Lithuanian, but when he
				bends over to pet me, I can smell his German shirt, a very suspicious scent.
			</p>
			<p class="mb-6">
				The ball hits the garden fence, scares the sparrows away and ruins my hunt, so I jump down
				to the ground. Well then, let’s go, I’ll show you around the house. This is a black arch of
				the coal bunker. Every time I sneak inside to check if there’s an easily caught bat or a
				mouse strayed from the vegetable pantry, I get scolded by the maid who cleans the rooms. “Go
				away, Aiko, you silly cat, you’ll stain the carpet again," she hisses, shoveling coal into
				the bucket and stamping down her foot, so I jump outside again.
			</p>
			<p>
				Both on the first floor, where the Japanese Consulate is located, and the second floor,
				where the Consul’s family lives,
				<Explanation variant="green" class="w-120 md:w-80">
					<p slot="content" class="p-6 text-sm">
						Usually, the doors of the buildings open towards the outside, that's how they are fire
						protection requirements.
					</p>
					<span slot="text" class="border-b-4 border-green"> the doors open inwards.</span>
				</Explanation> This must be for the sake of the cats, because when a cat waits at the door and
				the door opens inwards, you won’t hurt it even by accident.
			</p>
		</Card>
	</div>
	<div slot="illustration" class="w-full block justify-center items-center relative">
		<img
			class="house maw-w-screen-xl object-contain absolute right-0 bottom-1/5 mb-60 sm:mb-32 sm:-mx-1-5 animate-slideInBlurredBottom {triggerClass}"
			alt="house"
			src={houseSrc}
		/>
		<img
			class="object-contain absolute bottom-0 right-1/20 sm:-right-1/20 opacity-0 {triggerClass}"
			alt="cat"
			src={catBackSrc}
		/>
		<img
			class="object-contain absolute bottom-1/5 right-1/3 opacity-0 {triggerClass}"
			alt="gudze"
			src={gudzeSrc}
		/>
		<img
			class="object-contain absolute bottom-0 right-1/2 sm:left-0 opacity-0 {triggerClass}"
			alt="boys"
			src={boysSrc}
		/>
	</div>
</ChapterItem>
