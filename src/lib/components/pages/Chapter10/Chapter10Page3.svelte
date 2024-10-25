<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const cityExCySrc = "/images/Chapter10/cityexcycle.png";

  const maidSrc = "/images/Chapter10/maid.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromTopClass,
    fromBottomClass,
    fromLeftClass,
    fromRightClass,
    triggerClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "opacity-0"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "opacity-1"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card class='pb-10'>
      <p class="mb-6" bind:this={triggerPoint}>
        However, during Lent, we went to buy herring almost every day - because
        only Jews sell herring, Lithuanians don’t know how to catch it. We
        walked through the town, passing the tanner’s shop, the ironmonger’s
        with shiny chains in the shop window, the hatter’s, the fresh-smelling
        pickled cucumber seller’s house, and greeted the cheerfully whistling
        shoemaker - this part of town with its smells and sounds reminded me of
        Kaunas.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        But you always had to hurry back home, to the farmstead, where the
        grumpy brother’s wife would complain that we, the townsfolk, eat her out
        of her home.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Those complaints got a bit softer after the first year, as both of us,
        the maid and I, did our best to please her. She milked the cows, fed the
        chickens, collected the eggs, separated the milk and spun the butter we
        brought to the town market. I caught mice, brought them home and laid
        them down at the brother's wife’s feet.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        We left Kaunas in early autumn. After wintering and finishing the spring
        work, we had summer. Rumors have spread that white-armbands took power
        in our town of Vaškai. That all Jews had to wear a yellow armband over
        their left elbow or they would be arrested. White armbands, yellow
        armbands - people’s games can be so bizarre.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="rail_area right-3/20 h-xl sm:h-l w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="object-contain rstation thrird absolute bottom-1/10 right-0 right-0 opacity-0 {fromTopClass}"
      alt="rail"
      src={cityExCySrc}
    />
    <img
      class="object-contain rmaid third absolute bottom-1/10 right-1/10 opacity-0 {fromBottomClass}"
      alt="maid"
      src={maidSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
 
</style>
