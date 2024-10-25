<script>
  import { Card } from "@atoms";
  const houWiFeSrc = "/images/Chapter7/house-with-fench.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, personsTrigger, janTrigger, withFTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
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
    class="img-area_t3 image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 sm:w-full sm:left-0  {imageTrigger}"
  >
    <img
      src={houWiFeSrc}
      alt=""
      class="absolute hwf animate-slideInBottom {personsTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">Yes</h2>
    <p class="mb-6" bind:this={triggerPoint}>
      And then Chiune Sugihara finally makes his decision. Early in the morning,
      he goes out to the yard and announces to everyone out loud, “I will issue
      visas!”
    </p>
  </Card>
</div>


<style global lang="postcss">
 
</style>
