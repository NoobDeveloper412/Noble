<script>
  import { Card } from "@atoms";
  import { ChapterLink } from "@molecules";
  import { Explanation } from "@organisms";
  const akioSrc = "/images/Chapter4/akio.png";

  const jukikoSrc = "/images/Chapter4/jukiko.png";

  const peopleSrc = "/images/Chapter4/people.png";

  import { handleTriggerClasses, chapterLinks } from "@utils";

  export let activeTrigger, nextTrigger;

  let imageTrigger = "";

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredBottom",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0 opacity-0 {imageTrigger}"
  >
    <img src={peopleSrc} alt="" class="absolute top-0 left-0" />
    <img
      src={akioSrc}
      alt=""
      class="absolute bottom-1/10 left-0 sm:w-1/4 sm:bottom-1/4"
    />
    <img
      src={jukikoSrc}
      alt=""
      class="absolute bottom-0 right-1/20 sm:bottom-1/4 sm:w-3/4 sm:right-0"
    />
  </div>
  <Card
    class="w-100 bg-primary-300 relative mt-20 mb-28 float-right z-5 sm:w-full sm:max-w-screen-sm sm:mt-10 sm:float-none"
  >
    <p>She just wrote another tanka:</p>
    <p class="mt-8">
      In that crowd be low
      <br />
      Loud ly beg ging for vi sas
      <br />
      A child, lit tle boy,
      <br />
      His face smudged with run ning tears,
      <br />
      Holds on to his fa ther’s
      <Explanation variant="pink" class="border-pink border-b-4">
        <div slot="content" class="w-full">
          <p class="p-6">A real poem by Yukiko Sugihara</p>
        </div>
        <span slot="text">hand</span>
      </Explanation>
    </p>
    <ChapterLink
      href={`${chapterLinks.chapter5}`}
      class="mt-12 bg-primary w-full text-primary"
    >
      NEXT CHAPTER
    </ChapterLink>
  </Card>
</div>
