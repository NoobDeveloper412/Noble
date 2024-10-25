<script>
  import { Card } from "@atoms";
  const DaughterTaipSrc = "/images/Chapter11/daughter.png";

  const fatherTaipSrc = "/images/Chapter11/father.png";

  const horsebgTaipSrc = "/images/Chapter11/horse-bg.png";

  import { ChapterLink } from "@molecules";
  import { chapterLinks, elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, slideFromLeft, slideFromTop, FadeIn;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    slideFromLeft = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    slideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    FadeIn = handleTriggerClasses(
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
    class="img-area-taip bg_11tai_2a image-container overflow-hidden fixed w-4/5 bottom-0 left-0 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={horsebgTaipSrc}
      alt=""
      class="bg_11tai_2 absolute bottom-0 left-0 opacity-0 {slideFromLeft}"
    />
    <img
      src={fatherTaipSrc}
      alt=""
      class="absolute father bottom-0 left-1/3 opacity-0 {slideFromTop}"
    />
    <img
      src={DaughterTaipSrc}
      alt=""
      class="absolute daughter bottom-0 opacity-0 {FadeIn}"
    />
  </div>
  <Card class="card float-right">
    <p class="mb-6" bind:this={triggerPoint}>
      Many in the town understand where those orphans come from, but no one
      talks about it. Many families acquired “relatives” in a similar way that
      year.
    </p>
    <p class="mb-6">
      The miller has a young black-haired nephew who is told to keep a cigarette
      between his teeth all the time and to talk as little as possible - to hide
      the accent. The organist, who until then lived alone, suddenly has a curly
      black-eyed goddaughter. Everyone in town is connected by the bonds of
      guilt, fear, and humanity, so it’s better for everyone to keep themselves
      to themselves, live their lives, and let others. Live.
    </p>
    <p class="mb-6">
      In Žadeikiai forest you can still find the mass grave of 402 men, 738
      women and 209 children.
    </p>
    <p class="mb-6 uppercase lettsp">
      It was the very beginning of <br /> the Holocaust.
    </p>
    <ChapterLink href={`${chapterLinks.chapter12}`} class="mt-12 w-full">
      Next Chapter
    </ChapterLink>
  </Card>
</div>

<style global lang="postcss">
 
</style>
