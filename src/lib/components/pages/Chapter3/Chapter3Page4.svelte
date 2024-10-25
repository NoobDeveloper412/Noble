<script>
  export let activeTrigger, nextTrigger;
  import { Card, Container } from "@atoms";
  const houseInsideSrc = "/images/chapter3/houseInside.png";

  import { PulsingDot } from "@molecules";
  import { RoomsImagesCarousel } from "@organisms";
  import { elementInViewport, handleTriggerClasses, rooms } from "@utils";

  let triggerPoint, triggerClass, containerClass, alignmentClass;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "block animate-fadeInSlow z-10 ",
      ""
    );
    containerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "z-10",
      ""
    );
    alignmentClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "sm:z-10",
      ""
    );
  };

  let currentIndex = 0;
  let buildingClass = "";
  let carouselClass = "hidden";
  let pulsingDot = "";
  const openCarousel = () => {
    currentIndex = 0;
    carouselClass = "block animate-scaleInCenter";
    buildingClass = "hidden";
    pulsingDot = "hidden";
  };
  const closeCarousel = () => {
    carouselClass = "hidden";
    buildingClass = "sm:z-10 animate-fadeIn";
    pulsingDot = "hidden";
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div
  class="flex items-start relative justify-start ml-28 md:ml-0 sm:my-172 {containerClass}"
>
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="mb-16 z-20">
      <p class="mb-6" bind:this={triggerPoint}>
        The first floor is full of muted sounds: the clickety clack of the
        typewriter in Sugihara’s office, the occasional ring-ring-ring of the
        phone. Two Poles are quietly arguing in the Assistants’ room, I can hear
        the names of the cities: "Stockholm... Japanese Consulate in Finland...
        Polish section of the British Consulate" - nothing that could interest a
        cat.
      </p>
      <p class="mb-6">
        The Decoding room is much more intriguing, it’s forbidden to go there,
        but I wait for Gudze to sneak into that room, then dart through his legs
        and hide under the curtain that falls to the ground. Gudze, walking
        softly as a cat, approaches the table. The table is gently buzzing,
        wires are tangled everywhere.
      </p>
      <p>
        At night I hear beeping noises coming out of this room, I used to
        suspect the birds, but there are no birds around: only some radios,
        telegraph handles, headphones, a thing that looks like a typewriter,
        only full of wires, also some plugs and stinky hot light bulbs.
      </p>
    </Card>
  </Container>
  <div
    class="w-8/12 fixed xl:left-1/3 left-2/5 sm:w-full xsRange:w-4/5 sm:left-auto bottom-0"
  >
    <div
      class="maw-w-screen-xl w-full h-screen block justify-center items-end opacity-0 {triggerClass} {alignmentClass}"
    >
      <img
        class="house object-contain float-right maw-w-screen-xl mt-60 sm:mb-32 sm:-mx-1-5 {buildingClass}"
        on:click={openCarousel}
        alt="house"
        src={houseInsideSrc}
      />
      <PulsingDot
        on:click={openCarousel}
        class="absolute bottom-2/5 left-2/3 {pulsingDot} {alignmentClass}"
      />
      <RoomsImagesCarousel
        content={rooms}
        bind:currentIndex
        class={carouselClass}
        close={closeCarousel}
      />
    </div>
  </div>
</div>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172">
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="bg-primary">
      <p class="mb-6 text-primary">
        Japanese Chiune Sugihara told the Lithuanian press that he came here to
        strengthen Lithuanian-Japanese cultural ties, and also to represent
        Osram light bulb firm, but I don't see any light bulb boxes for sale -
        or any ties, for that matter: only tangled wires. Gudze is hurriedly
        rummaging between round cards mottled with letters, writes something
        down and hides it in a pocket of his jacket. Sitting under the dusty
        curtain, I can’t suppress a sneeze. “ACHOO!"
      </p>
      <p class="text-primary-300">
        Frightened, Gudze jumps in the air and turns around.
      </p>
    </Card>
  </Container>
</div>
