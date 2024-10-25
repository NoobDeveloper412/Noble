<script>
	import { Button } from '@atoms';
	const Burger = '/icons/burger.svg';
	const Close = '/icons/close.svg';
	import { fly } from 'svelte/transition';
	import { mobileWidth } from '../utils';
	import { onMount } from 'svelte';

	let menu,
		screenWidth,
		offset,
		active = false;

	const handleMenuToggle = () => {
		active = !active;
		if (active === true) {
			document.body.classList.add('menu-expanded');
		} else if (document.body.classList.contains('menu-expanded')) {
			document.body.classList.remove('menu-expanded');
		}
	};

	const handleMenuBlur = (e) => {
		if (e.target !== menu && !menu.contains(e.target) && menu.classList.contains('active')) {
			handleMenuToggle();
		}
	};

	onMount(() => {
		offset = screenWidth <= mobileWidth ? 500 : -500;
	});
</script>

<svelte:window on:click={active && handleMenuBlur} bind:innerWidth={screenWidth} />
<div bind:this={menu} class={`menu fixed top-0 sm:right-0 h-screen z-10${active ? ' active' : ''}`}>
	<Button
		on:click={handleMenuToggle}
		class="menu-button absolute top-0 sm:right-0 p-4 sm:py-4 sm:px-3 z-10"
	>
		{#if !active}
			<img src={Burger} alt="Burger icon" class="pointer-events-none" />
		{:else}
			<img src={Close} alt="Close icon" class="pointer-events-none" />
		{/if}
	</Button>
	{#if active}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class={`menu-dropdown flex flex-col absolute top-0 sm:right-0 h-full w-76 pt-20 overflow-hidden ${
				active ? ' active' : ''
			}`}
			on:click={handleMenuToggle}
			transition:fly={{ x: offset, duration: 500 }}
		>
			<slot />
		</div>
	{/if}
</div>
