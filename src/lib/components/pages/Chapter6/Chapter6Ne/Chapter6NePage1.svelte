<script>
  import { Card } from "@atoms";
  const doorSrc = "/images/chapter6/door.png";

  const soldilerSrc = "/images/chapter6/soldier1@2x.png";

  const soldiler2Src = "/images/chapter6/soldier2@2x.png";

</script>

<div class="chapter-item flow-root sm:flex">
  <div
    class="image-container_6ne overflow-hidden fixed w-3/4 top-0 sm:top-1/10 left-0 h-screen sm:w-full sm:left-0"
  >
    <img
      src={soldilerSrc}
      alt=""
      class="sol1 absolute bottom-0 left-0 my-auto animate-slideInBlurredLeft delay-6000"
    />
    <img
      src={doorSrc}
      alt=""
      class="door absolute bottom-0 left-0 right-0 mx-auto animate-slideInTop"
    />
    <img
      src={soldiler2Src}
      alt=""
      class="sol2 absolute bottom-0 right-0 mx-auto animate-slideInBlurredRight delay-16000"
    />
  </div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      But the interim Dutch Consul strictly follows the rules. From his direct
      boss De Decker, the Dutch Ambassador to the Baltic States, who resides in
      Riga, he’s received a message that states yes, no visa is required to go
      to the island of Curaçao, but there is nothing on that island to see. A
      lighthouse and... some rocks? Several small cottages and a Governor who
      certainly won’t give his permission to settle for the newcomers arriving
      without a penny in their pockets.
      <br /><br />
      Besides, the Soviets have already taken power in Lithuania and told all the
      embassies and consulates to close and all the foreigners to leave the country
      immediately. Jan Zwardendijk has less than two months left to work, and after
      that he will take his wife and three children and go back to the Netherlands
      - which is occupied by the Nazis, but he’s not a Jew, so he’s not in any serious
      danger. “I’m sorry, kid,” he tells Nathan, closing the Consulate door. “I’m
      not a kid! I’m 23 years old! The Soviets have already closed all the yeshivas
      in Vilnius, they will close the Telshe Yeshiva, too, all the students and teachers
      will be taken away! Taken to Siberia or killed immediately!”

      <br /><br />
      But the door of the Consulate stays closed.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .image-container_6ne {
    max-width: 70%;
    z-index: -9;
  }
  img.sol1 {
    width: 28%;
    height: auto;
    z-index: 999;
  }
  .door {
    width: 36%;
    height: auto;
  }
  img.sol2 {
    width: 30%;
    height: auto;
  }
  @screen mdRange {
    .image-container_6ne {
      max-width: 60%;
      z-index: -9;
    }
  }
  @screen sm {
    .image-container_6ne {
      max-width: 100%;
      z-index: auto;
      height: 73vh;
    }
    img.sol1 {
      width: 55%;
      height: auto;
      z-index: 999;
      left: -10%;
      bottom: 0;
    }
    img.sol2 {
      width: 65%;
      height: auto;
      margin-right: -5%;
      bottom: 0;
    }
    .door {
      width: 75%;
      height: auto;
      bottom: 0;
    }
  }
</style>
