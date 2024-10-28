<script>
  import { Card } from "@atoms";
  import { Explanation } from "@organisms";
  const hands2Src = "/images/Chapter4/hands2.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full opacity-0 {triggerClass}"
  >
    <img
      src={hands2Src}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto {triggerClass}"
    />
  </div>
  <Card class="card dark last">
    <p bind:this={triggerPoint}>
      He spoke to me so clearly and calmly, looking into my eyes with such
      consideration like no man before him. We knew each other for several
      months, when one day Chiune, as serious as I had never seen him before,
      asked:
    </p>
    <p class="mt-8">
      - Will you marry me? - Why do you want to marry me? - Because I could take
      you abroad with no
      <Explanation
        variant="pink"
        class="border-pink border-b-4"
        cardClass="left-auto sm:left-0"
      >
        <div slot="content" class="w-full">
          <p class="p-6 !text-primary">
            His first wife was Russian, while he was Japanese. In those days,
            interracial marriages were not only very rare but also really
            unacceptable, especially in diplomatic circles. Perhaps his Russian
            wife wouldn’t have been able to appear at receptions, and a diplomat
            without a wife is unreliable, suspicious. Such were the times!
          </p>
        </div>
        <span slot="text">shame</span>
      </Explanation>.
    </p>
  </Card>
</div>
