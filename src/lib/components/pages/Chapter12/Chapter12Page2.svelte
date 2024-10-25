<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const familySrc = "/images/Chapter12/family.png";

  const harukiSrc = "/images/Chapter12/haruki.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let FamilyTrigger, BabyTrigger, triggerClass, triggerPoint;

  const getTriggerClasses = () => {
    FamilyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1",
      "animate-fadeOut",
    );
    BabyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1",
      "opacity-0",
    );
    triggerClass = handleTriggerClasses(
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
<ChapterItem class="z-20 mb-20 sm:mt-152 no-space">
  <div slot="story" class="animate-slideInBlurredBottom">
    <CardNoSp class="pb-8">
      <p bind:this={triggerPoint} class="extra-padding">
        Gudze - and you wouldn’t guess it from his behavior in helping to write
        visas - was suspected as an agent of the German Gestapo, who disappeared
        as soon as the war began.
      </p>
      <p bind:this={triggerPoint} class="extra-padding">
        So we can assume that almost everyone in this story was a mole, a secret
        agent, a spy, a fraudster. Maybe except for... the maid. But we will
        never know that for sure.
      </p>
    </CardNoSp>
  </div>
  <div
  slot="illustration"
  class="img-area_12 left-1/20 bottom-0 sm:h-l h-screen w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="family absolute bottom-0 object-contain opacity-0 {FamilyTrigger}"
      alt="family"
      src={familySrc}
    />

    <img
      class="haruki absolute bottom-0 left-1/5 object-contain opacity-0 {BabyTrigger}"
      alt="haruki"
      src={harukiSrc}
    />
  </div>
</ChapterItem>
