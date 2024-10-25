<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const catSrc = "/images/Chapter8/cat.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "opacity-0"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "hidden"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        We cats really don’t slaughter chatty old ladies - we much prefer
        sparrows.The bad thing is that in August sparrows leave the city,
        because the harvest is being cleaned in the fields and those nitwits
        hope to find some leftover grain. Sugiharas also seem to be moving away:
        I’ve heard that more than one telegram arrived from the Japanese Foreign
        Ministry - with an order to immediately close the consulate and leave
        the country, because the Soviets have finally taken full power, the
        borders will be closed soon and they won’t be able to leave.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="object-contain cat_img absolute left-1/4 mb-40 right-0 opacity-0 {fromBottomClass}"
      alt="cat"
      src={catSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  @screen sm {
    .cat_img {
      left: 0;
      max-width: 80%;
      right: 0;
      margin: 0 auto;
    }
  }
</style>
