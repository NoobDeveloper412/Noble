<script>
  import { Card } from "@atoms";
  const aronSrc = "/images/Chapter5/aron.png";

  import { ChapterLink } from "@molecules";
  import { elementInViewport, chapterLinks } from "@utils";

  export let activeTrigger;

  let triggerPoint;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={aronSrc}
      alt=""
      class="absolute h-3/5 bottom-0 left-0 right-0 mx-auto"
    />
  </div>
  <Card class="card mb-28 float-right sm:float-none">
    <p bind:this={triggerPoint}>
      And besides… the little bird has chirped, more and more birds chirp louder
      and louder that if we reach Vilnius, we won’t have to cross the border, as
      Vilnius will soon be returned and we will suddenly find ourselves in
      Lithuania - the border will jump over us, not we over the border - Aaron
      speaks more and more hastily, more and more feverishly, and that heat
      finally thaws Dad’s frozen gaze.
    </p>
    <ChapterLink
      href={`${chapterLinks.chapter6}`}
      class="mt-12 bg-primary w-full text-primary"
    >
      Next Chapter
    </ChapterLink>
  </Card>
</div>
