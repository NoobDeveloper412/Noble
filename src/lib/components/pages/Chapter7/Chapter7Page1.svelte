<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const birdSrc = "/images/Chapter7/three-birds.png";

  const winddowSrc = "/images/Chapter7/window.png";

  import { ChapterItem } from "@molecules";
  import { handleTriggerClasses } from "@utils";

  let winddowTrigger, birdTrigger, NewsRTrigger, triggerClass;

  const getTriggerClasses = () => {
    winddowTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    birdTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-pulseReverse"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0 ",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="title-7 c-h2 mb-8">A very Noisy morning</h2>
      <p class="mb-8">
        Go away, Akio, you foolish cat, the baby pram is full of your hair
        again, - the maid, that country pumpkin, scolds me. If the sisters of
        St. Zita didn’t help her, she would still be standing in the train
        station, her eyes wide in horror, nervously clutching the bag with
        woolen socks. And now she lives in a warm home, has her own room with a
        balcony, has a job - if you can call a job sweeping dust with a feather
        broom from the green table lamp, from the top of the piano, I watch the
        broom dancing in her hand like a jumpy sparrow.
      </p>
      <p class="mb-8">
        The sparrows of Kaunas are the most beautiful music! But the master
        thinks otherwise. He sits at the piano playing the same “Maiden’s
        Prayer” every day, I sometimes wonder if I should pray that Chiune would
        finally play something else. I barely stop myself from biting him in the
        toe and just rub against his calf in the striped trousers. Akio, - he
        tells me then, - Akio, you foolish cat.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_7 top-0 left-1/5 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="window maw-w-screen-xl object-contain mb-40 sm:mb-32 sm:-mx-1-5 animate-slideInTop {winddowTrigger}"
      alt="window"
      src={winddowSrc}
    />
    <img
      class="bird absolute maw-w-screen-xl object-contain sm:mb-32 sm:-mx-1-5 animate-pulseReverse {birdTrigger}"
      alt="house"
      src={birdSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
 
</style>
