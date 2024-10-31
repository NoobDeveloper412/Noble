<script>
    import { ChoicesTemplate, ChoicesScreen } from "@components";
    import { Chapter11NePage1 } from "@pages/Chapter11";
    import { chapterLinks, chapterTitles } from "@utils";
  </script>
  
  <svelte:head>
    <title>{chapterTitles.chapter11}</title>
  </svelte:head>
  
  <ChoicesTemplate class="bg-grayscale sm:bg-primary chapter_11ne" menu={false}>
    <Chapter11NePage1 />
    <ChoicesScreen
      header="Will you hide the girls?"
      class="relative h-120 p-10 sm:p-4 z-10"
      choice1={{ href: `${chapterLinks.chapter11}/yes`, text: "yes" }}
      choice2={{ href: "", text: "ne" }}
    />
  </ChoicesTemplate>
  