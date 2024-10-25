<script>
  import { Card } from "@atoms";
  const personsSrc = "/images/chapter6/persons.png";

  const janSrc = "/images/chapter6/jan_2.png";

  const visaSrc = "/images/chapter6/visa.png";

  import { elementInViewport, handleTriggerClasses } from "@utils";

  export let activeTrigger, nextTrigger;
  let triggerPoint, imageTrigger, personsTrigger, janTrigger, visaTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    janTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-slideOutBlurredRight"
    );
    visaTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-slideOutTop"
    );

    console.log(triggerPoint)
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="img-area ch6_taip image-container overflow-hidden fixed w-1/2 top-0 left-1/10 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={janSrc}
      alt=""
      class="jan_2 absolute bottom-1/10 left-0 right-0 mx-auto opacity-0 {janTrigger}"
    />
    <img
      src={personsSrc}
      alt=""
      class="absolute persons_2 bottom-0 my-auto sm:bottom-1/10 opacity-0 {personsTrigger}"
    />
    <img
      src={visaSrc}
      alt=""
      class="visa_2 absolute bottom-0 left-0 right-0 mx-auto opacity-0 {visaTrigger}"
    />
  </div>
  <Card class="card float-right">
    <p class="mb-6" bind:this={triggerPoint}>
      And so both students head to the Japanese Consulate, where Consul Chiune
      Sugihara issues them transit Japanese visas. They will only be able to
      stay in Japan for ten days. However, having these two seals - the final
      visa of Curaçao and the transit visa of Japan - they can get the Soviet
      permission to leave, so they grab Aaron, who is following them around and
      blinking strangely, and head to Vilnius. Vilnius is red with red flags,
      full of joyful people, full of frightened people - trying to find Aaron’s
      family in this helter skelter of laughing and crying people, three young
      men visit the leader of the Vilnius Jewish community, Zorach Warhaftig
      himself, who listens to their story and tells the students to go back to
      Kaunas and ask Consul Zwartendijk: would he be so kind as to write the
      same passport statement for anyone asking?
    </p>
    <p class="mb-6">
      Jan Zwartendijk agreed. Warhaftig spread the message to all the refugees
      in Vilnius, and people began to flood the Dutch Consulate. And so began
      the famous Story of Visas. This is how Mr. Radio got a new nickname: Angel
      of Curaçao.
    </p>
  </Card>
</div>
