<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const pianoSrc = "/images/Chapter7/piano.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "opacity-0"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "hidden"
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
        But this morning something is wrong. Usually, if not for the sparrows
        and the sounds of the piano, Vaižganto Street is very quiet, but this
        morning you can hear a strange roar from the outside. I jump on the
        windowsill and carefully lift the crocheted curtain with my ears.
        Outside, by the gate, people are flocking. A whole roaring crowd! I
        don’t even notice all of the family standing next to me - alarmed
        Chiune, confused Yukiko and Setsuko, who just served breakfast to the
        kids. The consulate opens at 9 a.m., but seeing the curtain move, the
        people outside start shouting out loud. Chiune instructs the driver
        Boleslovas to find out the cause of the commotion. While Setsuko
        gingerly photographs the crowd through the gap in the curtain,
        Boleslovas comes back from the street. “They ask for visas.”
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_7 h-xl sm:h-l w-full flex left-1/5 justify-center items-center relative"
  >
    <img
      class="object-contain piano absolute mb-40 right-0 opacity-0 {fromBottomClass}"
      alt="piano"
      src={pianoSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">

</style>
