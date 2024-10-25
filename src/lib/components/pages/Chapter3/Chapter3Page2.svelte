<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const birds2FlyingSrc = "/images/chapter3/2birdsFlying.png";

  const birds3FlyingSrc = "/images/chapter3/3birdsFlying.png";

  const birdsEatingSrc = "/images/chapter3/birdsEating.png";

  const carSrc = "/images/chapter3/car.png";

  const catOnFenceSrc = "/images/chapter3/catOnFence.png";

  import { ChapterItem, HoverImage } from "@molecules";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "animate-slideOutBlurredRight"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutBlurredRight"
    );
    fenceClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-slideOutBlurredRight"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-10 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        My eyes are half-closed, you might think I’m asleep, but I’m actually
        watching sparrows happily fighting by a pile of horse manure. The
        traffic on this street is relaxed, there are few such piles, and the
        worst thing is that the people who moved into the house don’t even own a
        horse, they have two cars: a black Cadillac with a driver, reserved for
        the working days, and a noisy smelly clunker, Buick with the number
        K125. Oh, you say “cats can’t read”? A cat, if he’s a real sp... if he’s
        a real hissing creature, knows everything is required in the cat’s job.
      </p>
      <p class="mb-6">
        To get enough information, being petted is all I need. Everyone pets me:
        a Russian laundry lady who comes here once a month, a nice Japanese
        woman with feline eyes, Yukiko, her sister Setsuko, the babysitter, and
        the catlike father of the children, Chiune - although he is very busy
        with his paperwork and rarely comes out into the yard, so if I want to
        rub against his leg in the striped suit pants, asking for attention, I
        must sneak into his offices on the first floor.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <HoverImage
      class="maw-w-screen-xl absolute bottom-1/10 right-0 sm:mb-0 z-100 animate-slideInBlurredBottom {fenceClass}"
      alt=""
      src={catOnFenceSrc}
    >
      <div class="bg-primary py-3 px-4 text-primary-300 font-black">
        <h4 class="c-h4 font-serif pb-2">Vilties vartai</h4>
        <p class="text-sm">
          The Jews later began to call that gate the "gate of hope". In our time
          the fence is gone, but the gate remains. The inscription on them:
          "Visas for life. Gate of Hope"
        </p>
      </div>
    </HoverImage>
    <img
      class="object-contain absolute bottom-0 right-0 opacity-0 {fromBottomClass}"
      alt="car"
      src={carSrc}
    />
    <img
      class="object-contain absolute bottom-0 right-1/3 sm:left-1/20 opacity-0 {fromBottomClass}"
      alt="birds"
      src={birdsEatingSrc}
    />
    <img
      class="object-contain absolute top-0 left-1/5 sm:left-1/20 opacity-0 {fromTopClass}"
      alt="birds"
      src={birds2FlyingSrc}
    />
    <img
      class="object-contain absolute top-0 right-1/20 opacity-0 {fromTopClass}"
      alt="birds"
      src={birds3FlyingSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .hover-caption {
    max-width: 530px;
    min-width: 530px;
  }
</style>
