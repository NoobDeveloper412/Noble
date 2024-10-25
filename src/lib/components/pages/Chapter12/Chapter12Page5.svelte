<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const mapSrc = "/images/Chapter12/map.png";

  const sugiharaSrc = "/images/Chapter12/sugihara.png";

  const zwartendijkSrc = "/images/Chapter12/zwartendijk.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromFadeClass,
    fromRightClass,
    fromTopClass,
    fromBottomClass;

  const getTriggerClasses = () => {
    fromFadeClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
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
      ""
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
      <p class="mb-6 extra-padding" bind:this={triggerPoint}>
        In 1985, Chiune Sugihara was awarded the title of Righteous Among the
        Nations, the Yad Vashem Award: an honor given by the State of Israel to
        the citizens of other countries who rescued Holocaust victims. Chiune is
        the only Japanese to receive such an honorable title.
      </p>
      <p class="mb-6 extra-padding" bind:this={triggerPoint}>
        In 1986, July 31, at the age of 86, Chiune Sugihara died.
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="whole_ch_12 h-xl sm:h-l w-full left-1/10 flex justify-center items-center relative"
  >
    <img
      class="sugihara_12 object-contain absolute bottom-0 right-1/5 opacity-0 {fromFadeClass}"
      alt="sugihara"
      src={sugiharaSrc}
    />
    <img
      class="warhaftig last left-1/5 object-contain bottom-0 absolute opacity-0 {fromBottomClass}"
      alt="zwartendij"
      src={zwartendijkSrc}
    />
    <img
      class="map_last object-contain absolute right-0 bottom-1/5 opacity-0 {fromRightClass}"
      alt="map"
      src={mapSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .whole_ch_12 .warhaftig.last {
    width: 170px;
  }
  .map_last {
    width: 700px;
    z-index: -9;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #2e2b29;
    margin-top: 20px;
  }
</style>
