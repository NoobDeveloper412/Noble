<script>
	import { Card } from '@atoms';
	const jewelyShopSrc = "/images/Chapter2/jewelry-shop.png";

	const lejaSrc = "/images/Chapter2/leja.png";

	import { HoverImage } from '@molecules';
	import { elementInViewport, handleTriggerClasses } from '@utils';

	export let activeTrigger, nextTrigger;

	let triggerPoint,
		backgroundTrigger = '',
		imageTrigger = '';

	const getTriggerClasses = () => {
		backgroundTrigger = handleTriggerClasses(activeTrigger, nextTrigger, '', 'animate-fadeOut');
		imageTrigger = handleTriggerClasses(activeTrigger, nextTrigger, '', 'animate-fadeOut');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col ">
	<div class="image-container ch2_1 overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full">
		<img
			src={jewelyShopSrc}
			alt=""
			class="absolute top-0 right-1/20 sm:top-1/4 sm:right-0 {backgroundTrigger ||
				'animate-fadeInSlow'}"
		/>
		<HoverImage
			class="absolute bottom-0 right-1/10 mx-auto w-94 sm:w-44 sm:right-1/5 {imageTrigger ||
				'animate-slideInBlurredBottom z-20 sm:z-0'}"
			src={lejaSrc}
			alt=""
		>
			<p class="box-shadow-sandsm bg-primary p-4 font-serif text-xl w-max">Leah</p>
		</HoverImage>
	</div>
	<Card class="card">
		<h2 class="c-h2 mb-8">At first, it wasn’t So Bad</h2>
		<p bind:this={triggerPoint}>
			Hi, I'm Leah. I was born in Frankfurt am Main, so I speak German, not just French (taught in
			our Polish gymnasium), because when Tolik, my little brother, was born, our family moved to
			Łódź. My dad, a jeweller, owns a small jewellery shop.
		</p>
	</Card>
</div>
