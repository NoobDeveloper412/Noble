<script>
  export let activeTrigger, nextTrigger;
  import { CardNoSp } from "@atoms";
  const forestSrc = "/images/Chapter10/forest.png";

  import { ChapterItem } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerClass,
    triggerPoint,
    fromTopClass,
    fromBottomClass,
    containerClass,
    fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn ",
      "animate-fadeOut"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152 no-space">
  <div slot="story" class="animate-slideInBlurredBottom">
    <CardNoSp>
      <p class="mb-6 extra-padding" bind:this={triggerPoint}>
        The next evening, brother brought home a radio, “Jews are now forbidden
        to own these,” so the shoemaker gave him it in exchange for a chicken.
        When the maid and I went to the town market as usual, there were no more
        buns, all the shop windows were covered with curtains and closed with
        shutters. Only in the market, as usually, people were bustling and
        chattering, sharing the news: did you hear that you must sit in the
        darkness at home from evening till morning, otherwise they can shoot
        you? Did you notice all the shops are closed? The Jews are forbidden to
        trade, the end of the world! Just as the maid placed a lump of butter on
        the counter for sale, a flushed and disheveled buyer grabbed the butter,
        dropped the money and ran away. “You moron, you sold your butter to a
        Jew, now they will shoot you!” whispered the other butter and cheese
        sellers. “If you want to help them and make money, you can carefully
        take the goods to their home,” the brother’s wife told us when we came
        back.
      </p>
      <p class="mb-6 extra-padding" bind:this={triggerPoint}>
        How much time passed? I don’t remember. We are sitting in the dark by
        the candle, the windows are covered so that the light wouldn’t penetrate
        outside. We keep silent, only the baby in the cradle cries quietly like
        a kitten. Where did the brother's wife get the baby from? “God sent him
        to me,” she says. “I prayed for so many years that God would give me
        children, and finally he listened to my prayers,” she says. She wouldn’t
        stop talking and we will all soon believe that indeed she gave birth to
        that baby, and it wasn’t the maid who secretly took some cheese and eggs
        to the Jews for sale, carrying back a little child in a basket.
      </p>
    </CardNoSp>
  </div>
  <div
    slot="illustration"
    class="h-xl right-3/20 sm:h-l w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="object-contain absolute bottom-0 right-0 opacity-0 {fromTopClass}"
      alt="house"
      src={forestSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">

</style>
