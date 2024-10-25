<script>
  import { Card } from "@atoms";
  const houseNeSrc = "/images/Chapter7/house-ne.png";

  const soldierNeSrc = "/images/Chapter7/soldiers_4.png";

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
    class="image-container overflow-hidden fixed w-1/2 top-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      class="gatehouse_7ne object-contain absolute bottom-1/20 left-0 animate-slideInTop"
      alt="houseNe"
      src={houseNeSrc}
    />
    <img
      class="solne object-contain absolute bottom-0 left-1/5 animate-slideInBottom"
      alt="soldierNe"
      src={soldierNeSrc}
    />
  </div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      Sugihara obeys his authorities and does not issue visas. <br /><br />
      Japan has made it clear that visas cannot be issued. Those people applying
      for visas, even if they would be able to get to Japan - there are thousands
      of them, how to accommodate so many people, how to feed them? Besides, the
      new Soviet government made it absolutely clear that the consulate should be
      closed in August and the staff should leave the country. It’s the end of July,
      a couple of weeks left before the consulate is closed. Embassies of other countries
      have been closed long ago, their diplomats have left. Time to pack up and think
      about future. Chiune is responsible not only for himself but also for three
      young children, one of them just a baby, he is responsible for his wife and
      his wife’s sister. How will he feed such a large family if he loses his job?
      And so Sugihara stops looking out the window, forbids his family and staff
      to go outside, tries not to think about those men praying for mercy by the
      gate, their hungry children and mothers barely standing on their feet in grief.
      He tries not to hear what’s going on outside, so he plays the “Maiden’s Prayer”
      as loud as possible.
    </p>
  </Card>
</div>

<style global lang="postcss">

</style>
