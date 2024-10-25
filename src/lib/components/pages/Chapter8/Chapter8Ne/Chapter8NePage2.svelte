<script>
  import { Card } from "@atoms";
  const peopleFSrc = "/images/Chapter8/people1.png";

  const peopleSSrc = "/images/Chapter8/people2.png";

  const stationSrc = "/images/Chapter8/station_1.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger, peopleFTrigger, peopleSTrigger;

  let triggerPoint, stationTrigger;

  const getTriggerClasses = () => {
    stationTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    peopleFTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-slideOutBlurredRight"
    );
    peopleSTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
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
      class="station absolute h-4/5 bottom-0 right-0 mx-auto opacity-0 {stationTrigger}"
    />
    <img
      src={peopleFSrc}
      alt=""
      class="fpeople absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {peopleFTrigger}"
    />
    <img
      src={peopleSSrc}
      alt=""
      class="speople absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {peopleSTrigger}"
    />
  </div>
  <Card class="card float-right">
    <p class="mb-6" bind:this={triggerPoint}>
      I am deeply offended! The maid asks me to come home, sweetening her voice,
      pouring some cream in a bowl and even opening a box of sardines. These
      days cream is a rare delicacy, so I forgive her and come back.
    </p>
    <p class="mb-6">
      For a few more days, I help her clean the empty rooms by following her
      around and meowing. Summer turns into autumn. The maid puts me in the old
      basket where I once traveled with the Sugiharas’ family for a picnic,
      covers it with a scarf, and, throwing a little bundle with her things over
      her shoulder, goes out to the train station. There we will say our
      goodbyes to Sugiharas who are leaving for Berlin, and wait for the maid’s
      brother: he promised to come to Kaunas station and take her back to the
      village, from which she once came to the city searching for happiness.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .image-container_8station {
    max-width: 100%;
  }
  .station {
    bottom: 0;
    left: 0;
  }
  .fpeople {
    width: 31%;
    height: auto;
    bottom: 0;
    right: auto;
    top: auto;
    left: -5%;
  }
  .speople {
    width: 83%;
    height: auto;
    top: 51%;
    right: 0;
    left: 0%;
  }

  @screen sm {
    .station {
      margin-left: 0;
      bottom: 0;
    }
    .speople {
      width: 72%;
      height: auto;
      top: 57%;
      right: 0;
      left: 0%;
    }
    .fpeople {
      width: 25%;
      height: auto;
      bottom: 0;
      right: auto;
      top: auto;
      left: -4%;
    }
  }
</style>
