<script>
	import { Card } from '@atoms';
	import { ChapterItem, ChapterLink, HoverImage } from '@molecules';
	import { ChapterMenu, SpyImagesCarousel } from '$lib/components/organisms';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { chapterLinks, menuLinks } from '@utils';

	let elementForMaid;
	let elementForSpy;
	let elementForCat;
	let intersectingMaid = false;
	let intersectingSpy = false;
	let intersectingCat = false;

	const smallImages = [
		{
			alt: 'ball',
			src: '/images/chapter1/ball.png', // Direct source path
			class: 'left-1/5 top-1/5 2xl:left-1/4',
			title: 'Vaikutis',
			description:
				'Sekliais gali dirbti net visai nedideli vaikučiai – beje, kuo jie nedidesni, tuo labiau jų niekas nepastebi: kas atkreips dėmesį į po kojom vis pasipainiojantį murziną gatvės vaikigalį? '
		},
		{
			alt: 'movieTicket',
			src: '/images/chapter1/movieTicket.png', // Direct source path
			class: 'right-1/5 top-1/5 2xl:right-1/4',
			title: 'Kino bilietų tikrintojas',
			description:
				'Jo niekas nepastebi ir negirdi, o jis mato visus ir įsidėmi, ką tarpusavyje prieš filmo seansą kalbasi atsipalaidavę žiūrovai. '
		},
		{
			alt: 'passportSmall',
			src: '/images/chapter1/passportSmall.png', // Direct source path
			class: 'left-1/5 bottom-1/5 2xl:left-1/4',
			title: 'Turistas',
			description:
				"Jis maklinėja svetimo miesto gatvėmis, vis pasiklysta, tad turi klausti kelio ir čia pat rasti progą smalltalk'ui, neįpareigojančiam paplepėjimui."
		},
		{
			alt: 'orange',
			src: '/images/chapter1/orange.png', // Direct source path
			class: 'right-1/5 bottom-1/5 2xl:right-1/4',
			title: 'Daržovių pardavėjas',
			description: 'Tas kuris kaskart jums padovanojantis papildomą apelsiną. '
		}
	];

	let illustrations;
	let spyImage;
	let carouselClass = 'hidden';
	let currentImageIndex = 0;

	const openSpyCarousel = (index) => {
		currentImageIndex = index;
		illustrations.classList.add('hidden');
		carouselClass = 'flex animate-scaleInCenter';
		spyImage.classList.add('active');
	};
	const closeCarousel = () => {
		carouselClass = 'hidden';
		illustrations.classList.toggle('hidden');
		spyImage.classList.toggle('active');
	};

	let chapterItem1;
	let chapterItem2;
	let chapterItem3;
	let intersectingchapterItem1;
	let intersectingchapterItem2;
	let intersectingchapterItem3;
</script>

<svelte:head>
	<title>How to recognize spies?</title>
</svelte:head>

