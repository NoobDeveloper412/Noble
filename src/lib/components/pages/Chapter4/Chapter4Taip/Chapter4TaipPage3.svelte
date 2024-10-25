<script>
  import { Card } from "@atoms";
  import { Explanation } from "@organisms";
  const couple3Src = "/images/Chapter4/couple3.png";

  const shipSrc = "/images/Chapter4/ship.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger1, activeTrigger2;

  let triggerPoint1, triggerPoint2, coupleTrigger, shipTrigger;

  const getTriggerClasses = () => {
    coupleTrigger = handleTriggerClasses(
      activeTrigger1,
      activeTrigger2,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    shipTrigger = handleTriggerClasses(
      activeTrigger1,
      activeTrigger2,
      "animate-fadeInSlow",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger1 = elementInViewport(triggerPoint1);
    activeTrigger2 = elementInViewport(triggerPoint2);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={shipSrc}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto opacity-0 {shipTrigger}"
    />
    <img
      src={couple3Src}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p>
      What did I do in Finland? I attended French and German classes. I also
      learned some etiquette and dancing. Without these skills, I wouldn’t have
      been able to be a proper wife of a diplomat, because every day, if we
      didn’t invite guests to our house, we <span bind:this={triggerPoint1}
        >would be invited</span
      > somewhere ourselves: for lunch, dinner, afternoon tea. Before dinner, diplomats
      discussed politics, and after dinner, dances took place. With the kimono I
      brought from Japan, I easily stood out from the crowd. Other ladies loved to
      touch the silk, sighing in disbelief, but the kimono was very awkward on the
      dance floor, so I had to buy some European dresses - the diplomats’ wives were
      given special funds for that. When I went shopping, I received many confusing
      questions: “Are you Chinese? Oh, Japanese? So why is your skin not yellow at
      all?” I started writing again.
    </p>
    <p class="mt-8">
      In this flow ing gown
      <br />
      Of lu mi nous pur ple silk
      <br />
      I ac com pa ny
      <br />
      My hus band to the par ty
      <br />
      At the Swe dish Em bas
      <Explanation variant="pink" class="border-pink border-b-4">
        <div slot="content" class="w-full">
          <p class="p-6">
            A real poem by Yukiko. When writing a tanka, you must have five
            lines, each containing 5-7-5-7-7 syllables.
          </p>
        </div>
        <span slot="text">sy</span>
      </Explanation>
    </p>
    <p class="mt-8">
      A year later, our second <span bind:this={triggerPoint2}>son</span>,
      Chiaki, was born. Next year, my husband received an order to go to
      Lithuania and open a Japanese consulate in Kaunas. In December, just after
      we left, the Soviet bombs began to drop on Helsinki.
    </p>
  </Card>
</div>
