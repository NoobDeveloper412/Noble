<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem } from "@molecules";
  import { Explanation } from "@organisms";
  const NewsLSrc = "/images/chapter6/news_paper_1.png";

  const NewsMSrc = "/images/chapter6/news_paper_2.png";

  const NewsRSrc = "/images/chapter6/news_paper_3.png";

  import { handleTriggerClasses, imageReferences } from "@utils";

  let NewsLTrigger, NewsMTrigger, NewsRTrigger, triggerClass;

  const getTriggerClasses = () => {
    NewsLTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    NewsMTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    NewsRTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0 ",
      ""
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Mr. Radio</h2>
      <p class="mb-8">
        Nathan is a student of Telshe Yeshiva. Telshe, or Telšiai, is a city in
        Lithuania. Nathan is, as Lithuanians say, a Dutchman, a kid from the
        Netherlands. There are half a thousand Jewish students in Telshe, not
        only from Europe, but also from North America and South Africa. But this
        is not the most important thing! Nathan is a dedicated football fan,
        always making league tables, writing down the results - he would like to
        talk to someone about football, to shout for Ajax Amsterdam, but how
        many Dutch people are there in Lithuania? Four or five at most - and
        only if you know where to look for them.
      </p>
      <p class="mb-8">
        The best Lithuanian Dutchman is Mr. Radio, he is, of course, a fan of
        PSV Eindhoven - the team founded by Philips is closest to the heart of
        the local Philips representative. But Mr. Radio is far away, in Kaunas.
        And oh so busy. The real name of Mr. Radio is Jan Zwartendijk.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_6 sm:left-0 right-3/20 top-0 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="news_1 maw-w-screen-xl object-contain mb-40 sm:mb-94 sm:-mx-1-5 animate-slideInTop {NewsLTrigger}"
      alt="news_1"
      src={NewsLSrc}
    />
    <img
      class="news_2 absolute maw-w-screen-xl object-contain sm:mb-94 sm:-mx-1-5 animate-slideInBottom {NewsMTrigger}"
      alt="house"
      src={NewsMSrc}
    />
    <img
      class="news_3 absolute right-0 sm:right-1/10 maw-w-screen-xl object-contain sm:mb-94 sm:-mx-1-5 animate-slideInTop {NewsRTrigger}"
      alt="house"
      src={NewsRSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_6 {
    max-width: 1200px;
  }
  .news_1 {
    width: 200px;
    margin-top: 2%;
    z-index: 9;
    left: 0;
    margin-left: 0px;
  }
  .news_2 {
    width: 340px;
    height: auto;
    top: 0%;
    right: auto;
    left: 56%;
    z-index: 9;
  }
  .news_3 {
    width: 218px;
    height: auto;
    top: 0%;
    left: auto;
  }

  @screen sm {
    .img-area_6 {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    .news_1 {
      width: 25%;
      margin-left: -17%;
    }
    .news_2 {
      width: 80%;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .news_3 {
      width: 48%;
      right: -13%;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .person_tv {
      max-width: 63%;
    }
    .news_1 {
      width: 20%;
    }
    .news_2 {
      width: 34%;
    }
    .news_3 {
      width: 22%;
    }
    .card_news {
      width: 50%;
      margin-bottom: 9%;
    }
    .letter_area {
      width: 52%;
      bottom: 3%;
    }
    .table_area_65 {
      width: 60%;
    }
  }
</style>
