<script>
  import { Card } from "@atoms";
  const sugiharaSrc = "/images/Chapter12/sugihara.png";

  const zwartendijkSrc = "/images/Chapter12/zwartendijk.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, slideFromTop, slideFromLeft;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    slideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    slideFromLeft = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flow-root sm:flex relative ch12_taip_bg pb-16" >
  <div class="container">
    <div
      class="image-container ch_12taip overflow-hidden fixed w-1/2 top-0 left-1/20 h-screen sm:w-full sm:left-0"
    >
      <img
        class="sugihara object-contain absolute right-1/10 bottom-0 animate-slideInBottom"
        alt="sugihara"
        src={sugiharaSrc}
      />
      <img
        class="warhaftig last left-1/4 object-contain absolute bottom-0 animate-slideInBottom"
        alt="zwartendij"
        src={zwartendijkSrc}
      />
    </div>
    <Card class="card float-right sm:float-none taip_12">
      <h2 class="c-h2 mb-8">Yes</h2>
      <p class="mb-8" bind:this={triggerPoint}>
        <b> 1989-1990 </b> - Chiune Sugihara receives the posthumous Courage Award
        and Raoul Wallenberg Award.
      </p>
      <p class="mb-8">
        <b>1990 </b> - Yukiko Sugihara writes an autobiographical book “Visas for
        Six Thousand Lives”.
      </p>
      <p class="mb-8">
        <b>1991-1993</b> - The Mir Yeshiva School in Brooklyn establishes a Sugihara
        Scholarship. The street in Vilnius is named after Chiune Sugihara. In Yaotsu,
        Gifu Prefecture, Japan, a memorial and museum are built. Sugihara is awarded
        the Nagasaki Peace Award.
      </p>
      <p class="mb-8">
        <b>1997 </b> - Jan Zwartendijk is given the title of Righteous Among the
        Nations, the Yad Vashem Award.
      </p>
      <p class="mb-8">
        <b>2001</b> - On October 2, two hundred Japanese sakuras - a gift from Japan
        to Lithuania - are planted by the White Bridge in Vilnius. Seven sakuras
        bloom every spring in Kaunas, in front of the former consulate.
      </p>
      <p class="mb-8">
        <b>2003</b> - In April, a park of hundred sakuras was planted on Nemunas
        Island in Kaunas.
      </p>
      <p class="mb-8">
        <b>2008 </b> - Yukiko Sugihara, who also published a book of poems “White
        Nights and other”, left us on October 8.
      </p>
      <p class="mb-8">
        <b>2012</b> - Jan Zwartendijk receives the posthumous Life Saving Cross from
        the President of Lithuania.
      </p>
      <p class="mb-8">
        <b>2020</b> - An illuminated monument to Jan Zwartendijk was erected in Eindhoven
        - the birth town of Philips.
      </p>
      <p class="mb-8">
        Chiune Sugihara house-museum is situated in the former Japanese
        Consulate, Vaižganto str. 30, Kaunas, Lithuania. It is visited by about
        7,000 Japanese tourists every year.
      </p>
      <p>
        A number of countries have issued special stamps in honor of Chiune
        Sugihara. The Russian Orthodox Church declared him a saint, so you can
        find painted icons of the “St Sugihara”.
      </p>
    </Card>
  </div>
</div>

<style global lang="postcss">
  .ch12_taip_bg {
    background: url("/images/Chapter12/bg-taip.png") no-repeat top center/100%
      55%;
  }
  b {
    font-weight: 600;
    font-size: 24px;
    font-family: Grafier, serif;
  }
  .taip_12 {
    margin-bottom: 40px;
  }
  .warhaftig.last {
    width: 170px;
  }
  .ch_12taip img.sugihara {
    width: 230px;
  }
  @screen sm {
    .ch_12taip {
      max-width: 100%;
      height: 148vw;
      background: url("/images/Chapter12/bg-taip.png") no-repeat top
        center/cover;
    }
    .ch12_taip_bg {
      background: none;
    }
    .taip_12 {
      margin-bottom: 0px;
    }
    .ch_12taip .warhaftig.last {
      width: 20%;
      left: 20%;
    }
    .ch_12taip .sugihara {
      width: 25%;
      right: 20%;
    }
  }
</style>
