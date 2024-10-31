<script>
	const backSrc = '/images/back.png';
	const catSrc = '/images/cat.png';
	const leftSrc = '/images/left.png';
	const rightSrc = '/images/right.png';
	const sugiharaSrc = '/images/sugihara.png';
	const LogoImage = '/images/noble_rogues_english_logo.png';
	import { t } from 'svelte-i18n';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let landingPage;
	let content;
	let logo;
	let sugihara, cat, back, left, right, shortDetails;
	let button;

	const animateIn = (element, time) => {
		setTimeout(() => {
			element.classList.add('animate-focusInContractBck');
		}, time);
	};

	const animateLogo = (element, time) => {
		setTimeout(() => {
			element.classList.remove('opacity-0');
			element.classList.add('ss');
		}, time);
	};

	const animateUp = (element, time) => {
		setTimeout(() => {
			element.classList.add('anitop');
		}, time);
	};

	const animateTopIn = (element, time) => {
		setTimeout(() => {
			element.classList.add('animate-slideInBottom');
		}, time);
	};

	const animateOut = (element, time) => {
		setTimeout(() => {
			element.classList.remove('animate-focusInContractBck');
			element.style.opacity = '1';
			element.classList.add('animate-blurOut');
		}, time);
	};

	onMount(() => {
		animateOut(content, 3500);
		animateLogo(logo, 4700);
		animateUp(logo, 5500);
		animateTopIn(sugihara, 8300);
		animateTopIn(cat, 9300);
		animateTopIn(back, 10500);
		animateTopIn(left, 11500);
		animateTopIn(right, 12500);
		animateTopIn(button, 13500);
		animateTopIn(shortDetails, 14000);

		setTimeout(() => {
			landingPage.style.position = 'static';
			landingPage.classList.remove('z-30');
		}, 8500);
	});
</script>

<svelte:head>
	<title>
		{$t('title')}
	</title>
</svelte:head>

<div
	class="landing-page fixed w-full inset-0 flex items-center justify-center bg-primary z-30"
	bind:this={landingPage}
	out:fly={{ y: -2000, duration: 1500 }}
>
	<div
		class="next-page-indicator absolute w-full bottom-1/10 flex flex-col justify-center items-center p-10 bg-primary shadow-primaryTop"
	>
		<a
			href="en/01-how-to-recognize-spies"
			class="link_btn_part fixed opacity-0 border-primary-300 text-primary-300"
			bind:this={button}
		>
			{$t('beginButton')}
		</a>
		<p class="short_details opacity-0 fixed" bind:this={shortDetails}>
			{$t('shortDetails')}
		</p>
	</div>

	<div class="landing-page__overlay absolute h-full w-full inset-0 bg-primary" />
	<p
		class="landing-page__content absolute inset-0 m-auto h-min w-max uppercase text-center tracking-3 leading-7 opacity-0 animate-focusInContractBck"
		bind:this={content}
	>
		<!-- {$t('welcomeMessagePart1')} -->
		<br />
	</p>

	<img class="logoimage absolute opacity-0" bind:this={logo} alt="LogoImage" src={LogoImage} />

	<div class="bottom_image fixed bottom-1/5">
		<img
			class="absolute bottom-0 opacity-0 sugihara"
			bind:this={sugihara}
			alt="sugihara"
			src={sugiharaSrc}
		/>
		<img class="absolute bottom-0 opacity-0 cat_lan" bind:this={cat} alt="LogoImage" src={catSrc} />
		<img
			class="absolute absolute bottom-0 opacity-0 back"
			bind:this={back}
			alt="LogoImage"
			src={backSrc}
		/>
		<img
			class="absolute absolute bottom-0 opacity-0 left"
			bind:this={left}
			alt="LogoImage"
			src={leftSrc}
		/>
		<img
			class="absolute bottom-0 opacity-0 right"
			bind:this={right}
			alt="LogoImage"
			src={rightSrc}
		/>
	</div>
</div>
