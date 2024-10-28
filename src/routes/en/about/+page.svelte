<script>
    import { Card } from "@atoms";
    import { ChapterMenu } from "@organisms";
    import {
      ChapterAboutPage1,
      ChapterAboutPage2,
      ChapterAboutPage3,
      ChapterAboutPage4,
    } from "@pages/ChapterAbout";
    import { fade } from "svelte/transition";
    import { menuLinks } from "@utils";
  
    let trigger1, trigger2, trigger3, trigger4, trigger5;
  </script>
  
  <svelte:head>
    <title>About</title>
  </svelte:head>
  
  <div class="absolute w-full bg-primary" out:fade in:fade>
    <ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
    <div class="about_page sm:pt-120">
      <ChapterAboutPage1 bind:activeTrigger={trigger1} />
      <ChapterAboutPage2
        bind:activeTrigger={trigger1}
        bind:nextTrigger={trigger2}
      />
      <ChapterAboutPage3
        bind:activeTrigger={trigger2}
        bind:nextTrigger={trigger3}
      />
      <ChapterAboutPage4 bind:activeTrigger={trigger3} />
      <Card class="last_card relative flex ml-28 md:ml-0 z-20 mb-20 sm:mt-152">
        <div class="w-1/2">
          <div class="f_area">
            <b>Writer:</b>
            <p>Agnė Žagrakalytė</p>
          </div>
          <div class="f_area">
            <b>Illustrator:</b>
            <p>Kohyoh Ikeshita</p>
          </div>
          <div class="f_area">
            <b>Creative Director:</b>
            <p>Sergej Grigorjev</p>
          </div>
          <div class="f_area">
            <b>Designer:</b>
            <p>Laima Mažeikaitė</p>
          </div>
          <div class="f_area">
            <b>Initiator:</b>
            <p>VšĮ Kultūrinės ir organizacinės idėjos</p>
          </div>
        </div>
        <div class="w-1/2">
          <div class="f_area">
            <b>Content Partner:</b>
            <p>Sugiharos muziejus</p>
          </div>
          <div class="f_area">
            <b>Talent Partner:</b>
            <p>Oh! Musubi</p>
          </div>
          <div class="f_area">
            <b>Technical Solution:</b>
            <p>Nuostabu.lt, Telesoftas</p>
          </div>
          <div class="f_area">
            <b>Partially funded by: :</b>
            <p>Lietuvos kultūros taryba, EU-Japan Fest</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
  
  <style global lang="postcss">
 
  </style>
  