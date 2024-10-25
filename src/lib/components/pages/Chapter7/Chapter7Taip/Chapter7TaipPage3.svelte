<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  const houWioutFeSrc = "/images/Chapter7/house-without-fench.png";

  import { elementInViewport, handleTriggerClasses, chapterLinks } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, personsTrigger, worldMapTrigger, visaTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    worldMapTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutBlurredRight"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex te_last">
  <div
    class="img-area_t3 lastone image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={houWioutFeSrc}
      alt=""
      class="absolute hwf opacity-0 {personsTrigger}"
    />
  </div>
  <Card
    class="w-100 bg-primary-300 relative mt-20 mb-28 float-right z-5 sm:w-full sm:max-w-screen-sm sm:mt-10 sm:float-none"
  >
    <p class="mb-6" bind:this={triggerPoint}>
      The same thing happened the next day. And another day. His pen broke in
      half from strain, so he had to write with a quill, constantly dipping it
      in an ink bottle. Gudze helped to fill in the questionnaires and put the
      stamps of the consulate as if his life depended on it. Boleslovas brought
      a rubber stamp for transit visas from somewhere, so there was less
      handwriting to be done, yet every night Chiune fell into bed completely
      exhausted and tired, his wife massaged his aching, swollen hands until a
      few minutes later the consul sank into the deep sleep of a tired man.
    </p>
    <p class="mb-6" bind:this={triggerPoint}>
      Everyone forgot me, the cat! Offended, I settled where it was most
      strictly forbidden: in the maid’s bed. The weirdest thing is that she
      didn’t get angry at all, she just wiped away the tears and hugged me. And
      it was… good.
    </p>

    <ChapterLink href={`${chapterLinks.chapter8}`} class="mt-12 w-full">
      Next Chapter
    </ChapterLink>
  </Card>
</div>

<style global lang="postcss">
 
</style>
