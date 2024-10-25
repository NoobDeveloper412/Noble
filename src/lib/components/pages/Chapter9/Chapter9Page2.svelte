<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const dadSrc = "/images/Chapter9/dad.png";

  const houseSrc = "/images/Chapter9/house-with-gate.png";

  import { ChapterItem } from "@molecules";
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
      "opacity-1 animate-FadeIn",
      "animate-FadeOut"
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
    <CardNoSp>
      <p bind:this={triggerPoint} class="extra-padding">
        It wasn’t until much later, when we were already living abroad, when
        Grandma, who had finished her long and complicated earthly journey with
        dignity, was beautifully buried, when Aaron’s wedding was danced away,
        Dad, who had one or two glasses of sweet wine too many, told us the true
        story.
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="chp_8_2 h-xl sm:h-l w-full left-1/5 flex justify-center items-center relative"
  >
    <img
      class="object-contain ch9_house absolute sm:left-0 left-0 bottom-0 right-0 opacity-0 {fromTopClass}"
      alt="house"
      src={houseSrc}
    />
    <img
      class="object-contain dad absolute right-0 bottom-0 opacity-0 {fromBottomClass}"
      alt="dad"
      src={dadSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .chp_8_2 {
    max-width: 900px;
  }
  .dad {
    width: 235px;
    z-index: 99;
    right: 10%;
  }
  .no-space {
    margin-top: -8.5rem;
  }
  .extra-padding {
    padding-bottom: 30px;
  }
  .ch9_house {
    width: 100%;
    max-width: 792px;
  }
  @screen sm {
    .chp_8_2 {
      max-width: 100%;
      left: 0;
    }
    .ch9_house {
      left: -5%;
      max-width: 105%;
    }
    .dad {
      width: 27%;
      z-index: 99;
      right: 8%;
    }
  }
</style>
