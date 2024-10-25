<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const graveSrc = "/images/Chapter11/grave.png";

  const rivka22Src = "/images/Chapter11/rivka-22.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromTopClass,
    fromFadeClass,
    fromBottomClass,
    containerClass,
    fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn ",
      "opacity-0"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "hidden"
    );
    fromFadeClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1",
      ""
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152 no-space">
  <div slot="story" class="animate-slideInBlurredBottom">
    <CardNoSp class='pb-10'>
      <p bind:this={triggerPoint} class="extra-padding">
        Hanna, maybe six years old, and Rivka, eight. Hanna’s mother pushed her
        off the pit from the bridge just before the shots started and covered
        the girl with her own body. That’s how a little gap of air formed.
      </p>
      <p bind:this={triggerPoint} class="extra-padding">
        It was evening, the shooters and limescale spreaders were already tired
        and thirsty again, so they hurried to finish their bloody work as
        quickly as possible and headed to the town’s canteen, where heaps of
        vodka and snacks were waiting for them every time as a reward. At night,
        when the shots had been silent for quite a long time, Hanna dug herself
        out from the pit, with a huge effort emerged from a pile of heavy dead
        bodies, then found a locked barn and crept inside through a hole made by
        two broken boards. There, buried under the straw, Rivka was already
        squatting - it was she who broke that hole in the barn wall.
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="h-xl right-1/10 sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="grave11 object-contain absolute bottom-0 right-0 opacity-0 {fromTopClass}"
      alt="house"
      src={graveSrc}
    />
    <img
      class="rivka_22 absolute bottom-0 maw-w-screen-xl object-contain sm:mb-32 sm:-mx-1-5 opacity-0 {fromFadeClass}"
      alt="rivka"
      src={rivka22Src}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
 
</style>
