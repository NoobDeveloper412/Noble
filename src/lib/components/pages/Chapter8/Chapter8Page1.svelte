<script>
  export let trigger;
  export let activeTrigger, nextTrigger;
  import { Card } from "@atoms";
  const bathSrc = "/images/Chapter8/bath.png";

  const womenSrc = "/images/Chapter8/women.png";

  import { ChapterItem } from "@molecules";
  import { handleTriggerClasses } from "@utils";

  let bathClass, containerClass, triggerClass;

  const getTriggerClasses = () => {
    bathClass = handleTriggerClasses(trigger, undefined, "animate-fadeOut", "");
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
      <h2 class="c-h2 mb-8">Goodbye to Kaunas</h2>
      <p class="mb-8">
        When I was still a kitten, I spent a lot of time in the nursery. I liked
        the way the children laughed when I tried to catch a piece of paper tied
        to a thread, and I also liked the Japanese folk tales Setsuko told them.
        Only when I was a bit older, no longer a ball of fluff but a gracious
        beast, I began to distrust her, Setsuko, or rather her tales.
      </p>
      <p class="mb-8">
        Once, when she was angry with the maid, she told us about Akaname, the
        Japanese spirit who comes at night to lick the bathtub if it wasn’t
        properly scrubbed in the evening. Once, when she was angry with the
        maid, she told us about Akaname, the Japanese spirit who comes at night
        to lick the bathtub if it wasn’t properly scrubbed in the evening.
        Illustration 0801 Akaname in bathroom Crawling on the wall. Long tongue.
        Slime around feet and hands. I spent all night by the bathroom door,
        lurking to see this Akaname, her long dribbling tongue licking the
        uncleaned edges of the bathtub, but didn’t get to see a shadow of a
        mouse.
      </p>
      <p class="mb-8">
        And when I heard a tale about a tricolor cat with two tails - it was
        dancing and singing for an old lady every night, asking not to tell
        anyone, and when she told her husband, the cat slaughtered her, - I felt
        deeply offended and left the room without even listening to the end of
        the story.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="w-full flex justify-center ch-8-main items-center relative {triggerClass}"
  >
    <img
      class="bath maw-w-screen-xl object-contain mb-40 sm:mb-32 sm:-mx-1-5 animate-slideInBlurredBottom {bathClass}"
      alt="bath"
      src={bathSrc}
    />
    <img
      class="women absolute maw-w-screen-xl animate-vibrate object-contain sm:mb-32 sm:-mx-1-5 {bathClass}"
      alt="house"
      src={womenSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .women {
    width: 25%;
    top: 35px;
    margin-left: 12%;
  }

  @screen sm {
    .women {
      width: 37%;
      top: 6px;
      margin-left: 17%;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .ch-8-main {
      max-width: 90%;
    }
  }
</style>
