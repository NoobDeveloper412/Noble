<script>
  export let src, alt, index
</script>

<img
  {src}
  {alt}
  id={`image-${index + 1}`}
  class={`gallery-image w-full h-auto object-cover`}
/>
<img
  {src}
  {alt}
  class="gallery-image__hover opacity-0 absolute w-full h-auto object-cover top-0 left-0"
/>
