<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  import { chapterLinks, elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, slideFromLeft, slideFromTop, slideFromBottom;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      ""
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
    class="img-area_t33 image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 sm:w-full sm:left-0 {imageTrigger}"
  ></div>
  <Card
    class="w-100 bg-primary-300 card relative mt-20 mb-28 sm:mb-0 float-right z-5 sm:w-full sm:max-w-screen-sm sm:mt-10 sm:float-none"
  >
    <p class="mb-6" bind:this={triggerPoint}>
      I am a very old woman now. I have three beautiful children, six
      grandchildren and five great-grandchildren. Tolik with his wife raised
      four children, each of them gave birth to three grandchildren, there are
      also two great-grandchildren, but there will definitely be more of them.
      Anyway, Aaron’s wife had the most children of all - seven. Each of them
      had at least four children of their own. When we talk about Aaron’s
      family, I get seriously confused - there are so many of them, all so cute
      and serious. Well, a rabbi must set an example, right?
    </p>

    <ChapterLink href={`${chapterLinks.chapter10}`} class="mt-12 w-full">
      Next Chapter
    </ChapterLink>
  </Card>
</div>

<style global lang="postcss">

</style>
