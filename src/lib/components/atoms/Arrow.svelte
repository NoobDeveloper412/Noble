<script>
  export let direction = 'DOWN';

  const defaultClass = $$props.class || 'text-primary-300';
  const directions = {
    LEFT: '',
    RIGHT: 'rotate-180',
    DOWN: '-rotate-90',
    UP: 'rotate-90',
  };
</script>

<img
  src="/icons/arrow-left.svg"
  height="8px"
  width="16px"
  alt="Arrow Icon"
  class={`mx-2 transform ${directions[direction]} fill-current ${defaultClass}`}
/>
