<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const abJanSrc = "/images/about/ab-jan.png";

  const abVisaSrc = "/images/about/ab-visa.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "animation-fadeOut"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animation-slideOutBottom"
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
      <h2>Chiune Sugihara</h2>
      <h5>1900–1986</h5>
      <p class="mb-6" bind:this={triggerPoint}>
        Diplomat who served as vice-consul of Japan in pre-war Lithuania. Helped
        to save 6,000 Jews by issuing transit visas he wasn't allowed to issue.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        By choosing to do so, Sugihara risked his career and the lives of his
        family members.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        In 1985, Israel issued Sugihara the title of Righteous Among the
        Nations.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="about-2 h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="object-contain ab_jan absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/4 right-0 opacity-0 {fromBottomClass}"
      alt="PersonTv"
      src={abJanSrc}
    />
    <img
      class="object-contain ab_visa absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/10 right-0 opacity-0 {fromTopClass}"
      alt="PersonTv"
      src={abVisaSrc}
    />
  </div>
</ChapterItem>
