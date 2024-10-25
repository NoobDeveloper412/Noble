<script>
  import { Card } from "@atoms";
  const kelvinatorSrc = "/images/Chapter2/kelvinator.png";

  const kitchenSrc = "/images/Chapter2/kitchen.png";

  import { Explanation } from "@organisms";
  import {
    elementInViewport,
    handleTriggerClasses,
    imageReferences,
  } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeInSlow sm:z-0",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col kitch">
  <div
    class="image-container fixed bottom-0 right-1/20 w-1/2 overflow-hidden flex-auto h-screen min-w-md sm:w-full sm:min-w-sm sm:h-94 sm:mt-10 opacity-0 {triggerClass}"
  >
    <img
      src={kitchenSrc}
      alt=""
      class="absolute bottom-0 right-0 w-full h-full object-contain object-bottom sm:h-full sm:w-full"
    />
  </div>
  <Card class="card">
    <p>
      A week ago, the storm accumulated gradually. The icemen were late to bring
      ice for the perishable products stored in the ice terrace, so the butter
      melted, the raw meat got a little greenish, and Dad’s beer "turned into
      nothing" - at least that’s what Mom told Dad, biting her lip again and
      again.
    </p>
    <p class="mt-8" bind:this={triggerPoint}>
      Now Mom can smile again as a bunch of strongmen brought a large box into
      the kitchen from which they unpacked the white metal
      <Explanation
        variant="sand"
        class="border-sand border-b-4"
        href={imageReferences[2].kelvinator}
      >
        <div slot="content" class="w-full">
          <img src={kelvinatorSrc} alt="kelvinatoriu" class="w-full" />
          <p class="p-6">„Kelvinator“</p>
        </div>
        <span slot="text"> Kelvinator</span>
      </Explanation>
      
      - that’s the name of this icebox. When the Kelvinator is connected
      to electricity, it’s difficult to talk in the kitchen, because its engine rumbles
      like a motorcycle, the box itself shakes and sways from side to side. Anyway,
      from now on Dad always has some cold beer, Mom buys half a kilo of butter and
      we kids get ice cream. To get ice cream, you no longer have to go to the ice
      cream parlor in the downtown, just think about it.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .kitch {
    z-index: -9;
  }

  @screen sm {
    .kitch {
      z-index: 50;
    }
  }
</style>
