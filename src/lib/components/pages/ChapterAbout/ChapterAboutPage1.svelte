<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  import { ChapterItem } from "@molecules";
  import { Explanation } from "@organisms";
  const abAkioSrc = "/images/about/ab-akio.png";

  import { handleTriggerClasses, imageReferences } from "@utils";

  let abAkioTrigger, NewsMTrigger, NewsRTrigger, triggerClass;

  const getTriggerClasses = () => {
    abAkioTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0 ",
      ""
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">About the project</h2>
      <p class="mb-8">
        The “Noble Rogues” is an interactive story about the feats of Japanese
        consul Chiune Sugihara and Dutch diplomat Jan Zwartendijk while rescuing
        Jews in pre-war Kaunas.
      </p>
      <p class="mb-8">
        Young people often find such topics as war, the Holocaust and diplomacy
        complex and even boring. Together with the writer Agnė Žagrakalytė and
        illustrator Kohyoh Ikeshita, we created an exciting interactive story.
      </p>
      <p class="mb-8">
        Readers will be able to choose and determine the fate of the characters,
        their luck or doom. Throughout the story, we will be accompanied by Akio
        the cat. Among the many heroes of the story, the most prominent are, of
        course, these two:
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_about sm:left-0 right-0 left-0 top-1/10 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="ab_akio maw-w-screen-xl object-contain mb-40 sm:mb-94 sm:-mx-1-5 animate-slideInTop {abAkioTrigger}"
      alt="ab_akio"
      src={abAkioSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_about {
    max-width: 1200px;
  }
  .ab_akio {
    width: 100%;
    max-width: 350px;
    z-index: 9;
  }
  @screen sm {
    .img-area_about {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    .ab_akio {
      width: 50%;
      margin-left: -17%;
    }
  }
</style>
