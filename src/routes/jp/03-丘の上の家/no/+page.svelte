<script>
	import { ChapterItem, ChapterLink } from '@molecules';
	import { Card } from '@atoms';
	import { fade } from 'svelte/transition';
	const houseInsideSrc = '/images/chapter3/houseInside.png';
	import { RoomsImagesCarousel } from '@organisms';

	import { chapterLinks, rooms } from '@utils';
	let currentIndex = 0;
	let buildingClass = '';
	let carouselClass = 'hidden';
	let pulsingDot = '';
	let containerClass = '';
	const openCarousel = () => {
		currentIndex = 0;
		carouselClass = 'block animate-scaleInCenter';
		buildingClass = 'hidden';
		pulsingDot = 'hidden';
		containerClass = 'sm:mt-172';
	};
	const closeCarousel = () => {
		carouselClass = 'hidden';
		buildingClass = 'sm:z-10 animate-fadeIn';
		pulsingDot = 'block';
		containerClass = '';
	};
</script>

<svelte:head>
	<title>House on the hill</title>
</svelte:head>

<div class="absolute w-full bg-green" out:fade in:fade>
	<ChapterItem
		imageAligment="smTop"
		textAligment="right"
		class="mb-20 mt-20 sm:mt-120 {containerClass}"
	>
		<div slot="story" class=" animate-slideInBlurredBottom">
			<Card class="mb-20">
				<h2 class="c-h2 my-8">No</h2>
				<p class="mb-6">
					Horror-struck Gudze’s face immediately softens. He squats and mutters quietly, almost like
					a cat, “kitty kitty, my little kitty, how did you get here? Come to my arms so I don’t
					crush your tail with the door - gooood kitty, goood kitty” - he mutters quietly, slipping
					even more quietly out of the room and gently letting me go by the clothes hangers, “now
					off you go, run into the kitchen, maybe you’ll get a bite of ham”.
				</p>
				<p>
					Ham! - yet everyone knows the kitchen maid is in the kitchen rattling the lids, that girl
					would never give you a bite of ham, so I just scratch the boiler door with a black S
					(secret hiding place) arrow high above the handle that I cannot reach, and go upstairs.
				</p>
			</Card>
			<Card class="mb-20">
				<p class="mb-6">
					Unfortunately, there is nothing for me to do on the second floor: Yukiko is reading a book
					in her bedroom, Setsuko is trying to put the little ones to sleep in the nursery, the
					living room and the dining room - turned into one big room during parties - in the
					afternoon are empty.
				</p>
				<p class="mb-6">
					I know you would love to see how the only Japanese in Kaunas, if not all of Lithuania,
					live - but right now I’m more interested in climbing to the top of the house, where two
					Lithuanian tenants, Miss Jadvyga and her student brother, share the attic rooms. Please
					try to understand me: the student, Kazys, once caught some fish in the Nemunas river and
					offered me the heads and tails. How could you possibly forget such a feast? So I must
					check at least once a day whether this happiness is about to repeat.
				</p>
				<p>
					Follow me! Gray stone stairs, the kitchen, the bathroom. The laundry room: empty here, the
					laundry lady is coming in a couple days, so the wash is already in the baskets, but the
					huge boiling pot is not yet filled with water. Big lumps of soap, yet to be grated, smell
					sharply and make me sneeze, quick, quick, now I need to scratch the door of Miss Jadvyga’s
					room and meow as loudly as I can so she lets me in.
				</p>
			</Card>
			<Card>
				<p>
					It smells gently of mushrooms inside: this is the smell from the pile of old books, they
					don’t interest me, I rub against Miss Jadvyga’s skirt, she sighs “come here, pussy cat”.
					She puts her rosary beads on the table and takes me in her lap to pet. With a soft purr I
					tell her about the sparrows, about the sun which is not so warm anymore, about Mrs.
					Yukiko, in whose lap I loved to lay down, but these days I don't fit there anymore, about
					the maid, always trotting around like a cat, until I get dizzy from the warmth and fall
					asleep
				</p>
				<ChapterLink href={`${chapterLinks.chapter4}`} class="mt-12 w-full">
					Next Chapter
				</ChapterLink>
			</Card>
		</div>
		<div
			slot="illustration"
			class="max-w-screen-md 2xl:m-auto w-full flex justify-start items-end relative animate-slideInBlurredBottom"
		>
			<img
				class="house-image object-contain maw-w-screen-xl mb-40 sm:mb-32 sm:-mx-1-5 {buildingClass}"
				on:click={openCarousel}
				alt="house"
				src={houseInsideSrc}
			/>
			<RoomsImagesCarousel
				variant="trivia"
				content={rooms}
				bind:currentIndex
				class={carouselClass}
				close={closeCarousel}
			/>
		</div>
	</ChapterItem>
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
