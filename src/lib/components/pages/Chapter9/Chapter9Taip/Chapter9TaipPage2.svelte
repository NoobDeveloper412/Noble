<script>
  import { Card } from "@atoms";
  const fullFamilySrc = "/images/Chapter9/all-family.png";

  const japanesePeopSrc = "/images/Chapter9/japanese-people.png";

  const riverSrc = "/images/Chapter9/river.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, slideFromLeft, slideFromTop, slideFromBottom;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(activeTrigger, nextTrigger, "", "");
    slideFromLeft = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "opacity-1"
    );
    slideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "opacity-1"
    );
    slideFromBottom = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "opacity-1"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="img-area-taip image-container overflow-hidden fixed w-1/2 bottom-0 left-0 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={riverSrc}
      alt=""
      class="absolute river bottom-1/10 right-0 opacity-0 {slideFromLeft}"
    />
    <img
      src={fullFamilySrc}
      alt=""
      class="absolute fullfamily bottom-0 right-0 opacity-0 {slideFromBottom}"
    />
    <img
      src={japanesePeopSrc}
      alt=""
      class="absolute japenese bottom-0 right-0 opacity-0 {slideFromTop}"
    />
  </div>
  <Card class="card float-right">
    <p class="mb-6" bind:this={triggerPoint}>
      At the “Inturist” travel agency, Dad bought train tickets via Moscow to
      Vladivostok. One ticket costs 500 US dollars. During the journey, Dad and
      Tolik’s trousers were tied with a string because the belts without buckles
      had to be thrown away. From that train trip, I only remember absolutely
      white fields. And the hot water sold at the stations, which we drank to
      warm ourselves up. How long did we spend on that train? Two weeks? And
      when we arrived in Vladivostok, it became clear that we didn’t have
      tickets for the ship to Japan. And we didn’t have the money to buy those
      tickets, either. Fortunately, the train was full of poor souls like us. To
      return everyone back to Kaunas, to the Soviet Union? Impossible, because
      no one has a return ticket. The local Japanese Consul then decided to let
      the whole train into the ship nonetheless. “They have no money, but they
      have Japanese visas!” he told customs. The border guard inspected Dad’s
      visa for a very long time, smiling crookedly and mumbling something to
      himself, but then he sighed and waved his hand towards the ship. Come
      aboard.
    </p>
    <p class="mb-6">
      That’s how many miracles had to happen before we could finally get off the
      ship in Tsuruga, where very nice locals allowed us to take a warm bath for
      free and gave us apples. I don’t remember anything tastier than that
      simple apple from the hands of a smiling Japanese person. Then we headed
      to Kobe, from there to Australia, and one year later, after many
      adventures already fading from my memory, we finally found ourselves in
      America. In Cleveland we found the newly restored Telshe Yeshiva and
      totally, completely grown up Aaron.
    </p>
  </Card>
</div>
