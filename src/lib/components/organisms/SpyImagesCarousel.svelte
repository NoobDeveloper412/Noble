<script>
  import CarouselCard from "./CarouselCard.svelte";
  export let content;
  export let currentIndex;
  export let close;
</script>

<div
  class="flex flex-col justify-center items-center z-10 absolute max-w-xs bottom-3/20 sm:bottom-1/10 {$$props.class ||
    ''}"
>
  <img
    class="small-image animate-vibrate"
    alt={content[currentIndex].alt}
    src={content[currentIndex].src}
  />
  <CarouselCard {content} bind:currentIndex {close} />
</div>
