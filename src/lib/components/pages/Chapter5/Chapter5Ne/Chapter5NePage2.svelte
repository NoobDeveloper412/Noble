<script>
  import { Card } from "@atoms";
  const wallSrc = "/images/Chapter5/wall2.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, wallTrigger;

  const getTriggerClasses = () => {
    wallTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
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
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={wallSrc}
      alt=""
      class="absolute bottom-0 sm:top-0 sm:my-auto {wallTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p bind:this={triggerPoint}>
      We just need to go the other way, we need to go to Lithuania, everyone is
      now going to Lithuania - either fleeing the Nazis or fleeing the Soviets.
      The Soviets, who occupied eastern Poland, are closing all the local
      yeshivas, so the students are being transferred to Lithuania, which means
      that everyone can get asylum there. Aaron hasn’t talked about his Eliza in
      a long time. Eliza’s father violently pushed Aaron through the door, “so
      that I never see your Jewish face again, you will not corrupt my daughter,
      you will not ruin my family, you shitty piece of Jew.” Eliza is not
      Jewish, so they will never be together.
    </p>
  </Card>
</div>
