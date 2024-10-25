<script>
  import { Card } from "@atoms";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromLeftClass;

  const getTriggerClasses = () => {
    fromLeftClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      ""
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden absolute w-1/2 top-1/10 left-1/20 h-screen sm:w-full sm:left-0"
  ></div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      The brother’s wife can’t hide the girls. There is no space in the house.
      Someone might report that she is hiding Jews, in that case not only the
      girls but also the baby would die, and the maid and the maid’s brother and
      the brother’s wife herself would be shot.
    </p>
    <p class="dot"></p>
  </Card>
</div>

<style global lang="postcss">
 
</style>
