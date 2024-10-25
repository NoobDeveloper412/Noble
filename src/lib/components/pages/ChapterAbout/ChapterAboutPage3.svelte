<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const abJanSrc = "/images/about/ab-persons.png";

  const abVisaSrc = "/images/about/ab-visa.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "animation-fadeOut"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animation-slideOutBottom"
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
      <h2>Jan Zwartendijk</h2>
      <h5>1896-1976</h5>
      <p class="mb-6" bind:this={triggerPoint}>
        Dutch businessman and diplomat. Helped to save more than 2,132 Jews by
        issuing counterfeit visas.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Zwartendijk managed Philips Electric factories in Lithuania. In 1940,
        the day before the Soviets occupied Lithuania, he was appointed honorary
        consul of the Netherlands. Polish refugee Jews applied to Zwartendijk
        for a visa to Dutch India. With De Decker’s permission, Zwartendijk
        agreed to help.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        In 1997, Israel issued Zwartendijk (after his death) the title of
        Righteous Among the Nations.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="about-2 h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="object-contain ab_jan absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/4 right-0 opacity-0 {fromBottomClass}"
      alt="PersonTv"
      src={abJanSrc}
    />
    <img
      class="object-contain ab_visa absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/10 right-0 opacity-0 {fromTopClass}"
      alt="PersonTv"
      src={abVisaSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .card_news {
    width: 575px;
    margin-bottom: 6%;
  }
  .card_per {
    width: 150px;
    left: 0;
    z-index: 99;
  }
  .news_pap {
    width: 500px;
  }
  .opacity-1 {
    opacity: 1;
  }

  @screen sm {
    .card_news {
      width: 100%;
      margin-bottom: 0;
      position: fixed;
      height: 500px;
      bottom: 0;
    }
    .card_per {
      width: 35%;
      left: 0;
      top: 5%;
    }
    .news_pap {
      width: 95%;
      top: auto;
      left: 0;
      bottom: 0px;
      margin-bottom: 0;
    }
    .person_tv {
      width: 90%;
    }
  }
</style>
