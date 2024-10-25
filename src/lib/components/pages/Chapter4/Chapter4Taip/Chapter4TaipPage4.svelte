<script>
  import { Card } from "@atoms";
  const familySrc = "/images/Chapter4/couple-family.png";

  const houseSrc = "/images/Chapter4/house.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, familyTrigger, houseTrigger;

  const getTriggerClasses = () => {
    familyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    houseTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeInSlow",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    nextTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={houseSrc}
      alt=""
      class="absolute top-0 left-0 right-0 mx-auto opacity-0 object-contain {houseTrigger}"
    />
    <img
      src={familySrc}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto opacity-0 {familyTrigger}"
    />
  </div>
 <Card class="card float-right sm:float-none">
    <p>
      Cat, are you asleep? - I'm telling half of my life to you, and you’re
      asleep. You know the rest: we moved to this house on a hill, from which
      you can see the whole of Kaunas. On weekends, we travel to explore
      Lithuania, especially the seaside. I planted a couple of apple trees in
      the garden, and our third son, Haruki, was born - look, he’s already awake
      and crying in his pram.
    </p>
    <p class="mt-8">
      The rain has stopped and Setsuko would take the baby to the yard, but
      outside, in our usually empty and quiet street, people have been gathering
      since the morning.
    </p>
    <p class="mt-8">
      To show that I was not sleeping, but listening, I scratch my ear, stretch
      and jump from the windowsill on the table, then <span bind:this={triggerPoint}>slip</span> into Yukiko’s lap. Yukiko looks tired, anxious and… scared.
    </p>
  </Card>
</div>
