<script>
  export let image;
</script>

<div class="box-shadow-sandsm bg-primary p-4">
  <h3 class="c-h3 mb-4">{image.captionTitle}</h3>
  {#each image.content as item}
    • {item} <br />
  {/each}
</div>
