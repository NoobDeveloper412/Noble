<script>
  import { Card } from "@atoms";
  const lejaSrc = "/images/Chapter2/leja.png";

  const trainSrc = "/images/Chapter5/train.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    imageTrigger = "";

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full"
  >
    <img
      src={trainSrc}
      alt=""
      class="absolute bottom-0 right-1/20 w-full object-contain animate-fadeInSlow"
    />
    <img
      src={lejaSrc}
      alt=""
      class="absolute bottom-0 right-1/10 sm:right-1/5 sm:w-1/2 {imageTrigger ||
        'animate-slideInBlurredBottom'}"
    />
  </div>
  <Card class="card">
    <h2 class="c-h2 mb-8">Fugitives</h2>
    <p bind:this={triggerPoint}>
      I’m Leah, remember me? The last time we met, Dad told us about the
      upcoming trip to America via Shanghai. He had to walk around the whole
      city, talk to countless people and ... give away a handful of undeclared
      diamonds for permission to cross the Reich border, to get the train
      tickets, and to get the boarding cards to the Potsdam cruise ship:
      Genoa-Shanghai, a round trip.
    </p>
  </Card>
</div>
