<script>
  import { GalleryImage } from "@molecules";
  import { Carousel } from "@organisms";
  import { CarouselImage } from "@molecules";

  let activeIndex = 0,
    carouselOpen = false

  export let images

  const handleImageClick = index => {
    document.body.classList.add('overflow-hidden')
    document.getElementsByClassName('menu')[0].classList.remove('z-10')
    carouselOpen = true
    activeIndex = +index
  }

  const closeCarousel = () => {
    document.body.classList.remove('overflow-hidden')
    document.getElementsByClassName('menu')[0].classList.add('z-10')
    carouselOpen = false
  }

  const nextImage = () => {
    activeIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
  }

  const previousImage = () => {
    activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
  }
</script>

<div
  class="gallery flex flex-wrap w-full md:w-3/4 max-w-screen-md mx-auto mt-16 sm:mt-8"
>
  {#each images as image, index}
    <div
      on:click={() => {
        handleImageClick(index)
      }}
      class="gallery-image__container h-auto w-60 relative flex-auto opacity-0 animate-slideInBlurredBottom transition duration-500"
      style={`animation-delay: ${1000 + 100 * index}ms`}
    >
      <GalleryImage src={image.src} alt={image.alt} />
    </div>
  {/each}
  {#if carouselOpen}
    <Carousel
      {images}
      {activeIndex}
      {closeCarousel}
      {nextImage}
      {previousImage}>
      <CarouselImage image={images[activeIndex]} />
    </Carousel>
    />
  {/if}
</div>

<style global lang="postcss">
  .gallery-image__hover {
    transition: opacity 500ms, transform 500ms;
  }

  .gallery-image__container {
    &:hover {
      .gallery-image__hover {
        opacity: 1;
        transform: scale(1.2);
        z-index: 2;
      }
    }
  }

  @screen mdMin {
    .gallery-image__container:nth-of-type(even) {
      @apply mt-20;
    }
  }
</style>
