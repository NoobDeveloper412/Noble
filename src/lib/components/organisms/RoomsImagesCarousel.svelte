<script>
  import CarouselCard from "./CarouselCard.svelte";
  export let content;
  export let currentIndex;
  export let close;
  export let variant = "main";
  const variants = {
    main: {
      container: "sm:h-l",
      item: "smRange:left-1/10 mdRange:left-1/10",
    },
    trivia: {
      container: "sm:h-xl",
      item: "smRange:max-w-sm smRange:left-1/20 mdRange:left-1/4",
    },
  };
</script>

<div
  class="relative w-full h-screen 
  {variants[variant].container} 
  {$$props.class || ''}"
>
  <img
    class="absolute top-0 right-0 max-w-none w-10/12 sm:w-full"
    alt={content[currentIndex].alt}
    src={content[currentIndex].src}
  />
  <div
    class="bg-primary flex flex-col justify-center items-center z-10 absolute max-w-lg sm:max-w-none bottom-1/20 sm:bottom-0 left-1/3 sm:left-0 
    {variants[variant].item} "
  >
    <CarouselCard {content} bind:currentIndex {close} variant="rooms" />
  </div>
</div>
