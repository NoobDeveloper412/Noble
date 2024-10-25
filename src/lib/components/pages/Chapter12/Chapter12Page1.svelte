<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const familySrc = "/images/Chapter12/family.png";

  const harukiSrc = "/images/Chapter12/haruki.png";

  const setsukoSrc = "/images/Chapter12/setsuko.png";

  import { ChapterItem } from "@molecules";
  import { handleTriggerClasses } from "@utils";

  let FamilyTrigger, NurseTrigger, BabyTrigger, triggerClass;

  const getTriggerClasses = () => {
    FamilyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      ""
    );
    NurseTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0",
      "opacity-0"
    );
    BabyTrigger = handleTriggerClasses(activeTrigger, nextTrigger, "", "");
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0",
      ""
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">How it all ended</h2>
      <p class="mb-8">
        But what about spies? Where are those spies promised at the beginning of
        the story?
      </p>
      <p class="mb-8">
        At the end of his life, Chiune Sugihara didn’t hide that his main task
        when he arrived in Kaunas, Lithuania, was to gather as accurate
        information as possible about the movements of the new allies - the
        German and USSR armies - and to inform Japan about any new conflict as
        early as possible. His wife Yukiko remembered frequent sightseeing trips
        around Lithuania - while the women and children enjoyed the picnic,
        Sugihara would drive around the area. Hasn’t there been a shortage of
        young men in the fields? That would mean an impending mobilization. Are
        there any strangely wide ruts on the roads? That would mean military
        equipment being prepared.
      </p>
      <p class="mb-8">
        Boleslovas, the adviser, was the employee of the Consulate, recommended
        to Sugihara by the Polish military attaché. The government of occupied
        Poland by the time had already moved to Britain, so Boleslovas and
        several other Poles were not only Polish spies but also Sugihara’s “eyes
        and ears” at the Japanese Consulate, because it wouldn’t have been easy
        for the only Japanese in Lithuania to walk around, ask questions and go
        unnoticed.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_12 first left-1/20 top-0 sm:h-l h-screen w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="family absolute object-contain bottom-0 animate-slideInBottom {FamilyTrigger}"
      alt="family"
      src={familySrc}
    />
    <img
      class="setsuko absolute right-1/20 bottom-1/3 object-contain animate-slideInBlurredRight {NurseTrigger}"
      alt="setsuko"
      src={setsukoSrc}
    />
    <img
      class="haruki absolute bottom-0 left-1/5 object-contain animate-slideInBottom {BabyTrigger}"
      alt="haruki"
      src={harukiSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
 
</style>
