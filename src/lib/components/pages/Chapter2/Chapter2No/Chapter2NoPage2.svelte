<script>
  import { Card } from "@atoms";
  const building2Src = "/images/Chapter2/building2.png";

  const wireSrc = "/images/Chapter2/wire.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, triggerClass, wireClass;

  const getTriggerClasses = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-scaleDown",
      "opacity-0"
    );
    wireClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-100",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<ChapterItem textAligment="right" class="mb-20 z-10 sm:mt-120">
  <div slot="story" class="pt-16">
    <Card class=" !bg-primary !text-primary-300">
      <p class="mb-6" bind:this={triggerPoint}>
        Many little children, frightened orphans, were wandering around the
        Ghetto. Their parents went downtown to work, and one day they just
        didn’t return. One evening my brother Aaron didn’t come back. He helped
        move his girlfriend’s family, stayed downtown after curfew and was shot
        dead. Every ten days Mom went to pick up our share of bread. There was
        so little bread. Grandma died on Easter Eve. From old age and
        malnutrition - she secretly gave her ration to our little Tolik, who
        spent the whole day in her bed.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="building_2 max-w-screen-md 2xl:m-auto w-full flex justify-center items-center relative opacity-0 {triggerClass}"
  >
    <img
      class="transform lg:scale-92 mb-16 sm:w-full"
      alt="building"
      src={building2Src}
    />
    <img
      class="absolute bottom-0 opacity-0 sm:w-full {wireClass}"
      alt="wire"
      src={wireSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  /* .building_2{
    max-width: 864.3px; 
  } */
</style>
