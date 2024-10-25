<script>
  import { ChoicesTemplate, ChoicesScreen } from "@components";
  import { Chapter7NePage1 } from "@pages/Chapter7";
  import { chapterLinks, chapterTitles } from "@utils";
</script>

<svelte:head>
  <title>{chapterTitles.chapter7}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale" menu={false}>
  <Chapter7NePage1 />
  <ChoicesScreen
  header="Will Sugihara issue visas?"
  class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: `${chapterLinks.chapter7}/yes`, text: "yes" }}
    choice2={{ href: "", text: "ne" }}
/>
</ChoicesTemplate>
