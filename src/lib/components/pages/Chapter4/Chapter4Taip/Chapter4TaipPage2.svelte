<script>
  import { Card } from "@atoms";
  const couple2Src = "/images/Chapter4/couple2.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, coupleTrigger;

  const getTriggerClasses = () => {
    coupleTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
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
      src={couple2Src}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p>
      We pack our suitcases again a year later - this time we move to Helsinki,
      where my husband will work as an interpreter in the embassy. As the
      Soviets refused to issue a visa, we must take a boat to Seattle, then go
      to New York and, without even getting to see the city, immediately board
      the giant German cruise ship Bremen. I couldn’t imagine there were ships
      like that. It had swimming pools, cinemas, restaurants: breakfast, lunch
      and dinner required changing clothes. Live music: <span
        bind:this={triggerPoint}>before</span
      > the orchestra started playing, we had to sit at the table in fancy outfits.
      When someone later asked me, “How was it to be on a ship like that?" I replied,
      “I've been changing my outfits all the time."
    </p>
    <p class="mt-8">
      After four days spent among wealthy Americans with their diamond necklaces
      and silk gowns, we finally got ashore and the train took us quietly to
      Helsinki.
    </p>
  </Card>
</div>
