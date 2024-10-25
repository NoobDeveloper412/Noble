<script>
  import { Card } from "@atoms";
  const windowSrc = "/images/Chapter5/window.png";

  const familySrc = "/images/Chapter5/family.png";

  const policeSrc = "/images/Chapter5/police.png";

  const seaSrc = "/images/Chapter5/sea.png";

  const portSrc = "/images/Chapter5/port.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, firstTrigger, secondTrigger;

  let triggerPoint,
    windowTrigger = "",
    policeTrigger = "",
    seaTrigger = "",
    portTrigger = "";

  const getTriggerClasses = () => {
    windowTrigger = handleTriggerClasses(null, secondTrigger, "", "opacity-0");
    policeTrigger = handleTriggerClasses(
      activeTrigger,
      firstTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    seaTrigger = handleTriggerClasses(
      firstTrigger,
      secondTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    portTrigger = handleTriggerClasses(
      secondTrigger,
      null,
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

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container ch5_tai overflow-hidden fixed w-2/3 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={policeSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {policeTrigger}"
    />
    <img
      src={seaSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {seaTrigger}"
    />
    <img
      src={portSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {portTrigger}"
    />
    <img
      src={windowSrc}
      alt=""
      class="absolute top-1/10 left-1/5 {windowTrigger}"
    />
    <img src={familySrc} alt="" class="absolute bottom-1/10" />
  </div>
  <Card class="card dark float-right sm:float-none">
    <h2 class="c-h2 mb-8">Yes</h2>
    <p>
      You go, kids, - says Grandma. - Calm down and stop whimpering, daughter, -
      she says to Mom, - I’ve already lived my life, little is left. Children
      must someday leave their old parents and start their own life. So stop
      sobbing and start living.
    </p>
    <p class="mt-8" bind:this={triggerPoint}>
      Little I remember from that trip. Only the horror, when the train stopped
      at the Italian border and the customs officers beat up a man who had some
      banknotes sewn into his jacket. Only the woman who took out her earrings
      while waiting for an inspection and put them into her little daughter’s
      coat pocket. The family of the man hiding the money, the relatives of the
      woman who took out her earrings too late - all of them were left behind
      the border, no one was allowed back on the train. I thought my black belt
      buckle would burn a hole in my stomach and the shoes would catch fire - I
      was so afraid that we wouldn’t succeed either.
    </p>
  </Card>
</div>
