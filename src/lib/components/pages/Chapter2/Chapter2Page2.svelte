<script>
  import { Card } from "@atoms";
  import { GroupImage } from "@organisms";
  import { elementInViewport, familyImages } from "@utils";

  export let activeTrigger, firstTrigger, secondTrigger;

  let triggerPoint,
    triggerClass = "";

  const handleTriggerClasses = (
    activeClass,
    firstTriggerClass,
    secondTriggerClass
  ) => {
    if (activeTrigger && !firstTrigger) {
      return activeClass;
    } else if (activeTrigger && firstTrigger && !secondTrigger) {
      return firstTriggerClass;
    } else if (activeTrigger && firstTrigger && secondTrigger) {
      return secondTriggerClass;
    } else if (!activeClass) {
      return "";
    }
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);

    triggerClass = handleTriggerClasses(
      "animate-slideInBottom z-2",
      "animate-shrinkDown z-2 no-caption",
      "transform origin-bottom scale-75 animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col md:z-[-10] lg:z-[-10] xl:z-[-10]">
  <div
    class="ch-2over image-container h-screen w-1/2 fixed top-0 right-1/20 overflow-hidden min-w-md sm:w-full sm:min-w-sm opacity-0 {triggerClass}"
  >
    <GroupImage images={familyImages} />
  </div>
  <Card class="card">
    <p bind:this={triggerPoint}>
      A family as any other. If you asked me about Aaron, my older brother, I
      would first say that he is in love with Eliza, the bookshop girl, and only
      then would I add that he is a Yeshiva student, for you could see him much
      more often by the bookshop window than at his desk.
    </p>
    <p class="mt-8">
      My little brother Tolik is only four, always clutching at Mom’s skirt or
      sitting in Grandma’s bed, happily listening to fairy tales. My mother -
      who is a beauty even with Tolik clinging to her skirt - always smiles, and
      if you see her biting her lip, you can be sure that a storm is approaching
      and whoever gets caught in it won’t meet a lucky end.
    </p>
    <p class="mt-8">
      Dad knows best how to calm Mom’s storms, I think that’s what dads are for
      - to make moms smile.
    </p>
  </Card>
</div>

<style global lang="postcss">
 
</style>
