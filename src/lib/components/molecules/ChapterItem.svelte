<script>
  import { Container } from "@atoms";
  export let imageAligment = "bottom";
  export let textAligment = "left";
  const imageAligments = {
    bottom: "bottom-0",
    top: "top-6",
    smTop: "sm:top-0",
  };
  const textAligments = {
    left: {
      text: "xl:left-1/3 left-2/5 xs:w-full xsRange:w-4/5 xs:left-auto",
      container: "justify-start ml-28 md:ml-0",
    },
    right: {
      text: "right-1/3 sm:right-0 sm:w-full",
      container: "justify-end xl:mr-28 ",
    },
  };
</script>

<div
  class="flex justify-start items-start relative {textAligments[textAligment]
    .container} {$$props.class || ''}"
>
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <slot name="story" />
  </Container>
  <div
    class="w-8/12 fixed {textAligments[textAligment].text} {imageAligments[
      imageAligment
    ]}"
  >
    <slot name="illustration" />
  </div>
</div>
