<script>
  import { Card } from "@atoms";
  import { elementInViewport, handleTriggerClasses, familyImages } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredBottom",
      "animate-slideOutTop"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container fixed w-1/2 top-0 right-1/20 min-w-md overflow-hidden flex-auto h-screen sm:h-120 sm:bottom-0 sm:top-auto sm:w-full sm:min-w-sm opacity-0 {triggerClass}"
  >
    {#each familyImages as image}
      <img class={image.class} src={image.src} alt={image.alt} />
    {/each}
  </div>
  <div class="card-holder mb-0 sm:h-auto mt-20 sm:mt-10 sm:mb-0">
    <Card
      class="w-max h-max max-w-md bg-primary-300 relative sm:w-full sm:max-w-screen-sm sm:mb-80"
    >
      <p>
        You can’t buy a cruise only one way, such are the rules. Rules, rules -
        we have no life anymore, only rules. Mom cries, she tries to keep it
        secret, but we see her reddened eyes. Dad locked inside his workshop for
        a couple days: he melted all of Mom’s and Grandma’s gold jewellery that
        had not yet been taken away. He melted earrings and chains and casted a
        few new things. The buckles of the boys’ belts and my and Mom’s shoes
        are golden, only painted black. For a rainy day.
      </p>
      <p class="mt-8" bind:this={triggerPoint}>
        Every Jew who crosses the border of the Reich can have only ten marks,
        one watch, and one ring on them. We can’t carry any savings, no
        jewellery. Nothing. But that’s not scary, says Dad. Money can be earned.
        And what’s scary? - Mom asks and bites her lip almost to blood again. I
        only got five tickets, he replies so quietly that you can hardly hear,
        and Mom attacks him with her fists, crying.
      </p>
    </Card>
    <Card
      class="w-max h-max max-w-md bg-primary relative mt-20 sm:w-full sm:max-w-screen-sm"
    >
      <p class="text-primary-300">
        There are six of us. Dad, Mom, Aaron, Tolik, me and Grandma.
      </p>
    </Card>
  </div>
</div>
