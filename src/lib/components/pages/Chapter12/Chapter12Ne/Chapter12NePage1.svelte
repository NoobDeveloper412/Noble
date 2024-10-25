<script>
  import { Card } from "@atoms";
  import { elementInViewport, handleTriggerClasses } from "@utils";

  let triggerPoint,
    fromLeftClass,
    fromRightClass,
    fromTopClass,
    fromBottomClass;

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
      "animate-fadeOut"
    );
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
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

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden absolute w-1/2 top-1/10 left-1/20 h-screen sm:w-full sm:left-0"
  ></div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      Dad does not agree to be a Soviet spy and refuses to sign the cooperation
      agreement the contract. And our whole family, except for Aron, who has
      already left, although they have he does not have a transit visa for
      Japan, although he has money for train tickets the right to leave the
      Soviet Union.
      <br /><br />
      Dad is taken to an unknown direction, and Tolikas, I and mom stay in Vilnius.
      Soon The Soviet government is replaced by the Nazi government, and we, who
      so complicatedly avoided Lodz, are replaced ghetto, we enter the Vilnius Jewish
      ghetto.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .solne {
    width: 380px;
    z-index: 999;
  }
</style>
