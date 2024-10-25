<script>
  export let src,
    alt,
    isClickable = false;

  let hoverContainer;
  let m = { x: 0, y: 0 };

  const handleMousemove = (event) => {
    m.x = event.clientX - hoverContainer.getBoundingClientRect().left;
    m.y = event.clientY - hoverContainer.getBoundingClientRect().top;
  };
</script>

<div
  class="hover-image-container {isClickable
    ? 'clickable'
    : 'hoverable'} {$$props.class || ''}"
  on:mousemove={handleMousemove}
  on:click
  bind:this={hoverContainer}
>
  <div class="image-container relative">
    <img
      {src}
      {alt}
      class="hover-image w-full sm:h-full sm:object-cover sm:object-top"
    />
    {#if !isClickable}
      <div
        class="hover-caption absolute"
        style={`top: ${m.y}px; left: ${m.x}px`}
      >
        <slot />
      </div>
    {/if}
  </div>
</div>

<style>
  .hover-image-container {
    &.hoverable:hover {
      @apply z-50;
      .hover-caption {
        @apply opacity-100 z-50;
      }
    }
  }
  .hover-caption {
    @apply opacity-0 transition-opacity duration-500;
  }

  @screen sm {
    .hover-image-container.clickable {
      &.active {
        transform: scale(1.25);
      }
    }
  }
</style>
