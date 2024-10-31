<script>
	import { Card } from '@atoms';
	import { ChoicesScreen } from '@components';
	const gateSrc = '/images/chapter3/gate.png';
	const houseSrc = '/images/chapter3/house.png';
	import { ChapterItem } from '@molecules';
	import { fade } from 'svelte/transition';
	import { chapterLinks } from '@utils';
</script>

<svelte:head>
	<title>House on the hill</title>
</svelte:head>

<div class="absolute w-full bg-grayscale" out:fade in:fade>
	<ChapterItem textAligment="right" imageAligment="smTop" class="mt-20 sm:mt-120">
		<div slot="story" class=" animate-slideInBlurredBottom">
			<Card class="bg-primary smMin:mt-0 !text-primary-300 !bg-primary">
				<h2 class="c-h2 my-8 text-primary-300">Yes</h2>
				<p class="mb-6 text-primary-300">
					Horror-struck Gudze’s face cringes in anger, and I make a loud noise: MEEOOWWW! - I scream
					like a siren, - “a sssspy, a fffraud, a thhhiefff” - I hiss as he tries to grab me,
					tearing his hands with blood streaks, but his fists squeeze me like iron pliers. Anxious
					Chiune and both of his assistants tumble in through the door. “The cat is chewing on the
					wires!” - Gudze roars. “Gudze is stealing font keys!” - I scream.
				</p>
				<p class="mb-6 text-primary-300">And so we are both kicked out of the house.</p>
				<p class="mb-6 text-primary-300">Gudze sets the Gestapo on the Consulate staff.</p>
				<p class="mb-6 text-primary-300">
					Me, Aiko the cat, the beloved Japanese Consulate pet, turns into a petty stray and fights
					with other cats in Kaunas dumps for food scraps, quickly losing all nine cat lives.
				</p>
				<p class=" bg-primary-300 w-3 h-3 border-none rounded-lg" />
			</Card>
		</div>
		<div
			slot="illustration"
			class="house-image_3 h-screen max-w-screen-md 2xl:m-auto w-full block justify-start items-start relative animate-slideInBlurredBottom"
		>
			<img
				class="mb-40 bottom-1/4 absolute right-0 sm:mb-32 sm:-mx-1-5"
				alt="house"
				src={houseSrc}
			/>
			<img
				class="maw-w-screen-xl absolute bottom-1/4 right-0 absolute sm:mb-16"
				alt="gate"
				src={gateSrc}
			/>
		</div>
	</ChapterItem>

	<ChoicesScreen
		header="Will the cat meow?"
		class="relative h-120 p-10 sm:p-4 z-10"
		choice1={{ href: '', text: 'yes' }}
		choice2={{ href: `${chapterLinks.chapter3}/no`, text: 'no' }}
	/>
</div>

<style global lang="postcss">
	.house-image_3 {
		max-width: 95%;
	}
	@screen sm {
		.house-image_3 {
			width: 150%;
			max-width: 150%;
			margin: 0 -25%;
		}
	}
</style>
