<script>
	import { Container } from '@atoms';

	export let variant = 'violet';
	export let background = 'primary';
	export let positionY = 'top';
	export let href;
	export let positionX = '';

	const positions = {
		top: 'bottom-6',
		bottom: 'top-6'
	};
	const backgrounds = {
		primary: '!bg-primary-300',
		dark: '!bg-primary !text-primary-300'
	};

	const variants = {
		violet: {
			shadow: 'shadow-violetlg',
			background: 'bg-violet'
		},
		sand: {
			shadow: 'shadow-sandlg',
			background: 'bg-sand'
		},
		green: {
			shadow: 'shadow-greenlg',
			background: 'bg-green'
		},
		pink: {
			shadow: 'shadow-pinklg',
			background: 'bg-pink'
		},
		gray: {
			shadow: 'shadow-grayscalelg',
			background: 'bg-grayscale'
		}
	};
</script>

<Container
	{...$$props}
	id="explanationContainer"
	class="z-10 w-80 sm:w-64 absolute explanation-card hidden  {positions[
		positionY
	]} {variants[variant].shadow} {backgrounds[background]} "
>
	<div class="w-16px {variants[variant].background}" />
	<div class="flex flex-col items-end w-80 md:w-76 text-sm">
		<slot />
		{#if href}
			<a {href} target="_blank" class="!text-primary mb-6 mr-6 h-6 border-primary border-b text-xs"
				>Image sources</a
			>
		{/if}
	</div>
</Container>
