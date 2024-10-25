<script>
  import { Button } from '@atoms';
  const defaultClass = $$props.class || 'text-primary-300';
</script>

<Button {...$$props} on:click>
  <img src="/icons/close.svg" alt="Close" class={`fill-current ${defaultClass}`} />
</Button>
