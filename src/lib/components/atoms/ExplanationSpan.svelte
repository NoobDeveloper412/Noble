<script>
	import { onMount } from 'svelte';

	export let positionX;

	let screenWidth;
	let element;
	let elementRect = { left: 0 };

	onMount(() => {
		elementRect = element.getBoundingClientRect();
	});

	$: {
		let widthBreakPoint = screenWidth / 2 - 50;
		positionX = elementRect.left > widthBreakPoint ? 'right-0' : 'left-0';
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />
<span bind:this={element} class="relative border-b-4 text {$$props.class || ''}">
	<slot />
</span>
