<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const familySrc = "/images/Chapter9/family.png";

  const wommenSrc = "/images/Chapter9/women.png";

  import { ChapterItem } from "@molecules";
  import { handleTriggerClasses } from "@utils";

  let SlideFromBottom, triggerClass;

  const getTriggerClasses = () => {
    SlideFromBottom = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0",
      ""
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Counterfeits & Copies</h2>
      <p class="mb-8">
        Hi, it’s me again, Leah. The last time we met, my brother Aaron
        persuaded our father to go to Lithuania.
      </p>
      <p class="mb-8">
        We settled in Vilnius and Aaron fled to Telshe - the Telshe Yeshiva of
        his dreams. At first, everything went pretty well, we got a little room
        in a dormitory for refugees, went to eat in canteens for refugees, we
        thought we just need to wait until the end of the war, then we could
        return home, to Łódź, or maybe go to Warsaw, or finally get to America,
        but then the Soviets took over the government of Lithuania, and the
        ground began to burn under our feet again. Especially for Aaron, because
        he, as a student of the rabbinical school, would have been a pain for
        the new government, which was destroying any manifestations of religion.
        It was from Aaron that we learned about the Curaçao permits issued by
        the Dutch Consulate and about the Japanese Consul issuing transit visas.
        Aaron received both visas along with other Telshe Yeshiva students and,
        accompanied by his teacher, left by train in October. We agreed to meet
        in Japan, at another stopover, but things turned out not quite as
        expected. While Dad was trying to find money and buy train tickets for
        our whole family, while he was tinkering with our golden shoe buckles
        that had been replaced back in Łódź, scraping the paint from them and
        trying to exchange them for cash, time flew by. When he finally got to
        Kaunas with all the money and documents, he found the consulate already
        closed.
      </p>
      <p class="mb-8">He didn’t tell us that for many years.</p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_9 overflow-hidden fixed w-1/2 bottom-0 right-0 h-screen {triggerClass}"
  >
    <img
      class="women_9 first absolute maw-w-screen-xl object-contain bottom-0 right-1/2 animate-shrinkDown"
      alt="women_9"
      src={wommenSrc}
    />
    <img
      class="women_9 last absolute bottom-0 maw-w-screen-xl object-contain sm:mb-32 sm:-mx-1-5 right-0 animate-slideInBottom {SlideFromBottom}"
      alt="women_9"
      src={familySrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_9 {
    max-width: 800px;
  }
  .women_9 {
    width: 730px;
    margin-top: 2%;
    z-index: 9;
    margin-left: 0px;
  }
  .women_9.first {
    width: 300px;
    margin-left: 2%;
    z-index: 999;
    left: 46%;
    animation-delay: 1.7s;
  }

  .women_9.last {
    animation-delay: 2s;
  }
  @screen sm {
    .img-area_9 {
      max-width: 100%;
      width: 100%;
    }
    .women_9 {
      width: 100%;
      margin-top: 2%;
      z-index: 9;
      margin-left: 0px;
      margin-bottom: 6rem;
    }
    .women_9.first {
      width: 100%;
      max-width: 50%;
      margin: 0 auto;
      display: block;
      margin-bottom: 6rem;
      position: absolute;
      left: 0;
      right: 0;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .women_9.first {
      width: 55%;
      margin-left: 0;
      left: 20%;
    }
    .chp_8_2,
    .workshope_area {
      max-width: 50% !important;
      left: auto;
      right: 0;
      position: fixed;
      bottom: 0;
    }
    .dad,
    .dad-whit {
      width: 120px !important;
      right: 5% !important;
    }
    .ch9_house {
      left: 0;
    }
  }
</style>
