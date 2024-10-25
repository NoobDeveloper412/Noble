<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const tableSrc = "/images/interaktyvi/illustration1501.png";

  import { ChapterItem } from "@molecules";
  import { handleTriggerClasses } from "@utils";

  let tvTrigger, tableTrigger, triggerClass;

  const getTriggerClasses = () => {
    tableTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );

    tvTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Interactive Lesson</h2>
      <p class="mb-8">
        The interactive lesson "Noble Rogues" is intended for students of grades
        8-11. The lesson is presented by Japanese consul Chiune Sugihara and a
        Dutch diplomat The exploits of Jan Zwartendijk in saving Jews in
        interwar Kaunas. Students will get to know historical figures, remember
        the interwar period, will participate in a simulation game where they
        will experience what it means to accept will get involved in decisions
        that determine their own lives or those of their loved ones conversation
        and will share thoughts about morals and moral values. Here the lesson
        aims to expand the students' attitude towards the environment, history
        and the current global situation, to promote critical thinking,
        experiences diversity and discussion among peers.
      </p>
      <p class="mb-8">
        <a
          class="link_p"
          target="_blank"
          href="/files/Kilnieji-sukčiai_pamokos-prezentacija.pdf"
          >Lesson Presentation</a
        >
        <a
          class="link_p"
          target="_blank"
          href="/files/Kilnieji-sukčiai-pamokos-metodika.pdf"
          >Methodology of the lesson</a
        >
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_about sm:left-0 right-0 left-0 top-1/5 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="table_new_p maw-w-screen-xl object-contain sm:mb-94 sm:-mx-1-5 animate-slideInBottom {tableTrigger}"
      alt="ab_akio"
      src={tableSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_about {
    max-width: 1200px;
  }

  .table_new_p {
    width: 100%;
    max-width: 950px;
    z-index: 9;
    position: absolute;
    right: 0;
    bottom: 0px;
  }

  .tv_new_p {
    width: 100%;
    max-width: 350px;
    position: absolute;
    right: 6%;
    left: auto;
    bottom: 50px;
  }
  a.link_p {
    width: 100%;
    display: block;
    text-decoration: underline;
  }
  @screen sm {
    .img-area_about {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    .table_new_p {
      width: 100%;
      margin-left: 0;
      margin-top: 113px;
      bottom: -150px;
      left: 0;
    }
    .tv_new_p {
      width: 50%;
      margin-left: 0;
      z-index: 99;
      bottom: -70px;
      right: 10%;
    }
  }
</style>
