<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const carriageSrc = "/images/Chapter10/carriage.png";

  const maidSrc = "/images/Chapter10/maid.png";

  const rpeople1Src = "/images/Chapter10/people1.png";

  const rpeople2Src = "/images/Chapter10/people2.png";

  const railSrc = "/images/Chapter10/rail.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromTopClass,
    fromBottomClass,
    fromLeftClass,
    fromRightClass,
    triggerClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutBottom"
    );
    fromLeftClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-fadeout"
    );
    fromRightClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredRight",
      "animate-fadeout"
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
    <CardNoSp class="pb-10">
      <p bind:this={triggerPoint}>
        Come winter, I was allowed into the room with other cats, because “dogs
        serve for food and cats for warmth,” as the brother’s wife put it. I
        didn’t like it: am I some servant to serve? I'm a cat! I tried to follow
        the former maid everywhere and got acquainted with the order of the town
        near the farmstead: there was a noisy carding mill, a bakery smelling of
        fresh buns, four butcheries, but the maid didn’t buy any meat or buns -
        those are Jewish, you nitwit, I rather bake buns at home myself and my
        brother slaughters the chicken for lunch with his own hands.
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="rail_area right-3/20 h-xl sm:h-l w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="object-contain rstation absolute right-0 opacity-0 {fromTopClass}"
      alt="rail"
      src={railSrc}
    />
    <img
      class="object-contain carriage absolute left-1/5 opacity-0 {fromLeftClass}"
      alt="carriage"
      src={carriageSrc}
    />
    <img
      class="object-contain rpeople2 absolute left-1/5 bottom-0 opacity-0 {fromBottomClass}"
      alt="rpeople"
      src={rpeople1Src}
    />
    <img
      class="object-contain rpeople absolute left-1/5 bottom-0 opacity-0 {fromBottomClass}"
      alt="rpeople"
      src={rpeople2Src}
    />
    <img
      class="object-contain rmaid absolute bottom-0 right-1/10 opacity-0 {fromRightClass}"
      alt="maid"
      src={maidSrc}
    />
  </div>
</ChapterItem>

