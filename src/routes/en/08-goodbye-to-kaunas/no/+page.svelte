<script>
    import { ChoicesTemplate } from "@components";
    import {
      Chapter8NePage1,
      Chapter8NePage2,
      Chapter8NePage3,
    } from "@pages/Chapter8";
    import { chapterTitles } from "@utils";
  
    let trigger1, trigger2, trigger3;
  </script>
  
  <svelte:head>
    <title>{chapterTitles.chapter8}</title>
  </svelte:head>
  
  <ChoicesTemplate class="bg-ch8" menu={false}>
    <Chapter8NePage1
      bind:activeTrigger={trigger1}
      bind:nextTrigger={trigger2}
    />
    <Chapter8NePage2
      bind:activeTrigger={trigger2}
      bind:nextTrigger={trigger3}
    />
    <Chapter8NePage3 bind:activeTrigger={trigger3} />
  </ChoicesTemplate>
  