<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  import { elementInViewport, chapterLinks } from "@utils";

  export let activeTrigger;

  let triggerPoint;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <Card class="card mb-28 float-right sm:float-none">
    <p bind:this={triggerPoint}>
      Mom finds a letter from her Berlin friend and angrily reads it to Dad for
      the hundredth time. "We traveled to the French border all week, we waited
      for our guide across the border for a few nights" - no way she would
      torture her old mother, our grandmother, for so many days and nights.
    </p>
    <p class="mt-6">
      What’s left, what else is left, what is still left to us? One night Dad
      returns from downtown and says he has found a way out. There is one city
      that accepts you without any visa.
    </p>
    <p class="uppercase mt-6 tracking-3">Shanghai.</p>
    <ChapterLink
      href={`${chapterLinks.chapter3}`}
      class="mt-12 bg-primary w-full text-primary"
    >
      Next Chapter
    </ChapterLink>
  </Card>
</div>
