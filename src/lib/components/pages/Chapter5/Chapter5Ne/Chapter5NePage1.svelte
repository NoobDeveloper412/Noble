<script>
  import { Card } from "@atoms";
  const buildingSrc = "/images/Chapter5/building.png";

  const wallSrc = "/images/Chapter5/wall1.png";

  import { handleTriggerClasses } from "@utils";

  export let nextTrigger;

  let wallTrigger;

  const getTriggerClasses = () => {
    wallTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={buildingSrc}
      alt=""
      class="absolute bottom-0 sm:top-0 sm:my-auto"
    />
    <img
      src={wallSrc}
      alt=""
      class="absolute bottom-0 sm:top-0 sm:my-auto {wallTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      Then Aaron speaks up, white as a sheet. Telshe Yeshiva, - he says, - is
      still open, I always wanted to study in the place where all the future
      rabbis from all over the world come to learn.
    </p>
  </Card>
</div>
