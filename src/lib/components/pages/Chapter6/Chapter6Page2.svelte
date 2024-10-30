<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const PersonTvSrc = "/images/chapter6/person_tv.png";

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
        Zwartendijk often sent Nathan Dutch newspapers or at least football super
        league card cut-outs. But already from his first letters, Mr. Radio
        started talking less about football and more about this new gadget - an
        electric razor like the world has never seen before, Philishave - that
        helps you shave your beard and moustache without any soap or water and
        maybe even without a mirror?
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        But Nathan is not interested in shavers, Nathan is interested in
        football. And now this newbie, Aaron, is sticking to Nathan, following
        him everywhere like a stray kitten. “Where is the canteen?”, “Where can
        I buy ink?”, “Can I stay in your room for a few more days?” - Aaron and
        his parents just arrived in Lithuania with a new wave of Jewish refugees
        running from the Soviets. They came from Poland, which no longer exists.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="object-contain person_tv absolute sm:w-9/10 sm:left-1/20 left-1/4 mb-40 right-0 opacity-0 {fromBottomClass}"
      alt="PersonTv"
      src={PersonTvSrc}
    />
  </div>
</ChapterItem>
