<script>
    import { ChapterTemplate, ChoicesScreen } from "@components";
    import { ChapterMenu } from "@organisms";
    import { menuLinks } from "@utils";
    import { fade } from "svelte/transition";
    import {
      Chapter11Page1,
      Chapter11Page2,
      Chapter11Page3,
    } from "@pages/Chapter11";
    import { chapterLinks } from "@utils";
  
    let trigger1, trigger2, trigger3, trigger4, trigger5;
  </script>
  
  <svelte:head>
    <title>Whose children</title>
  </svelte:head>
  
  <div class="absolute w-full bg-ch11" out:fade in:fade>
    <ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
    <div class="sm:pt-120">
      <Chapter11Page1 bind:activeTrigger={trigger1} />
      <Chapter11Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
      <Chapter11Page3 bind:activeTrigger={trigger2} />
    </div>
    <ChoicesScreen
      header="Will you hide the girls?"
      class="relative h-120 p-10 sm:p-4 z-999"
      choice1={{ href: `${chapterLinks.chapter11}/yes`, text: "yes" }}
      choice2={{ href: `${chapterLinks.chapter11}/no`, text: "no" }}
    />
  </div>
  
  <style global lang="postcss">

  </style>
  