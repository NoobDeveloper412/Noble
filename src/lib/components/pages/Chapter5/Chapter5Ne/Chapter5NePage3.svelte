<script>
  import { Card } from "@atoms";
  const wallSrc = "/images/Chapter5/wall3.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, wallTrigger;

  const getTriggerClasses = () => {
    wallTrigger = handleTriggerClasses(
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

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={wallSrc}
      alt=""
      class="absolute bottom-0 sm:top-0 sm:my-auto {wallTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p bind:this={triggerPoint}>
      Not only is Aaron pale, he has completely changed - now he is only focused
      on studying, hiding behind letters, immersing himself in books and scrolls
      and never coming out. In Telshe Yeshiva you can study day and night
      without interruption, students take turns studying the Torah, Telshe
      Yeshiva is as famous as the secular Oxford, let’s go to Lithuania, or at
      least to the Polish Vilnius, Vilnius is a Jewish city, Jews will never
      abandon their own.
    </p>
  </Card>
</div>
