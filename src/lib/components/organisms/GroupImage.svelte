<script>
  import { HoverImage } from "@molecules";
  import SideStoryCard from "./SideStoryCard.svelte";
  import { Button } from "@atoms";
  import { mobileWidth } from "@utils";

  export let images;

  let activeIndex, windowWidth;

  const setActiveIndex = (index) => {
    activeIndex = index;
  };

  const closeCaption = () => {
    activeIndex = -1;
  };

  const nextCaption = () => {
    activeIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
  };

  const previousCaption = () => {
    activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  };
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class={$$props.class}>
  {#each images as image, index}
    <HoverImage
      class={`${image.class} ${index === activeIndex && "active"}`}
      src={image.src}
      alt={image.alt}
      isClickable={windowWidth <= mobileWidth}
      on:click={() => setActiveIndex(index)}
    >
      <div class="box-shadow-sandsm bg-primary p-4">
        <h3 class="c-h3 mb-4">{image.captionTitle}</h3>
        {#each image.content as item}
          • {item} <br />
        {/each}
      </div>
    </HoverImage>
  {/each}
  {#if windowWidth <= mobileWidth && activeIndex >= 0}
    <SideStoryCard
      class="mobile-caption absolute w-full bottom-0"
      onClickLeft={previousCaption}
      onClickRight={nextCaption}
    >
      <h3 class="c-h3 mb-4" slot="title">{images[activeIndex].captionTitle}</h3>
      <div slot="text" class="flex flex-col items-center">
        {#each images[activeIndex].content as item}
          • {item} <br />
        {/each}

        <Button on:click={closeCaption}>
          <img src="/icon/close.svg" class="pointer-events-none" />
        </Button>
      </div>
    </SideStoryCard>
  {/if}
</div>

<style global lang="postcss">

</style>
