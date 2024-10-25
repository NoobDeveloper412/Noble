<script>
    import { ChapterTemplate, ChoicesScreen } from "@components";
    import { ChapterMenu } from "@organisms";
    import { menuLinks } from "@utils";
    import { fade } from "svelte/transition";
    import {
      Chapter12Page1,
      Chapter12Page2,
      Chapter12Page3,
      Chapter12Page4,
      Chapter12Page5,
      Chapter12Page6,
    } from "@pages/Chapter12";
    import { chapterLinks } from "@utils";
  
    let trigger1, trigger2, trigger3, trigger4, trigger5;
  </script>
  
  <svelte:head>
    <title>How it all ended.</title>
  </svelte:head>
  
  <div class="absolute w-full bg-ch12" out:fade in:fade>
    <ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
    <div class="sm:pt-120">
      <Chapter12Page1 bind:activeTrigger={trigger1} />
      <Chapter12Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
      <Chapter12Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
      <Chapter12Page4 bind:activeTrigger={trigger3} bind:nextTrigger={trigger4} />
      <Chapter12Page5 bind:activeTrigger={trigger4} bind:nextTrigger={trigger5} />
      <Chapter12Page6 bind:activeTrigger={trigger5} />
    </div>
    <ChoicesScreen
      header="Want more numbers?"
      class="relative h-120 p-10 sm:p-4 z-999"
      choice1={{ href: `${chapterLinks.chapter12}/yes`, text: "yes" }}
      choice2={{ href: `${chapterLinks.chapter12}/no`, text: "" }}
    />
  </div>
