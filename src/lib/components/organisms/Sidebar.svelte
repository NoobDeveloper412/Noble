<script>
	import { Button } from '@atoms';
	import { fly } from 'svelte/transition';
	import { mobileWidth } from '../utils';
	import { onMount } from 'svelte';

	let menu,
		screenWidth,
		offset,
		active = false;

	const handleMenuToggle = () => {
		console.log('handleMenuToggle');
		active = !active; // Toggle active state first

		if (active) {
			document.body.classList.add('menu-expanded');
		} else {
			document.body.classList.remove('menu-expanded');
		}
	};

	const handleMenuBlur = (e) => {
		if (!menu.contains(e.target)) {
			handleMenuToggle();
		}
	};

	onMount(() => {
		offset = screenWidth <= mobileWidth ? 500 : -500;
	});
</script>

<svelte:window on:click={handleMenuBlur} bind:innerWidth={screenWidth} />

<div bind:this={menu} class={`menu fixed top-0 sm:right-0 h-screen z-10${active ? ' active' : ''}`}>
	<button
		on:click|stopPropagation={handleMenuToggle}
		class="menu-button absolute top-0 sm:right-0 p-4 sm:py-4 sm:px-3 z-10"
	>
		{#if !active}
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="#F9F6F2"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g style="mix-blend-mode:difference">
					<rect x="12" y="14" width="16" height="4" />
					<rect x="28" y="26" width="16" height="4" transform="rotate(-180 28 26)" />
				</g>
			</svg>
		{:else}
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="#F9F6F2"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g style="mix-blend-mode:difference">
					<rect
						x="15.8994"
						y="13.0703"
						width="16"
						height="4"
						transform="rotate(45 15.8994 13.0703)"
					/>
					<rect
						x="27.1421"
						y="15.8281"
						width="16"
						height="4"
						transform="rotate(135 27.1421 15.8281)"
					/>
				</g>
			</svg>
		{/if}
	</button>
	{#if active}
		<div
			class={`menu-dropdown flex flex-col absolute top-0 sm:right-0 h-full w-76 pt-20 overflow-hidden${active ? ' active' : ''}`}
			on:click|stopPropagation
			transition:fly={{ x: offset, duration: 500 }}
		>
			<slot />
		</div>
	{/if}
</div>
