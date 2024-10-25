<script>
  import { Card } from "@atoms";
  import { Explanation } from "@organisms";
  const handSrc = "/images/Chapter4/hand-no.png";

  const hand2Src = "/images/Chapter4/hand-no2.png";

</script>

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 top-1/10 left-0 h-screen sm:w-full sm:left-0"
  >
    <img src={handSrc} alt="" class="absolute" />
    <img
      src={hand2Src}
      alt=""
      class="absolute w-1/2 right-0 bottom-0 top-0 my-auto animate-fadeOutSlow"
    />
  </div>
  <Card class="card dark last float-right sm:float-none">
    <h2 class="c-h2 mb-8">No</h2>
    <p>
      I'm 21. He is 35. I never dreamed of getting married, I imagined myself a
      modern, artistic girl. I felt sick just thinking about an <Explanation
        variant="gray"
        background="dark"
        class="border-grayscale border-b-4"
      >
        <div slot="content" class="w-full">
          <p class="p-6">
            Contractual marriage means that the parents of the couple decide who
            will be the husband and wife, without asking their own opinion. At
            the time of the story, this was a common practice almost without
            exception.
          </p>
        </div>
        <span slot="text">contractual</span>
      </Explanation> marriage. I wanted a real love story, just like the one that
      happened between my mother and father when they fell in love while playing
      tennis. This man had already been married. He was recently divorced.
    </p>
    <p class="mt-8">
      And so I don’t agree to marry, I reject his offer. Chiune doesn’t visit us
      anymore. I continue to prepare breakfast and dinner for my brother. War is
      approaching. My poems are becoming sadder and sadder.
    </p>
    <p class="mt-8 bg-primary-300 w-3 h-3 border-none rounded-lg" />
  </Card>
</div>
