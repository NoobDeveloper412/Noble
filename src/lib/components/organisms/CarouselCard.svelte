<script>
  import { Close } from "@molecules";
  import SideStoryCard from "./SideStoryCard.svelte";
  export let content;
  export let currentIndex = 0;
  export let close;
  export let variant="spy";
  const variants={
    spy:{
      card: "",
      close:"mb-4"
    },
    rooms:{
      card:"p-4 pb-0",
      close: ""
    }
  }
</script>

<SideStoryCard
  variant="transparent"
  class="carousel text-center {variants[variant].card} {$$props.class || ''}"
  onClickLeft={() =>
    (currentIndex = currentIndex === 0 ? content.length - 1 : currentIndex - 1)}
  onClickRight={() =>
    (currentIndex = currentIndex === content.length - 1 ? 0 : currentIndex + 1)}
>
  <h4 slot="title" class="c-h4 max-w-xxs">{content[currentIndex].title}</h4>
  <p slot="text" class="text-sm">{content[currentIndex].description}</p>
</SideStoryCard>
<Close on:click={close} class={variants[variant].close} />
