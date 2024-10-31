<script>
    import { ChapterTemplate, ChoicesScreen } from "@components";
    import { ChapterMenu } from "@organisms";
    import { menuLinks } from "@utils";
    import { fade } from "svelte/transition";
    import { Chapter9Page1, Chapter9Page2, Chapter9Page3 } from "@pages/Chapter9";
    import { chapterLinks } from "@utils";
  
    let trigger1, trigger2, trigger3, trigger4, trigger5;
  </script>
  
  <svelte:head>
    <title>Counterfeits & Copies</title>
  </svelte:head>
  
  <div class="absolute w-full bg-ch9" out:fade in:fade>
    <ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
    <div class="sm:pt-120">
      <Chapter9Page1 bind:activeTrigger={trigger1} />
      <Chapter9Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
      <Chapter9Page3 bind:activeTrigger={trigger2} />
    </div>
    <ChoicesScreen
      header="Will Dad agree to be a Soviet spy?"
      class="relative h-120 p-10 sm:p-4 z-999"
      choice1={{ href: `${chapterLinks.chapter9}/yes`, text: "yes" }}
      choice2={{ href: `${chapterLinks.chapter9}/no`, text: "no" }}
    />
  </div>
  