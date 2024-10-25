<script>
  import { Card } from "@atoms";
  const dadSittingSrc = "/images/Chapter2/dad-sitting.png";

  const radioSrc = "/images/Chapter2/radio.png";

  import { handleTriggerClasses } from "@utils";

  export let activeTrigger;

  let triggerClass = "";

  const setActiveTrigger = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      null,
      "animate-slideInBlurredBottom",
      "animate-slideOutTop"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container fixed w-1/2 top-0 right-1/20 min-w-md overflow-hidden flex-auto h-screen sm:h-120 sm:bottom-0 sm:top-auto sm:w-full sm:min-w-sm opacity-0 {triggerClass}"
  >
    <img src={dadSittingSrc} alt="" class="absolute w-full bottom-0" />
    <img src={radioSrc} alt="" class="absolute left-0 bottom-0 w-2/5" />
  </div>
  <Card class="card dark last">
    <p class="text-primary-300">
      Dad, who started sitting at the radio longer and longer, finally turned it
      off and said to Mom, his lips a grayish tint: let's go, darling, let's
      move to America, I have acquaintances there. They say they would help to
      rent a jewellery shop on a very good street, our kids are good at
      languages, they adapt quickly, I would enroll them in the best schools,
      let’s go, sweetheart, I beg you.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .shadow-primaryTop {
    z-index: 9;
  }
</style>
