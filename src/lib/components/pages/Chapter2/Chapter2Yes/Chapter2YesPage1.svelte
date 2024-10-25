<script>
  import { Card } from "@atoms";
  const deskSrc = "/images/Chapter2/desk.png";

  const letterJSrc = "/images/Chapter2/letterJ.png";

  const passportSrc = "/images/Chapter2/passport.png";

  const radioSrc = "/images/Chapter2/radio.png";

  import { handleTriggerClasses } from "@utils";

  export let nextTrigger;

  let triggerPoint, deskTrigger, radioTrigger, passPortTrigger;

  const getTriggerClasses = () => {
    deskTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    radioTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "smMin:animate-slideOutTop sm:animate-fadeOut"
    );
    passPortTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "animate-scaleUp"
    );
  };

  const setActiveTrigger = () => {
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container ch2tap overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={deskSrc}
      alt=""
      class="absolute w-full top-1/5 sm:top-1/10 animate-fadeIn {deskTrigger}"
    />
    <img
      src={radioSrc}
      alt=""
      class="absolute top-1/5 sm:top-1/10 animate-slideInTop {radioTrigger}"
    />
    <img
      src={passportSrc}
      alt=""
      class="hover-control absolute bottom-0 top-1/4 left-1/5 my-auto sm:left-0 sm:right-0 sm:mx-auto {passPortTrigger ||
        'animate-vibrate'}"
    />
    <img
      src={letterJSrc}
      alt=""
      class="hover-display absolute bottom-0 top-1/4 left-1/5 my-auto sm:left-0 sm:right-0 sm:mx-auto opacity-0 transition-opacity duration-500"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p bind:this={triggerPoint} class="mb-6">
      And Dad’s sweetheart, smiling sadly, nodded:
    </p>
    <h2 class="c-h2 mb-8">yes</h2>
    <p>
      At first, Dad offered to travel to Switzerland, but it turned out that our
      passports, although German, have an additional entry - a big bold red
      letter J. And the Swiss don’t like that letter. We would accept you, say
      the polite Swiss, but we won’t, we already have too many of those J
      letters.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .ch2tap {
    z-index: 9 !important;
  }
  .hover-control:hover {
    & + .hover-display {
      @apply opacity-100;
    }
  }
</style>
