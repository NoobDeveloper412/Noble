<script>
  export let activeTrigger, nextTrigger;
  import { Card, Container } from "@atoms";
  const housegateSrc = "/images/Chapter7/night-house.png";

  const peopleLastSrc = "/images/Chapter7/people-end.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromLeftClass,
    fromRightClass,
    fromTopClass,
    fromBottomClass;

  const getTriggerClasses = () => {
    fromLeftClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      ""
    );
    fromRightClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredRight",
      "animate-fadeOut"
    );
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      ""
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card class="mb-16 z-20">
      <p class="mb-6" bind:this={triggerPoint}>
        But all three times comes the answer which means: no. Do not issue visas
        to those who do not have any written proof that they have a guaranteed
        future residence in a country other than Japan. Do not issue visas to
        those who do not have enough money.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        No one has any written proof. No one has enough money, most of them have
        no money at all. Zwartendijk’s Curaçao visa costs 11 litas, Japanese
        transit visa usually costs 2 litas. Even this amount may already seem
        considerable to those waiting at the gate. It takes thousands to
        officially get to Japan. Thousands of money.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="last_hou_gate left-1/5 h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="gatehouse object-contain absolute bottom-1/20 left-0 opacity-0 {fromTopClass}"
      alt="door"
      src={housegateSrc}
    />
    <img
      class="peoplecrowdend object-contain absolute bottom-0 left-0 opacity-0 {fromRightClass}"
      alt="door"
      src={peopleLastSrc}
    />
  </div>
</ChapterItem>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172">
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-999 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="!bg-primary">
      <p class="mb-6 text-primary-300">
        Chiune Sugihara is worried sick. He no longer sleeps at night. People at
        the consulate gate are tired and cold - it’s the end of July, but the
        summer is unusually chilly this year, especially at night - at night,
        waiting people are forced out by Russian soldiers. Yukiko, his wife,
        writes another poem:
      </p>
      <p class="text-primary-300">
        Should he or shouldn’t <br />
        Issue requested visas<br />
        He no longer sleeps<br />
        During the night, I can hear<br />
        His bed moaning as in pain
      </p>
    </Card>
  </Container>
</div>

<style global lang="postcss">
 
</style>
