<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  import { Explanation } from "@organisms";
  const stationSrc = "/images/Chapter8/station_1.png";

  const maidSrc = "/images/Chapter8/maid-2.png";

  const akioSrc = "/images/Chapter8/akio-2.png";

  const brotherSrc = "/images/Chapter8/brother.png";

  import { elementInViewport, handleTriggerClasses, chapterLinks } from "@utils";

  export let activeTrigger,
    nextTrigger,
    stationTrigger,
    maidTrigger,
    akioTrigger,
    triggerPoint,
    brotherTrigger;

  let imageTrigger = "";

  const getTriggerClasses = () => {
    stationTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    maidTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-slideOutBlurredRight"
    );
    akioTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    brotherTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredRight",
      "animate-slideOutBlurredRight"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container_8station overflow-hidden fixed w-1/2 bottom-0 h-screen sm:w-full sm:left-0"
  >
    <img
      src={stationSrc}
      alt=""
      class="station absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {stationTrigger}"
    />
    <img
      src={maidSrc}
      alt=""
      class="maid-2 absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {maidTrigger}"
    />
    <img
      src={akioSrc}
      alt=""
      class="akio-2 absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {akioTrigger}"
    />
    <img
      src={brotherSrc}
      alt=""
      class="brother absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {brotherTrigger}"
    />
  </div>
  <Card
    class="w-100 bg-primary-300 relative mt-20 mb-28 float-right z-5 sm:w-full sm:max-w-screen-sm sm:mt-10 sm:float-none"
  >
    <p class="mb-6" bind:this={triggerPoint}>
      Crowds of people at the station, everyone is rushing, pushing, pulling
      suitcases - we found the platform from which the train will leave to
      Berlin, but even at the station Sugihara is surrounded by people begging
      for visas. So the maid just sighs and sits on a bench, where a woman, big
      like a mountain of pillows, is already sitting - she immediately starts
      complaining: “What kind of station is that, no order whatsoever, people
      hustling like gypsies in a horse market, nearly snatched my handbag, at
      the ticket window fighting like Poles for a bag of hay, I had to fight
      with my elbows to buy a ticket” - but the maid is silent. Then the fat
      woman tries again: “Look at this moron pushing into the train, squeezing
      like a German to heaven, and now those folks, look, Polish Jews, screaming
      like… like Jews in a market, as if someone is butchering them, so much
      noise for nothing!” Now the maid gets angry, turns to the woman and says,
      “Aren’t you ashamed of yourself? What did those people do to you? One day
      you might find yourself beset by woes like a cat by tomcats, see if you
      don’t cry!”
    </p>
    <p class="mb-6" bind:this={triggerPoint}>
      Through the crack in the basket, I see the fat woman sniff, blushing to
      the roots of her hair - she stands up, spits to the maid’s side, hisses -
      “Jew’s skivvy!” - and staggers towards the station’s canteen.
    </p>
    <p class="mb-6">
      From the same canteen, wiping his crumby moustache, the maid’s brother
      wades through the people, without answering to her timid greeting takes
      the bag with clothes, angrily glances at the basket and waves his chin:
      “Let’s go, the horse with the carriage is over there, we have a long way
      ahead of us.”
    </p>
    <ChapterLink href={`${chapterLinks.chapter9}`} class="mt-12 w-full">
      Next Chapter
    </ChapterLink>
  </Card>
</div>

<style global lang="postcss">
  .station {
    margin-left: 0%;
    bottom: 0;
  }
  .maid-2 {
    max-width: 180px;
    height: 129px;
    bottom: 33%;
    right: 11%;
  }
  .akio-2 {
    max-width: 37px;
    height: 64px;
    bottom: 32%;
    left: 24%;
  }
  .brother {
    max-width: 88px;
    height: 252px;
    bottom: 29%;
    right: 15.8%;
    left: auto;
  }
  @screen sm {
    .brother {
      max-width: 20%;
      height: auto;
      bottom: 29%;
      right: 7.8%;
      left: auto;
    }
  }
</style>
