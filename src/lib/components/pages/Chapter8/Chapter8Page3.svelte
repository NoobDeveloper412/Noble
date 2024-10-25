<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const doorLSrc = "/images/Chapter8/door_left.png";

  const doorRSrc = "/images/Chapter8/door_right.png";

  const personSrc = "/images/Chapter8/sitting-char.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromLeftClass, fromRightClass, fromFadeInClass;

  const getTriggerClasses = () => {
    fromLeftClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideOutBlurredLeft",
      ""
    );
    fromRightClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideOutBlurredRight",
      ""
    );
    fromFadeInClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1 ",
      ""
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
        There is still a queue of people by the house, I’ve already got used to
        Chiune never leaving his office for lunch or dinner, writing and writing
        visas, his tired gaunt face turning more and more sad. Setsuko folds the
        children’s clothes and puts them in a suitcase, Yukiko walks around the
        house deciding which larger items could be shipped earlier. More and
        more often I find her thoughtfully sliding the door to the living room:
        when you push it into the wall, it hides, when you pull it out, it
        emerges again, I have to be careful so it won’t pinch my tail.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        And then they all go to the Metropolis Hotel, leaving me in the care of
        the maid. Several times I follow the smell of my masters through the
        city and actually reach the hotel, but they never let me inside. From
        the outside it looks just like the former consulate: a queue of people
        applying for visas - does it mean that Chiune continues to work as a
        consul in this hotel, while waiting for the train?
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="door_area h-xl sm:h-l w-full left-1/3 flex justify-center items-center relative"
  >
    <img
      class="door_left object-contain absolute mb-40 right-0 opacity-0 {fromLeftClass}"
      alt="door"
      src={doorLSrc}
    />
    <img
      class="door_right object-contain absolute mb-40 right-0 opacity-0 {fromRightClass}"
      alt="door"
      src={doorRSrc}
    />
    <img
      class="object-contain absolute person_83 right-0 opacity-0 {fromFadeInClass}"
      alt="person"
      src={personSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .door_area {
    width: 530px;
    bottom: 3%;
  }
  .door_left {
    left: 0;
  }
  .opacity-1 {
    opacity: 1;
  }
  .person_83 {
    width: 100%;
    z-index: -99;
  }
  .door_left,
  .door_right {
    max-width: 260px;
  }
  @screen sm {
    .door_area {
      width: 90%;
      bottom: 3%;
      left: 0;
    }
    .door_left,
    .door_right {
      max-width: 70%;
    }
  }
</style>
