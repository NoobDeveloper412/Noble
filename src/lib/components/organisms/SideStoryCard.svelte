<script>
  import { Arrow, Button, Container } from "@atoms";
  export let onClickLeft;
  export let onClickRight;
  export let variant = "dark";
  const variants = {
    dark: {
      background: "bg-primary shadow",
      color: "text-primary-300",
    },
    light: {
      background: "bg-primary-300 shadow-sandsm",
      color: "text-primary",
    },
    violet: {
      background: "bg-violet shadow-violetsm",
      color: "text-primary",
    },
    transparent: {
      background: "bg-transparent",
      color: "text-primary-300",
    },
  };
</script>

<Container
  {...$$props}
  class="flex-col p-8 
    {variants[variant].background} 
    {variants[
    variant
  ].color} 
    {$$props.class || ''}"
>
  <div class="flex justify-between items-center pb-4">
    <Button on:click={onClickLeft}>
      <Arrow direction="LEFT" class={variants[variant].color} />
    </Button>
    <slot name="title" />
    <Button on:click={onClickRight}>
      <Arrow direction="RIGHT" class={variants[variant].color} />
    </Button>
  </div>
  <slot name="text" />
</Container>
