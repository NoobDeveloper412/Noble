<script>
  import { fly } from 'svelte/transition'

  export let image
</script>

<div class="carousel-image w-auto h-auto relative">
  <img src={image.src} alt={image.alt} />
  <div
    transition:fly={{ y: 30, duration: 500 }}
    class="carousel-caption absolute bottom-1/5 -right-1/2 md:right-0 w-full max-w-xxs h-min p-4 text-primary text-sm bg-primary-300 border-0 border-l-16 border-l-primary"
  >
    {image.caption}
  </div>
</div>
