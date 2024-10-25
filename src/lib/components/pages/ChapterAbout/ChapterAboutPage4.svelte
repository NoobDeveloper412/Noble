<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass;

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
      "animate-slideOutTop"
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
        The story of the feats of Sugihara and Zwartendijk is widely known in
        the diplomatic and cultural sectors. It’s the brightest diplomatic
        bridge between Lithuania and Japan. In 2014, Sugihara’s only living son
        visited Lithuania for the first time, returning six more times
        afterwards. In 2015, the film “Persona Non Grata” was released in Japan,
        and the opera “Sempo Sugihara” premiered in Lithuania. Since 2017,
        Sugihara Week has been held in Lithuania. In 2018, the art installation
        to honor Zwartendijk was opened in Kaunas by the King of the
        Netherlands, the President of Lithuania and the Mayor of Kaunas. In
        2020, a sculpture in honor of Sugihara was unveiled in Kaunas. The
        heroic actions of Sugihara and Zwartendijk unite not only more than four
        countries, but also the entire world - which is still fighting for human
        rights and freedom.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        In the future, we plan to publish this story in other languages and add
        new chapters.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="letter_area h-xl sm:left-1/20 sm:h-l w-full left-1/3 flex justify-center items-center relative"
  ></div>
</ChapterItem>

<style global lang="postcss">
  .letter_area {
    width: 530px;
    bottom: 3%;
  }
  @screen sm {
    .letter_area {
      width: 115% !important;
      bottom: 3%;
      left: -8%;
    }
  }
</style>
