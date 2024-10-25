<script>
  import { Card } from "@atoms";
  const handsSrc = "/images/Chapter4/hands-yes.png";

  const coupleSrc = "/images/Chapter4/couple1.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, handsTrigger, coupleTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    handsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeOut",
      "animate-fadeOut"
    );
    coupleTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
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
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={handsSrc}
      alt=""
      class="absolute top-0 bottom-0 my-auto sm:bottom-1/10 {handsTrigger}"
    />
    <img
      src={coupleSrc}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p class="mb-6">
      I'm 21. He is 35. He is gentle, calm, caring, I feel safe with him. And he
      promises the world to me. Promises to show me the whole wide world! And I
      say
    </p>
    <h2 class="c-h2 mb-8">yes</h2>
    <p>
      One year later, in September 1936, our son Hiroki was born. Chiune is
      away, he left for Kamchatka to solve the fight over the fishing waters
      between the Soviet Union and Japan, but when he returns he immediately
      takes the baby into his arms. We are happy, and in half a year, the
      promised wide world begins to open: Chiune gets a job as an interpreter in
      Moscow, and my sister Setsuko is going with us. <span
        bind:this={triggerPoint}
        >We’ve
      </span> already packed our suitcases and only have to lock the door when the
      news arrives: the Soviets refuse Chiune his visa. Chiune knows too much about
      the Soviets, the Soviets no longer want Chiune.
    </p>
  </Card>
</div>
