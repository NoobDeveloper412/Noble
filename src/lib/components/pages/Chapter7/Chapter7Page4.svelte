<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const frameSrc = "/images/Chapter7/frame_mens.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutTop"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    console.log(activeTrigger);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        Two transit visas is normal, but outside at the gate there are two
        hundred people - you need the authorities approval to issue visas for
        such a mass, you have to write a request to Tokyo. <br /><br />
        Three times Chiune Sugihara tries to send a coded telegram to his authorities.
        Let me issue transit visas. The Soviets marched their army into the territory
        of Lithuania, all people loyal to the former Lithuania - former Lithuanian
        officials, teachers, lawyers, Polish soldiers, Jewish Bundists and Zionists
        - were arrested, Jewish newspaper editors taken to Russia and killed, a crowd
        of Jewish refugees spend nights in front of the Japanese Consulate, I ask
        permission to issue visas to these people
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="frame object-contain absolute mb-40 left-1/4 opacity-0 {fromTopClass}"
      alt="door"
      src={frameSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">

</style>
