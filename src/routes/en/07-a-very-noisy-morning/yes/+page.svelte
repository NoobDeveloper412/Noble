<script>
  import { ChoicesTemplate, ChoicesScreen } from "@components";
  import {
    Chapter7TaipPage1,
    Chapter7TaipPage2,
    Chapter7TaipPage3,
  } from "@pages/Chapter7";
  import { chapterTitles, chapterLinks } from "@utils";

  let trigger1, trigger2, trigger3;
</script>

<svelte:head>
  <title>{chapterTitles.chapter7}</title>
</svelte:head>

<ChoicesTemplate class="bg-ch7" menu={false}>
  <Chapter7TaipPage1
    bind:activeTrigger={trigger1}
    bind:nextTrigger={trigger2}
  />
  <Chapter7TaipPage2
    bind:activeTrigger={trigger2}
    bind:nextTrigger={trigger3}
  />
  <Chapter7TaipPage3 bind:activeTrigger={trigger3} />
</ChoicesTemplate>

