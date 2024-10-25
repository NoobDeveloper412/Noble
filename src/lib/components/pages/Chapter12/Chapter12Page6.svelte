<script>
    export let activeTrigger, nextTrigger;
    import { Container, Card } from "@atoms";
    import { ChapterItem, HoverImage } from "@molecules";
    const sugiharaSrc = "/images/Chapter12/sugihara.png";

    const zwartendijkSrc = "/images/Chapter12/zwartendijk.png";

    const mapSrc = "/images/Chapter12/map.png";

    import { elementInViewport, handleTriggerClasses } from "@utils";
  
    let triggerPoint, fromLeftClass, fromRightClass, fromTopClass, fromBottomClass;
  
    const getTriggerClasses = () => {
      fromLeftClass = handleTriggerClasses(
        activeTrigger,
        nextTrigger,
        "animate-slideInBlurredLeft",
        ""
      );
      fromRightClass = handleTriggerClasses(
        activeTrigger,
        nextTrigger,
        "animate-slideInBlurredRight",
        ""
      );
      fromTopClass = handleTriggerClasses(
        activeTrigger,
        nextTrigger,
        "animate-slideInTop",
        ""
      );
      fromBottomClass = handleTriggerClasses(
        activeTrigger,
        nextTrigger,
        "animate-slideInBottom",
        ""
      );
      
    };
  
    const setActiveTrigger = () => {
      activeTrigger = elementInViewport(triggerPoint);
      getTriggerClasses();
    };
  </script>
  
  <svelte:window on:scroll={setActiveTrigger} />
  <ChapterItem class="z-20 mb-20 sm:mb-0 sm:mt-152 z-9999">
    <div slot="story" class="animate-slideInBlurredBottom">
      <Card>
        <p class="mb-6" bind:this={triggerPoint}>
          For Jan Zwartendijk, things turned a little less happy. He never told
          anyone about the events in Lithuania. Leaving Kaunas, he burned all the
          lists of the visas he issued. In 1964, he received a strict reprimand -
          instead of award - from the Dutch authorities for counterfeiting visas.
          Jan Zwartendijk never found out how many Jewish lives he had saved. Only
          on 15 September, 1976, a letter came from Israel to Eindhoven stating
          that 95 percent of the Jews he saved - 2132 people - had survived the
          war. The saddest thing is that Jan Zwartendijk died on September 14 of
          that same year. The good news came one day too late.
        </p>
        <p class="mb-6" bind:this={triggerPoint}>
          In 2000, an asteroid was named after Sugihara – “Asteroid 25893
          Sugihara”.
        </p>
        <p class="dot"></p>
      </Card>
    </div>
  </ChapterItem>
  <style global lang="postcss">
    @screen sm{
      .whole_ch_12 {
        width: 100%;
        height: 340px;
      }
      .warhaftig.last {
        width: 20%;
        left: 13%;
      }
      .sugihara {
        width: 25%;
        right: 30%;
      }
      .map_last {
        width: 100%;
        z-index: -9;
        left: auto;
        right: 0%;
        bottom: auto;
        top: 0;
      }
    }
  </style>