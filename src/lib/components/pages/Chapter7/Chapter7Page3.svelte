<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const gateSrc = "/images/Chapter7/gate.png";

  const houseSrc = "/images/Chapter7/house.png";

  const peopleSrc = "/images/Chapter7/people.png";

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
      "animate-fadeIn",
      ""
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      ""
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    console.log(activeTrigger);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        Later on, everything was happening like in a dream: people, just people
        - the cat is left out. The maid was trying to go shopping for food like
        she does every day, but as soon as she touched the gate, the refugees
        flocked to the yard, and Gudze with Boleslovas had to ask them to return
        back to the street. Finally, five crowd representatives were invited to
        the consulate. Their leader, Warhaftig, explained the problem as calmly
        as possible: Polish Jews who had fled the Nazis must now flee the Soviet
        Union, the imminent deportation to Siberia, and must therefore obtain a
        Japanese transit visa. Like those two Dutch students who got their visas
        a few days ago. If the Jewish refugees receive Japanese transit visas,
        then the Soviets (for a hefty sum of money) will let them pass through
        their territory to Vladivostok. It will then be possible to use Curaçao
        visas as the final destination and not really stay in Japan.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="house_area h-xl sm:h-l w-full left-1/5 flex justify-center items-center relative"
  >
    <img
      class="fhouse object-contain absolute bottom-1/5 left-0 opacity-0 {fromTopClass}"
      alt="door"
      src={houseSrc}
    />
    <img
      class="gate object-contain absolute bottom-1/20 right-0 opacity-0 {fromRightClass}"
      alt="door"
      src={gateSrc}
    />
    <img
      class="peoplecrowd object-contain absolute bottom-0 left-0 opacity-0 {fromBottomClass}"
      alt="door"
      src={peopleSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
 
</style>
