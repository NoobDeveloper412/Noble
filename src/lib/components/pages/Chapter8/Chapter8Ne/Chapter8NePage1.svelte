<script>
  import { Card } from "@atoms";
  const tableSrc = "/images/chapter8/table.png";

  const maidSrc = "/images/chapter8/maid.png";

  const akioSrc = "/images/chapter8/akio.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, tableTrigger, maidTrigger, akioTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    tableTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
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
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex relative">
  <div
    class="img-area_8 overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={tableSrc}
      alt=""
      class="absolute table bottom-0 my-auto sm:bottom-1/10 {tableTrigger}"
    />
    <img
      src={maidSrc}
      alt=""
      class="maid absolute right-0 left-0 mx-auto animate-slideInBlurredLeft {maidTrigger}"
    />
    <img
      src={akioSrc}
      alt=""
      class="akio absolute bottom-0 right-0 mx-auto animate-slideInTop {akioTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p class="mb-6" bind:this={triggerPoint}>
      The maid was giggling and cuddling with Gudze when she heard the banging
      and screaming at the door.
    </p>
    <p>
      “Wait a minute!” - shouts the maid, carefully opens the window into the
      garden, helps the pudgy Gudze squeeze through the gap, thinks for a
      moment, grabs the hissing cat and throws it out the window as well. “This
      is still Japanese territory, you have no right to enter!” she says to the
      soldiers, opening the door. “And hold your dog, a frightened cat is
      scurrying about in the garden!” she says, almost crying. “I don't know
      anything, I'm just a poor maid from the working class oppressed by the
      bourgeoisie!” - repeats the tirade recently heard from the Russian laundry
      lady. This phrase, like a paper shield, stops the soldier who is about to
      strike a blow: holding his barking dog by the chain, he quickly inspects
      empty rooms, curses, spits on the floor and, slamming the door, finally
      leaves.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .img-area_8 {
    max-width: 700px;
    height: 650px;
  }
  .table {
    width: 100%;
    max-width: 650px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .maid {
    width: 227.7px;
    height: auto;
    top: 0%;
    left: 6%;
  }
  .akio {
    width: 120px;
    height: auto;
    top: 19%;
    right: 10%;
  }

  @screen sm {
    .img-area_8 {
      max-width: 100%;
      height: 440px;
      bottom: 20%;
    }
    .table {
      width: 100%;
      max-width: 93%;
      left: 0px;
      margin: 0 auto;
    }
    .maid {
      width: 119.7px;
      height: auto;
      top: 11%;
      left: 5%;
    }
    .akio {
      width: 80px;
      height: auto;
      top: 22%;
      right: 8%;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .img-area_8 {
      max-width: 450px;
      height: 454px;
    }
    .maid {
      width: 161px;
      height: auto;
      top: 0%;
      left: 10%;
    }
    .akio {
      width: 80px;
      height: auto;
      top: 21%;
      right: 8%;
    }
    .image-container_8station {
      max-width: 675px;
      width: 100%;
      z-index: -9;
    }
  }
</style>
