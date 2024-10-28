<script>
	import ExplanationSpan from '../atoms/ExplanationSpan.svelte';
	import ExplanationCard from './ExplanationCard.svelte';
	export let variant, background, positionY, href;
	let isActive;
	let positionX;
	const variants = {
		violet: 'border-violet',
		sand: 'border-sand',
		green: 'border-green',
		pink: 'border-pink',
		gray: 'border-grayscale'
	};
</script>

<ExplanationSpan bind:isActive class={variants[variant]} bind:positionX>
	<ExplanationCard {variant} {background} bind:positionX bind:isActive {positionY} {href}>
		<slot name="content" />
	</ExplanationCard>
	<slot name="text" />
</ExplanationSpan>
