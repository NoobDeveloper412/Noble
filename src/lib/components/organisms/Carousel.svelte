<script>
  import { Arrow, Button } from "@atoms";
  import { fade } from "svelte/transition";

  export let images, activeIndex, closeCarousel, nextImage, previousImage
</script>

<div
  transition:fade
  class="carousel h-screen w-full fixed inset-0 bg-primary bg-opacity-90 flex justify-center items-center {$$props.class || ''}"
>
  <div
    class="carousel-blur absolute w-full h-full inset-0 -z-1"
    on:click={closeCarousel}
  />
  <Button
    on:click={closeCarousel}
    class="menu-button absolute top-0 left-0 sm:left-auto sm:right-0 p-4 sm:py-4 sm:px-3 z-10"
  >
  </Button>
  <slot />
  <div
    class="carousel-controls absolute bottom-0 flex py-8 w-1/3 justify-around"
  >
    <button class="carousel-controls__previous" on:click={previousImage}>
      <Arrow direction="LEFT" />
    </button>
    <div class="count">
      {activeIndex + 1 > 9 ? activeIndex + 1 : '0' + (activeIndex + 1)} / {images.length}
    </div>
    <button class="carousel-controls__next" on:click={nextImage}>
      <Arrow direction="RIGHT" />
    </button>
  </div>
</div>