<div class="absolute w-full bg-violet">
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />

	<IntersectionObserver element={chapterItem1} bind:intersecting={intersectingchapterItem1}>
		<ChapterItem class="mb-20 z-10">
			<div slot="story" class="pt-16 mt-24 smRange:mt-54 sm:mt-120 sm:t-0" bind:this={chapterItem1}>
				<Card class="animate-slideInBlurredBottom">
					<h2 class="c-h2 mb-8">How to recognize spies?</h2>
					<p>
						Almost anyone asked to describe a spy (or a secret agent, if you want to be polite) will
						mention a black trench coat, a black fedora hat, dark glasses. Maybe some cool gadget,
						too: recorder buttons, cameras inside the shoes or a smoke bomb that can be quickly
						popped out of a candy wrapper.
					</p>
					<p class="mt-6">
						The truth is spies often look nothing like spies. They tend to be
						<IntersectionObserver element={elementForSpy} bind:intersecting={intersectingSpy}>
							<span class="tracking-3" bind:this={elementForSpy}>very nice people.</span>
						</IntersectionObserver>
					</p>
				</Card>
			</div>
			<div
				slot="illustration"
				class="spy w-full flex justify-center items-center relative
          {intersectingSpy ? 'smMin:animate-slideInBlurredBottom' : 'smMin:opacity-0'}
          {intersectingchapterItem2
					? 'sm:animate-blurOut'
					: intersectingchapterItem1
						? ''
						: 'sm:opacity-0'}"
			>
				<div bind:this={illustrations} class="z-10">
					{#each smallImages as image, index}
						<img
							class="absolute animate-vibrate smRange:w-40 smRange:h-40 sm:w-28 sm:h-28 {intersectingMaid &&
							intersectingSpy
								? 'smMin:animate-slideOutBlurredRight'
								: ''}   {image.class}"
							alt={image.alt}
							src={image.src}
							on:click={() => openSpyCarousel(index)}
						/>
					{/each}
				</div>
				<img
					bind:this={spyImage}
					class="spy-image 2xl:w-4/6 object-contain z-0 {intersectingMaid && intersectingSpy
						? 'smMin:animate-blurOut'
						: ''}"
					alt="spy"
					src="/images/chapter1/spy.png"
				/>
				<SpyImagesCarousel
					content={smallImages}
					bind:currentIndex={currentImageIndex}
					class="{intersectingMaid ? 'hidden' : ''} {carouselClass}"
					close={closeCarousel}
				/>
			</div>
		</ChapterItem>
	</IntersectionObserver>
	<IntersectionObserver element={chapterItem2} bind:intersecting={intersectingchapterItem2}>
		<ChapterItem class="mb-20 sm:mt-152">
			<div slot="story" bind:this={chapterItem2}>
				<Card>
					<p class="mb-6">
						Nowadays, things are much simpler: if you have a phone in your pocket, you also have a
						device that might be spying on you. But I’d like to take you back to much more exciting
						times when nothing was so simple and easy.
					</p>
					<p class="mb-6">
						Lithuania in 1918 already had an expanding network of secret services. Since the new
						state couldn’t dedicate much money to such affairs, the spy squad was organized
						exclusively from women: sisters of St. Zita, maids. So if you have a housekeeper, you
						need to be more careful than ever.
					</p>
					<IntersectionObserver
						element={elementForMaid}
						bind:intersecting={intersectingMaid}
						rootMargin="100px"
					>
						<p bind:this={elementForMaid}>
							The housekeeper cleans your drawers, manages your desktops, takes out the rubbish (and
							sieves through it, no doubt). The housekeepers tend to walk around unnoticed, you look
							at them as you would at a piece of furniture, a dumb rug. All the more so because this
							halfwit is completely uneducated, often doesn’t understand what is being said to her
							and speaks no foreign language whatsoever.
						</p>
					</IntersectionObserver>
				</Card>
			</div>
			<div
				slot="illustration"
				class="w-full flex justify-center items-center
          {intersectingMaid ? 'smMin:animate-focusIn' : 'smMin:hidden'} 
          {intersectingMaid && intersectingCat ? 'smMin:animate-slideOutBlurredRight' : ''}
          {intersectingchapterItem3 ? 'sm:animate-slideOutBlurredRight' : ''}
          {intersectingchapterItem2
					? 'sm:animate-focusIn'
					: intersectingchapterItem3
						? 'sm:animate-slideOutBlurredRight'
						: 'sm:hidden'}
          "
			>
				<img
					class="object-contain 2xl:w-1/2"
					alt="houseMaid"
					src="/images/chapter1/houseMaid.png"
				/>
			</div>
		</ChapterItem>
	</IntersectionObserver>
	<IntersectionObserver element={chapterItem3} bind:intersecting={intersectingchapterItem3}>
		<ChapterItem class="mb-20 z-10 sm:mt-172 " imageAligment="top">
			<div slot="story" bind:this={chapterItem3}>
				<Card class="mb-16">
					<p>
						Ha. Well, she doesn’t. Maybe she can’t speak. Or maybe she doesn’t want to. Here, look
						at me, the cat, the brilliant teller of this story: I could be the best of spies. My
						coat is black, I have white gloves, long whiskers and erect ears. I love to be petted.
						All the spies I had a chance to meet were the best petters. I guess they suspected we
						had something in common. If I want, I can purr so sweetly that the hypnotized secret
						agents will reveal all their secrets to me. If I want, I can meow like a siren when the
						secret services try to stick a listening bug under the desktop.
					</p>
				</Card>
				<Card class="flex flex-col items-stretch sm:mt-172">
					<IntersectionObserver
						element={elementForCat}
						bind:intersecting={intersectingCat}
						rootMargin="100px"
					>
						<p class="mb-6" bind:this={elementForCat}>
							Why am I talking so much about spies? Because there are tons of them, those spies.
							Haven’t you heard that by 1939, the Lithuanian security services had detained 302
							people spying in favor of Poland (42 of them women), 87 (3 women) spying for Germany,
							and there had to be four times more Soviet agents than all of these put together.
						</p>
					</IntersectionObserver>
					<p>
						But numbers bore me, they make me yawn. We cats, when not sleeping or hunting, mostly
						like to play. Come ooon, plaaay with meee-eow. Let’s travel to Lithuania just before the
						outbreak of the Second World War: I will show you the city of Kaunas where there were so
						many spies that it was later dubbed the Northern Casablanca. I will show you how your
						peers lived back then, I will tell you eleven stories. They might include spies,
						forgers, and ordinary housekeepers - only the eyes of the cat can see such rogues
						through, people usually can’t distinguish who is who. So never forget:
					</p>
					<p>
						Spies and Frauds of Every Hair Tend to be Very Nice People. (And cats, of course, cats!)
					</p>
					<ChapterLink
						href={chapterLinks.chapter2}
						class="mt-12 w-full border-primary text-primary"
					>
						NEXT CHAPTER
					</ChapterLink>
				</Card>
			</div>
			<div
				slot="illustration"
				class="desk w-full flex justify-center items-start {intersectingCat
					? 'smMin:animate-slideInBlurredBottom'
					: 'smMin:hidden'} {intersectingchapterItem3
					? 'sm:animate-slideInBlurredBottom'
					: 'sm:hidden'}"
			>
				<img class="object-contain mt-24 2xl:w-4/6" alt="desk" src="/images/chapter1/desk.png" />
				<img
					class="absolute left-1/5 sm:-left-1/5 smRange:left-6 top-12 2xl:left-1/4"
					alt="deskLight"
					src="/images/chapter1/deskLight.png"
				/>
				<img
					class=" documents animate-vibrate absolute left-0 bottom-0 sm:-left-1/5"
					alt="documents"
					src="/images/chapter1/documents.png"
				/>
				<img
					class="angry-cat hidden animate-vibrate absolute right-6 smRange:right-1/20 xs:-right-1/5 top-1/5 2xl:right-1/5"
					alt="cat"
					src="/images/chapter1/catAngry.png"
				/>
				<img
					class="cat animate-vibrate absolute right-12 smRange:right-1/20 xs:-right-1/5 top-1/5 2xl:right-1/5"
					alt="cat"
					src="/images/chapter1/cat.png"
				/>
				<HoverImage
					class="happy-cat opacity-0 animate-vibrate absolute right-12 smRange:right-1/20 xs:-right-1/5  top-1/5 2xl:right-1/5"
					alt="cat"
					src="/images/chapter1/catBlissful.png"
				>
					<div class="bg-primary py-3 px-4 text-primary-300 font-serif font-black">Akio</div>
				</HoverImage>
			</div>
		</ChapterItem>
	</IntersectionObserver>
</div>

<style global lang="postcss">
	.desk {
		height: 600px;
	}
	.documents:hover {
		@apply animate-fastVibrate w-1/2;

		& ~ .cat {
			@apply hidden;
		}
		& ~ .angry-cat {
			@apply block;
		}
	}
	.happy-cat:hover {
		@apply opacity-100;
	}
	.spy-image.active {
		max-width: 100%;
		width: 100%;
		margin: 0 -50%;
	}
	@screen sm {
		.spy-image.active {
			max-width: 250%;
			width: 250%;
			margin: 0 -150%;
		}
	}
</style>
