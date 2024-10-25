<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const graveSrc = "/images/Chapter10/grave.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromLeftClass,
    fromRightClass,
    fromTopClass,
    fromBottomClass;

  const getTriggerClasses = () => {
    fromLeftClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      ""
    );
    fromRightClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredRight",
      ""
    );
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      ""
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "opacity-1"
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
        Whoever wants to buy pretty tureens, gilded porcelain cups, grandfather
        clocks: come and buy, hurry up, the owners no longer need those items,
        they don’t need no porcelain cups in the ghetto, and the ghetto itself
        takes up too much space, so in less than a month, everyone is gathered
        in the synagogue and declared that all should move to the village of
        Papyvesiai, where a labor camp would be set up, where everyone would be
        able to work for that bite of bread and a potato peel, so they wouldn’t
        be fed for free. Crowds of people with bundles are leaving the town
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        But... Papyvesiai village is on the other side? Why are they moving
        towards Žadeikiai? Why are they going into the forest? Why are two giant
        pits dug there? Why do they separate men from women, why, if you are too
        slow to obey their orders to undress, they just tear off the clothes of
        you, why do they drive naked people on a bridge over the pit, why shots,
        why Russian prisoners pouring lime, why people on the bridge again, and
        shots again, and again…
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="h-xl right-3/20 sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="grave object-contain absolute bottom-0 right-0 opacity-0 {fromBottomClass}"
      alt="grave"
      src={graveSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">

</style>
