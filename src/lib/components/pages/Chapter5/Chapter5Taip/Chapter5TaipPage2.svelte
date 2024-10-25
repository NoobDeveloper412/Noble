<script>
  import { Card } from "@atoms";
  import { elementInViewport } from "@utils";

  export let activeTrigger1, activeTrigger2;

  let triggerPoint1, triggerPoint2;

  const setActiveTrigger = () => {
    activeTrigger1 = elementInViewport(triggerPoint1);
    activeTrigger2 = elementInViewport(triggerPoint2);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <Card class="card last dark float-right sm:float-none bg-primary">
    <p bind:this={triggerPoint1}>
      Grandma’s prayers must have saved our family because not only did we
      arrive at the port of Genoa, but the sea didn’t seem terrible at all. Only
      Mom’s silence was terrible. Mom didn’t say a word the whole trip.
    </p>
    <p class="mt-8">
      She was silent on the train, silent as Aaron happily announced - “look,
      it’s Africa, it’s Suez Canal”, silent on the ship all the way to Kobe,
      where maybe one third of the passengers got off the ship. Dad explained
      that it’s safe in the Japanese Kobe Jewish community, only Kobe is not for
      us, as we are heading to visa-free Shanghai.
    </p>
    <p class="mt-8">
      After listening to Aaron’s tales, I thought Shanghai was China, so there
      would be dragons, yellow people, men with long braided hair, and the roofs
      of the houses would be red and curved like the wings of a swallow, but the
      city looked the same as other cities. No long-haired men and certainly no <span
        bind:this={triggerPoint2}>dragons</span
      >. When we stepped out of the ship, we were warned not to drink unboiled
      water, to brush our teeth only with boiled water, to bow down in front of
      any Japanese soldier, not to eat fruits and vegetables if they were
      uncooked. They checked our hair for lice, they checked even our teeth, we
      all got a painful vaccine and only then could we line up at the buses
      taking us to the new life without Grandma. Mom was still silent.
    </p>

    <p class="mt-8 bg-primary-300 w-3 h-3 border-none rounded-lg" />
  </Card>
</div>
