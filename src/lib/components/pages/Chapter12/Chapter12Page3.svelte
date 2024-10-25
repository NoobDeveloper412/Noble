<script>
  export let activeTrigger, nextTrigger;
  import { Container, Card } from "@atoms";
  import { ChapterItem, HoverImage } from "@molecules";
  const familySrc = "/images/Chapter12/family.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, FamilyTrigger, triggerClass;

  const getTriggerClasses = () => {
    FamilyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-1",
      "animate-fadeOut"
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
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        What happened next? After the Sugihara family left Kaunas, Chiune served
        for a short time as the Japanese Consul in Czechoslovakia, less than a
        year later - as the Consul General in Königsberg, a year later, in 1942
        - as the Consul General in Romania, where he lived until the end of
        World War II and together with his family in the autumn of 1945 entered
        the internment camp, where they spent the whole year. When finally in
        the spring of 1947 they returned to Japan, the Ministry of Foreign
        Affairs announced that Chiune Sugihara had been fired and removed from
        the diplomatic list. Has this happened because of thousands of illegally
        issued visas?
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Those years were terrible not only because Sugihara lost his job. All
        over Japan food was scarce - food ration stamps provided only small
        amounts of food so the family survived only on rice and potatoes. And
        then the absolutely worst thing happened: Haruki, Chiune’s little son
        who was just seven years old, suddenly felt unwell and died overnight.
        Leukemia.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        A year later, Setsuko - Yukiko’s sister, who had worked as a babysitter
        for Sugiharas for many years - got married, gave birth to a daughter,
        and died.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        The joy was back only in 1951, January 8, when Sugiharas had their
        fourth son, Nobuki.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_12 left-1/20 top-0 sm:h-l h-screen w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="family absolute bottom-0 object-contain opacity-0 {FamilyTrigger}"
      alt="family"
      src={familySrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">

</style>
