<script>
  export let activeTrigger, nextTrigger;
  import { Container, Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const frameSrc = "/images/chapter6/frame.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromTopClass,
    triggerClass,
    fromBottomClass,
    fromFadeInClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      ""
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
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
    <Card class="mb-16 z-20">
      <p class="mb-6" bind:this={triggerPoint}>
        One more month, and Aaron, trembling, shows messages announcing that
        Jewish intellectuals are being arrested in Vilnius one after another,
        newspaper offices and Jewish schools are being closed: the red Soviet
        flood, from which his family fled Poland, is already reaching Lithuania.
        Meanwhile, spring changes into summer, and doctor Zienkovičius whom he
        meets in the park and who once bought an X-ray machine from Mr. Radio,
        says Mr. Radio can no longer sell his radios because he no longer
        receives special lamps from the German-occupied Netherlands. “Stop
        calling Zwartendijk Mr. Radio, kid," the doctor tells Nathan, "now he’s
        Mr. Consul.”
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="table_area_65 h-xl sm:h-l w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="object-contain absolute desk mb-40 right-0 opacity-0 {fromTopClass}"
      alt="desk"
      src={frameSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .table_area_65 {
    width: 550px;
    left: 20%;
    transition-delay: 5s;
  }
  .desk {
    width: 95%;
    margin-left: 0%;
    margin-top: 3%;
  }

  .book {
    top: 18%;
    max-width: 77%;
    margin-left: 0;
    transition-delay: 2s;
    left: 15%;
  }
  .person {
    top: -1%;
    width: 45%;
    transition-delay: 10s;
  }

  @screen sm {
    .table_area_65 {
      width: 100%;
      right: 0%;
      left: 0;
    }
    .desk {
      width: 100% !important;
    }
  }
</style>
