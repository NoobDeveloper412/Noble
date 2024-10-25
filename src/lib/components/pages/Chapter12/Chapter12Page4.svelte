<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const paper1Src = "/images/Chapter12/paper1.png";

  const paper2Src = "/images/Chapter12/paper2.png";

  const paper3Src = "/images/Chapter12/paper3.png";

  const paper4Src = "/images/Chapter12/paper4.png";

  const paper5Src = "/images/Chapter12/paper5.png";

  const sugiharaSrc = "/images/Chapter12/sugihara.png";

  const warhaftigSrc = "/images/Chapter12/warhaftig.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerClass,
    SlideFromTop,
    SlideFromBottom,
    sugiharaClass,
    SlideFromLeft,
    SlideFromRight,
    triggerPoint;

  const getTriggerClasses = () => {
    SlideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "opacity-0"
    );
    sugiharaClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "opacity-0"
    );
    SlideFromBottom = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "opacity-0"
    );
    SlideFromLeft = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      ""
    );
    SlideFromRight = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredRight",
      ""
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
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
        All those years they avoided mentioning the Kaunas events. Until 1968,
        when Chiune received a call from Mr. Nishri of the Embassy of Israel in
        Tokyo. He was one of the five Jews who once negotiated visas. Twenty
        eight years passed before Nishri finally found Chiune Sugihara, because
        while he lived in Kaunas, he introduced himself by the name Senpo -
        easier to pronounce than Chiune (at least for non-Japanese people).
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        In August of the same year, an article was published in a Japanese
        newspaper - “The Savior of 4,000 Jewish Refugees.” In 1969, Chiune
        Sugihara was invited to Israel by Zorach Warhaftig, who once negotiated
        visas and now was the minister of religion. Apparently, hundreds of
        survivors still kept the visas they once received from Chiune as a most
        precious thing, a relic.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        In 1976 Chiune, who mostly worked in Moscow, retired. His heart was
        weak. So when in 1984 trees were planted on the hill of Bet Shemesh in
        his honor, only his son Nobuki, who studied at Hebrew University,
        attended the ceremony. They planned to plant sakuras, but Japanese
        cypresses were better suited to the climate. Anyway, Sugi - the name of
        the tree in Japanese - sounds like the first syllable of Sugihara’s
        surname.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="whole_ch_12 left-1/10 bottom-0 sm:h-l h-screen w-full flex justify-center items-center relative"
  >
    <img
      class="warhaftig absolute left-3/20 bottom-0 object-contain opacity-0 {SlideFromBottom}"
      alt="family"
      src={warhaftigSrc}
    />
    <img
      class="sugihara_12 absolute bottom-0 right-1/5 object-contain opacity-0 {sugiharaClass}"
      alt="sugihara"
      src={sugiharaSrc}
    />
    <img
      class="paper1 absolute left-0 top-1/20 object-contain opacity-0 {SlideFromLeft}"
      alt="paper1"
      src={paper1Src}
    />
    <img
      class="paper2 absolute top-1/20 object-contain opacity-0 {SlideFromTop}"
      alt="paper2"
      src={paper2Src}
    />
    <img
      class="paper3 absolute top-1/20 left-1/4 object-contain opacity-0 {SlideFromRight}"
      alt="paper3"
      src={paper3Src}
    />
    <img
      class="paper4 absolute object-contain top-1/5 opacity-0 {SlideFromTop}"
      alt="paper4"
      src={paper4Src}
    />
    <img
      class="paper5 absolute object-contain bottom-1/5 opacity-0 {SlideFromRight}"
      alt="paper6"
      src={paper5Src}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .whole_ch_12 {
    width: 680px;
    height: 580px;
  }
  .sugihara_12 {
    width: 220px;
    z-index: 99;
  }
  .warhaftig {
    width: 228px;
    z-index: 99;
  }
  .paper1 {
    width: 240px;
    z-index: -1;
    animation-delay: 400ms;
  }
  .paper2 {
    width: 140px;
    left: 35%;
    animation-delay: 550ms;
  }
  .paper3 {
    width: 100px;
    right: 22%;
    left: auto;
    z-index: -1;
    animation-delay: 650ms;
  }
  .paper4 {
    width: 170px;
    right: -6%;
    animation-delay: 800ms;
  }
  .paper5 {
    width: 190px;
    right: -7%;
    z-index: -2;
    animation-delay: 900ms;
  }
</style>
