<script>
	import { ChoicesScreen } from '@components';
	import { ChapterMenu } from '@organisms';
	import { ChapterItem } from '@molecules';
	import { Card } from '@atoms';
	import { fade } from 'svelte/transition';
	import { chapterLinks, menuLinks } from '@utils';
</script>

<svelte:head>
	<title>Goodbye to Kaunas</title>
</svelte:head>

<div class="absolute w-full bg-grayscale sm:bg-primary" out:fade in:fade>
	<ChapterMenu links={menuLinks} class="hidden sm:block z-999" />

	<ChapterItem textAligment="right" imageAligment="smTop" class="mt-20 ">
		<div slot="story" class=" animate-slideInBlurredBottom">
			<Card class="!bg-primary smMin:mt-0 text-primary-300">
				<h2 class="c-h2 my-8 text-primary-300">Yes</h2>
				<p class="mb-6 text-primary-300">
					Trembling with fear, the maid opens the door and points her finger to the Decoding Room.
					Two soldiers kick down the door, take Gudze and, after beating him up, pull him out of the
					house. One of the soldiers, hissing “fascist nest”, hits the maid in the face, rips the
					golden chain with a cross from her neck and kicks the cat so that it flops down the stairs
					and remains lying there, its dead fur rumpled by a furious dog.
				</p>
			</Card>
		</div>
	</ChapterItem>

	<ChoicesScreen
		header="Will the maid betray Gudze?"
		class="relative h-120 p-10 sm:p-4 z-10"
		choice1={{ href: '', text: 'yes' }}
		choice2={{ href: `${chapterLinks.chapter8}/no`, text: 'no' }}
	/>
</div>

<style global lang="postcss">
	@screen sm {
		.house-image {
			width: 150%;
			max-width: 150%;
			margin: 0 -25%;
		}
	}
</style>
