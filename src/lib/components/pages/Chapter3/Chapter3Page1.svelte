<script>
	export let trigger;
	import { Card } from '@atoms';
	import { ChapterItem } from '@molecules';
	import { Explanation } from '@organisms';

	const klaipedaSrc = '/images/chapter3/klaipeda.jpg';
	const vilniusSrc = '/images/chapter3/vilnius.jpg';
	import { handleTriggerClasses, imageReferences } from '@utils';

	let houseClass;

	const getTriggerClasses = () => {
		houseClass = handleTriggerClasses(trigger, undefined, 'animate-fadeOut', '');
	};
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
	<div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
		<Card class="house-card">
			<h2 class="c-h2 mb-8">House on the hill</h2>
			<p>
				This is Europe. This is the Baltic
				<Explanation
					variant="green"
					class="w-120 md:w-80"
					href={imageReferences[3].jura}
					positionY="bottom"
				>
					<div slot="content" class="">
						<img class="w-full h-64" alt="" src={klaipedaSrc} />
						<p class="p-6 text-sm">
							At the time of the story, Klaipėda was a part of Germany (since March 23, 1939).
						</p>
					</div>
					<span slot="text"> Sea</span>
				</Explanation>
				. This, holding to that sea with one short border, is the state of Lithuania.

				<Explanation
					variant="green"
					class="w-120 md:w-80"
					href={imageReferences[3].vilnius}
					positionY="bottom"
				>
					<div slot="content" class="">
						<img class="w-full h-64" alt="" src={vilniusSrc} />
						<p class="p-6 text-sm">
							As of August 1939, Vilnius still belonged to Poland (Poland was attacked by Nazi
							Germany on September 1, and on September 17 eastern Poland was attacked by the USSR).
							On September 19, Vilnius and its area were occupied by the Red Army. According to the
							mutual assistance agreement of October 10, 1939, the Vilnius region was to be returned
							to Lithuania. On October 27-28, the Lithuanian Armed Forces solemnly entered Vilnius.
						</p>
					</div>
					<span slot="text"> Vilnius</span>
				</Explanation> is still unclear whom it belongs to. This is Vaižganto Street and a white brand
				new
				<Explanation variant="green" class="w-120 md:w-80" positionY="bottom">
					<p slot="content" class="p-6 text-sm">
						The house was commissioned by the Lithuanian Minister of Education Juozas Tonkūnas
						(March 30, 1894 - May 6, 1968) for his family to live in. It was completed on October 3,
						1939, and on October 7, 1939 Juozas Tonkūnas signed a lease agreement with Chiune
						Sugihara, who recently arrived in Lithuania to open a Japanese Consulate.
					</p>
					<span slot="text"> house</span>
				</Explanation> - marked with number 30 and surrounded by a fence. This is the gate, framed by
				two brick towers. And this is me, the owner of this whole image, Akio the cat, sitting on the
				gate and warming up in the late autumn sun.
			</p>
		</Card>
	</div>
</ChapterItem>

<style lang="postcss">
	.house-card {
		z-index: auto!important;
	}
</style>
