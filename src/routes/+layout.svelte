<script>
	import cursorDot from 'cursor-dot';
	import '../app.css';
	import { onMount } from 'svelte';
	import GlobalStyle from '@components/GlobalStyle.svelte';
	import Nav from '../lib/components/Nav.svelte';

	let cursor;
	onMount(() => {
		// Initialize cursorDot
		cursor = cursorDot({
			diameter: 24,
			easing: 4,
			background: '#fff',
			borderColor: '#fff',
			scale: 1
		});

		// Apply the cursor effect to elements
		cursor.over('a, button', 'div.hoverable', '.clickable', {
			scale: 4
		});
	});

	let { children } = $props();
</script>

<main>
	<Nav />
	<GlobalStyle />
	{@render children()}
</main>
