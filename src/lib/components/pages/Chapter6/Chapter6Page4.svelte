<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const LetterSrc = "/images/chapter6/letters.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutTop"
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
        Nathan tries to speak to him like their Yeshiva teachers do: that
        suffering is not in vain. That suffering helps to unite the spiritual
        and earthly realms and leads to a higher relationship with God. Until
        one day, the teachers of the Telshe Yeshiva themselves hastily say their
        goodbyes and go to the United States - via Vilnius, Moscow, Vladivostok,
        Japan - to ask for help, to raise funds among American Jews so that the
        Telshe Yeshiva could continue its activities. Nathan is furious. Nathan
        would also like to go to America, where his family left from the
        Netherlands last year. Nathan stayed to study in Lithuania because it
        was quiet and safe here, but now this peace seems about to crack like a
        previously comfortable but now limp chair. At first, only Aaron used to
        sob for his lost Poland at night; these days Nathan joins him and cries
        for the Nazi-occupied Netherlands.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="letter_area h-xl sm:left-1/20 sm:h-l w-full left-1/3 flex justify-center items-center relative"
  >
    <img
      class="object-contain absolute mb-40 right-0 opacity-0 {fromTopClass}"
      alt="door"
      src={LetterSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .letter_area {
    width: 530px;
    bottom: 3%;
  }
  @screen sm {
    .letter_area {
      width: 115% !important;
      bottom: 3%;
      left: -8%;
    }
  }
</style>
