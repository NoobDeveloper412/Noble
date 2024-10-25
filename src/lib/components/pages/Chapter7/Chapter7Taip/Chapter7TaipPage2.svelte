<script>
  import { Card } from "@atoms";
  const houWioutFeSrc = "/images/Chapter7/house-without-fench.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, personsTrigger, janTrigger, visaTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
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
    class="img-area_t3 t2 image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={houWioutFeSrc}
      alt=""
      class="absolute hwf opacity-0 {personsTrigger}"
    />
  </div>
  <Card class="card float-right">
    <p class="mb-6" bind:this={triggerPoint}>
      For a second, the whole world seemed to freeze in silence, but immediately
      the silence exploded: shouts of joy, tears of joy, mothers holding
      children in their arms, people hugging, - and then everyone rushed to the
      gate, some even trying to climb over it. Gudze and Boleslovas, the
      consulate staff, tried to stop the avalanche of people collapsing into the
      yard.
    </p>
    <p class="mb-6">
      “I confirm once again that we will issue visas, but please follow the
      procedure, not all at once, please stand in line,"
    </p>
    <p class="mb-6">
      the consul moaned. Boleslovas came up with a ticket system, giving
      everyone a number so they wouldn’t push and get into fights.
    </p>
    <p class="mb-6">
      Sugihara gulped his cup of coffee and hurried to the office. Difficult and
      slow work awaited there: before issuing visas, you had to fill in
      questionnaires for everyone, verify if there was a guarantor for the final
      destination, check whether future travelers had a train ticket or at least
      money for that ticket, or at very least a guarantee that money will be
      received before the trip. The consul did not have a lunch break that day.
      His wife brought him some sandwiches. Consulate opening hours were clearly
      stated at the door: 9 a.m. to 5 p.m., but Chiune Sugihara wrote and wrote
      visas until late in the night.
    </p>
  </Card>
</div>

<style global lang="postcss">

</style>
