<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const NewsThLSrc = "/images/chapter6/news_paper_3rd.png";

  const PerCardSrc = "/images/chapter6/person_card.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromLeftClass, fromRightClass;

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
        Aaron's family is currently staying in Vilnius. Aaron reads their
        letters to Nathan: about his little brother Tolik, who just started
        school, about his sister Leah, who is now learning to sew in a crafts
        school together with other Jewish teenage refugees, about the Łódź
        ghetto which his family managed to avoid, about soulless Soviets and
        Nazi beasts…
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        “Is there no place for us in the world?” Aaron keeps asking. “Did you
        hear about the Saint Louis ship on which 963 German Jews sailed from
        Hamburg, did you hear that it was accepted neither by Cuba or the United
        States and had to sail back and forth like a ghost ship for more than a
        month before mooring in Antwerp, and that its passengers had to find a
        new way to leave? To nowhere?”
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="card_news bottom-1/10 left-1/4 flex sm:left-1/20 justify-center items-center absolute"
  >
    <img
      class="card_per object-contain absolute mb-40 right-0 opacity-0 {fromLeftClass}"
      alt="door"
      src={PerCardSrc}
    />
    <img
      class="news_pap object-contain absolute mb-40 right-0 opacity-0 {fromRightClass}"
      alt="door"
      src={NewsThLSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .card_news {
    width: 575px;
    margin-bottom: 13%;
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
