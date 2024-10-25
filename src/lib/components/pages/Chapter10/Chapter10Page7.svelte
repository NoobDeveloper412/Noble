<script>
  export let activeTrigger, nextTrigger;
  import { Card, Container } from "@atoms";
  import { ChapterItem, ChapterLink } from "@molecules";
  import { chapterLinks, elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "opacity-0"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mb-0 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        The uncle of the brother's wife lived in the Žadeikiai forest. It was
        forbidden to leave the house for two days. The forest echoed with shots
        and moans, it was impossible to eat during the day or to sleep at night,
        drunken men with rifles crashed into the house after midnight, demanding
        more vodka, laughing:
      </p>
      <p class="mb-8">
        <caps>“Those fucking Jews are tough!</caps> You don’t want to use bullets
        on those rats, just strike them with a butt once or twice - and still they
        are alive! We already buried them, and still they are moving, wiggling under
        the ground like devils.”
      </p>
      <p class="mb-8">
        Only a few days later, the uncle dared to leave the farmhouse and go
        into the forest. Swarms of flies, the blood foaming from under the
        ground, darkly.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  ></div>
</ChapterItem>

<div
  class="flex items-start relative justify-start ml-28 sm:ml-0 md:ml-0 sm:mt-0"
>
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="!bg-primary">
      <p class="mb-6 text-primary-300">
        “Why are you telling this!” - cries the maid, “why are you telling us
        such things?!” - cries the brother’s wife. And the maid’s brother, who
        has just brought the uncle over for a visit, takes a shovel, then, after
        some thought, a kerosene lamp, and leaves.
      </p>
      <ChapterLink
        href={`${chapterLinks.chapter11}`}
        class="mt-12 w-full link_btn"
      >
        Next Chapter
      </ChapterLink>
    </Card>
  </Container>
</div>

<style global lang="postcss">

</style>
