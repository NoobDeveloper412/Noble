<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const forestNightSrc = "/images/Chapter10/forest-night.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, triggerClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
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
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        All the young Jews of Vaškai were arrested and put into prison. The
        space was scarce, so shortly after that the men were driven to the barn
        in Daičiūnai village. Their mothers and sisters went to the village to
        bring them food, and it seemed that the misunderstanding would soon end.
        Only one night all of them were taken out to the Grūžiai forest and
        shot.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        So we gathered, because their women came back home crying, our hearts
        burst seeing them - collapsing, rising on their feet, turning back - the
        town had to tumble down from their moans. But that was just the
        beginning.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        After they killed the young men, they gathered all the others, the old
        and the little ones, telling the women to take every precious thing they
        owned - for they will be resettled.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        A Jewish ghetto was set up in Pasvalys, the white-armbands fenced a few
        streets by the river and forced the Jews inside - the remnants of the
        town of Vaškai, several dozens families from Saločiai town brought in
        massive hay carts, about three hundred people from Joniškėlis brought by
        a narrow-gauge train. Their belongings were heaped in a barn by the
        station
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl right-3/20 sm:h-l w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="object-contain absolute bottom-0 right-0 opacity-0 {fromTopClass}"
      alt="house"
      src={forestNightSrc}
    />
  </div>
</ChapterItem>
