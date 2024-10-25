<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  
  const personsSrc = "/images/chapter6/persons.png";

  const worldMapSrc = "/images/chapter6/world_map.png";

  import { elementInViewport, handleTriggerClasses, chapterLinks } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, personsTrigger, worldMapTrigger, visaTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    worldMapTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutBlurredRight"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item third container flow-root sm:flex">
  <div
    class="img-area_3 overflow-hidden fixed w-1/2 bottom-0 left-1/10 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={personsSrc}
      alt=""
      class="absolute persons_3 bottom-0 my-auto sm:bottom-1/10 opacity-0 {personsTrigger}"
    />
    <img
      src={worldMapSrc}
      alt=""
      class="map absolute bottom-0 left-0 right-0 mx-auto opacity-0 {worldMapTrigger}"
    />
  </div>
  <Card
    class="w-100 bg-primary-300 relative mt-20 mb-28 float-right z-5 sm:w-full sm:max-w-screen-sm sm:mt-10 sm:float-none"
  >
    <p class="mb-6" bind:this={triggerPoint}>
      And so it happened that a former radio and razor salesman, who issued a
      couple of incorrectly written and thus almost forged visas to a couple of
      people, wrote over a thousand such visas in the next few days, later got
      himself a rubber stamp and was able to work faster, issuing another one
      and a half thousand visas. He worked in a frenzy and became increasingly
      overwhelmed with fear. The visa he issues is completely worthless if
      people don’t get a Japanese transit visa. A Japanese transit visa is now
      Absolutely Vital.
    </p>

    <ChapterLink href={chapterLinks.chapter7} class="mt-12 w-full">
      Next Chapter
    </ChapterLink>
  </Card>
</div>

<style global lang="postcss">
  .img-area_3 {
    max-width: 550px;
    height: 100%;
    z-index: -9;
  }
  .persons_3 {
    width: 350px;
    z-index: 99;
  }
  .map {
    width: 500px;
    right: auto;
    left: 8%;
    bottom: 18%;
  }
  @screen sm {
    .chapter-item.third {
      padding-bottom: 20rem;
    }
    .persons_3 {
      width: 40%;
      z-index: 9;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .map {
      width: 95%;
      right: 0;
      left: 0;
      bottom: 18%;
    }
  }
</style>
